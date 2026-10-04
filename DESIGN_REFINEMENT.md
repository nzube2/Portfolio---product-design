# Portfolio design refinement

## Audit and direction

The original site uses Vite, React, React Router, component-level plain CSS, and a Puppeteer prerender step. The owner explicitly confirmed preserving this existing stack after the brief's vanilla-JavaScript mismatch was identified. No framework, dependency, animation library, or build tooling was added to the project.

Components and their markup live in `src/components`, route pages in `src/pages`, and project copy in `src/data`. Images live in `src/assets` and `public/images`; videos remain in `public/videos`.

The initial audit identified competing hero videos, a delayed loading overlay, projects hidden in a carousel, lengthy titles that obscured outcomes, five font families, duplicate resets and hard-coded styles, brittle absolute positioning, small mobile typography and targets, replaying motion, and incomplete navigation semantics.

The implementation followed this order: tokens and typography; hero and project comparison; section hierarchy and responsive layouts; navigation and motion; image loading and SEO; production verification.

## Changelog and files

- **Design system:** `src/styles/tokens.css`, `base.css`, `layout.css`, `components.css`, and `animations.css`, imported through `src/index.css`. The site now uses a deep warm neutral, off-white, a restrained coral accent, and one self-hosted Manrope variable font. Body copy stays at 16–18px; secondary labels use a smaller size. The new layouts use an 8px spacing scale and three radii.
- **Existing detail layouts:** case-study CSS and remaining Experience/MoreOfMyWorks CSS now reference central tokens. Existing artwork geometry and documented project brand samples have their own token group. Media-query widths remain literal CSS breakpoints; color samples printed in the Guidely case study remain content. Original SVG artwork is preserved.
- **Cleanup:** removed duplicate global resets, five unused home stylesheets, the obsolete App stylesheet, and the decorative Loader component and stylesheet. Removed repeated tool badges and unused tokens/asset metadata.
- **First screen:** `Hero.jsx` now leads with the requested positioning, role, location, remote availability, and two CTAs. It no longer loads the three decorative hero videos or waits on the loader. Containers align with Selected Work. The first project peeks into an 800px-tall mobile viewport at 360px wide.
- **Work:** `CaseStudy.jsx` exposes three featured projects with real interface previews, supported outcome summaries, roles, and tags. Original project titles, briefs, and contributions remain in expandable context panels and the data files. The fourth portfolio case study remains linked and retains its copy.
- **Hierarchy:** `Home.jsx` places About after Selected Work, then Skills/Process. Existing Experience and additional-work content are retained before Contact. About and Skills use normal-flow layouts rather than fixed coordinates or stacking panels.
- **Case studies:** `CaseOverview.jsx` adds a problem/outcome summary using existing evidence. Original role/timeline/tools metadata, images, routes, and next-project links remain. Inert Read Case Study buttons now navigate to content. Tablet layouts activate before the original fixed-position designs can overflow.
- **Navigation/accessibility:** `Header.jsx`, `App.jsx`, and `behaviors/nav.js` add named navigation, active states, menu expansion semantics, Escape closure with focus return, anchor closure, a skip link, and a main landmark. Tap targets and focus styling are improved.
- **Motion:** `behaviors/scroll-reveal.js`, `motion-preference.js`, and animation CSS provide one-time reveals, restrained transform/opacity transitions, a staggered hero entrance, and reduced-motion handling for CSS and decorative videos. Additional-work audio starts only through its existing control; its Dribbble link is available to keyboard and touch users and now has a descriptive label.
- **Media:** `Image.jsx` and `data/imageDimensions.js` provide intrinsic dimensions, decoding, and lazy loading below the fold. WebP versions are used when smaller; five PNGs were retained because their WebP versions were larger. Original source media is retained. Font and license are in `public/fonts`.
- **SEO:** `behaviors/metadata.js` supplies route-specific titles/descriptions. `index.html` preloads the font and includes Open Graph/Twitter metadata. `public/images/og-portfolio.png` is an original text-based share card. The favicon and prerendered routes remain.

The chosen accent is warm coral and the font is Manrope. One alternative is a cool periwinkle accent with the same font; the warm version was applied consistently.

## Verification

