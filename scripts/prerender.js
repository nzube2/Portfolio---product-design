#!/usr/bin/env node
// Post-build prerender step. Serves the already-built `dist/` folder with
// Vite's preview server, then uses Puppeteer to visit each route and save
// the fully-rendered DOM back into dist/<route>/index.html. This runs
// *after* `vite build`, not instead of it — the SPA bundle (JS/CSS) is
// untouched, so the app still hydrates and works interactively once loaded;
// crawlers/bots that don't execute JS now see real content instead of an
// empty <div id="root"></div> shell.
import { preview } from 'vite';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');

// Vercel's build image is missing several shared libraries the full
// `puppeteer` package's bundled Chromium needs, so it fails to launch
// there even though it works fine locally. Vercel sets VERCEL=1 during
// both build and runtime, so use that to pick a serverless-compatible
// Chromium (puppeteer-core + @sparticuz/chromium) only when actually
// building on Vercel, and the regular full `puppeteer` package (which
// downloads its own known-good Chrome build) everywhere else.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const [{ default: puppeteerCore }, { default: chromium }] =
      await Promise.all([
        import('puppeteer-core'),
        import('@sparticuz/chromium'),
      ]);
    return puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }

  const { default: puppeteer } = await import('puppeteer');
  return puppeteer.launch({ headless: true });
}

// Each route paired with a selector that only exists once that route's
// actual content has rendered (lazy-loaded case study pages show an empty
// <div className="route-fallback" /> via Suspense until their chunk loads,
// so waiting on the route root alone isn't enough).
const routes = [
  { url: '/', waitFor: '#case-studies' },
  { url: '/case-studies/markettrack', waitFor: '.portfolio-hero-heading' },
  { url: '/case-studies/guidely', waitFor: '.guidely-hero-heading' },
  { url: '/case-studies/thermal', waitFor: '.thermal-hero-heading' },
  { url: '/case-studies/portfolio', waitFor: '.portfolio-hero-heading' },
];

const outputPathFor = (routeUrl) =>
  routeUrl === '/'
    ? path.join(distDir, 'index.html')
    : path.join(distDir, routeUrl.replace(/^\//, ''), 'index.html');

async function main() {
  const server = await preview({
    root,
    preview: { port: 0, open: false, strictPort: false },
  });

  const resolvedUrl = server.resolvedUrls?.local?.[0];
  if (!resolvedUrl) {
    throw new Error('Could not resolve preview server URL.');
  }
  const baseUrl = resolvedUrl.replace(/\/$/, '');
  console.log(`Prerender server running at ${baseUrl}`);

  const browser = await launchBrowser();

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      const target = `${baseUrl}${route.url}`;
      console.log(`Rendering ${route.url} ...`);

      // `networkidle0` waits for zero in-flight requests for 500ms, but
      // several pages here have autoplaying/looping <video>/<audio>
      // elements that can keep the network "busy" indefinitely — that
      // condition may simply never be met, hanging the build instead of
      // failing it. `domcontentloaded` fires as soon as the HTML/JS has
      // loaded and run; `waitForSelector` below is the real signal that
      // the route's actual content has rendered, so it's what matters.
      await page.goto(target, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });
      await page.waitForSelector(route.waitFor, { timeout: 20000 });

      const html = await page.content();
      const outPath = outputPathFor(route.url);
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, 'utf-8');

      console.log(
        `  wrote ${path.relative(root, outPath)} (${html.length} bytes)`
      );
      await page.close();
    }
  } finally {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.httpServer.close((err) => (err ? reject(err) : resolve()));
    });
  }

  console.log('Prerender complete.');
}

// Hard ceiling on the whole script, independent of the per-step timeouts
// above — if anything else unexpected hangs (e.g. the Chromium binary
// failing to extract, or the preview server never starting), fail loudly
// after 2 minutes instead of silently eating the Vercel build's time limit.
const watchdog = setTimeout(() => {
  console.error('Prerender timed out after 120s — forcing exit.');
  process.exit(1);
}, 120000);
watchdog.unref?.();

main()
  .catch((err) => {
    console.error('Prerender failed:', err);
    process.exitCode = 1;
  })
  .finally(() => clearTimeout(watchdog));