- `npm run build`: passed, including prerendering home, MarketTrack, Guidely, Thermal, and Portfolio. No Vite errors or warnings.
- `npm run preview -- --host 127.0.0.1 --port 4173`: running at `http://127.0.0.1:4173`.
- Browser checks at 360, 768, 1024, and 1440px across all five routes: no horizontal overflow, no page errors or broken images, one H1 per page, and dimensions on every image.
- Keyboard/interaction checks: skip link, mobile expanded state, Escape/focus return, anchor closure, project navigation, next-project navigation, reduced-motion entrances/video playback, and one-time reveal behavior.
- Solid-background text contrast checks: no failures. Image/gradient/video backgrounds and text embedded in original artwork require visual review; the video title scrim was strengthened.
- Local screenshots and JSON evidence are in `artifacts`. The reusable browser checks are `scripts/verify-design.mjs`, `verify-contrast.mjs`, and `verify-interactions.mjs`; `verify-tokens.mjs` checks CSS token compliance.
- Lighthouse 12.8.2 mobile simulation on the local production homepage: **Performance 99, Accessibility 100, Best Practices 100, SEO 100**. Reports: `artifacts/lighthouse-home.report.html` and `.json`. These scores cover the homepage; they are not a guarantee of deployed performance or scores on every case study. No audit dependency was added to the project.

## Manual review checklist

- [ ] Open all five routes at 360, 768, 1024, and 1440px; check long captions, image readability, and opening/closing project context panels.
- [ ] Tab through the skip link, mobile menu, CTAs, project links, summaries, media controls, and footer. Check visible focus and Escape return.
- [ ] Enable reduced motion before loading, then change it while a video is playing. Confirm content remains visible and decorative playback pauses.
- [ ] Inspect text over videos, gradients, screenshots, and SVG artwork; automated solid-background checks do not cover every pixel of these surfaces.
- [ ] Confirm the Google Drive resume is publicly accessible and downloads correctly. This external permission was not changed.
- [ ] Check email, LinkedIn, Dribbble, GitHub, Loom, and existing project destinations.
- [ ] Before publishing, set the Open Graph image URL to the absolute production URL, test the share preview, and run Lighthouse on the deployed site.

## Content improvements for the owner

1. **MarketTrack:** add measured evidence such as time to find stock, inventory discrepancies, or how often the business uses the tool. Distinguish measured results from stakeholder feedback.
2. **Dates:** reconcile the Ifythel Experience dates (Jun 2023–Sept 2024) with the MarketTrack project timeline (June–October 2025), or explain the separate engagement.
3. **Guidely:** identify the research/testing sample, task outcomes, and whether the app was deployed, piloted, or remained an academic prototype.
4. **Thermal:** replace “ongoing” with a clear date range or current stage, and explain which parts have been validated with listeners. It is presented as a concept, not a proven live product.
5. **About:** tighten the original two paragraphs to 3–4 sentences and correct punctuation/capitalization. The existing wording was preserved rather than silently edited.
6. **Contact:** consider “Let's build a thoughtful product” in place of “Ready To Build Something Epic?” The original heading is retained.
7. **Portfolio case study:** update the description of shifting colors and film-like pacing to match the refined, restrained site. Original copy remains until you revise it.
8. **Resume:** consider hosting the PDF directly under a stable portfolio URL so availability does not depend on Drive sharing settings.
9. **Project claims:** keep shipped-product evidence separate from design outcomes; avoid numerical metrics without a recorded baseline.


## Hero portrait follow-up

Added the owner's supplied portrait as a 59.5KB WebP asset imported through Vite. `Hero.jsx` now pairs the photo with the existing introduction and CTAs. A coral “Tested & trusted” badge lands once with a short scale/rotation press animation; reduced-motion users see its settled state immediately. The portrait stays beside the headline on mobile with a smaller badge, without covering the face.

Files: `src/assets/valentina-portrait.webp`, `src/components/Hero.jsx`, and the existing tokens/layout/components/animations CSS files. Verification: full production build and all prerendered routes passed; homepage preview checked at 360, 768, 1024, and 1440px with no horizontal overflow or page errors; reduced-motion animation disabled and CSS token compliance passed. Recheck Lighthouse on deployment after media changes; the earlier scores above describe the pre-portrait audit.

## Torn-paper portrait follow-up

Replaced the hero's rectangular portrait with a transparent silhouette and an irregular off-white torn-paper edge, using the built-in imagegen edit tool. The stamp remains. The original photo asset is retained; the new asset is `src/assets/valentina-portrait-torn.webp`. Prompt, generation mode, and verification details are in `artifacts/portrait-edit.md`. Production build and responsive preview checks passed.
