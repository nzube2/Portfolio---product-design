#!/usr/bin/env node
// Compresses an image in place (or to an output path) before it goes into
// src/assets. Resizes anything wider than --max-width and re-encodes with
// sharp's compressor. Usage:
//   node scripts/optimize-image.js <input> [output] [--max-width=1600]
import sharp from 'sharp';
import path from 'path';

const args = process.argv.slice(2);
const flags = args.filter((a) => a.startsWith('--'));
const positional = args.filter((a) => !a.startsWith('--'));

const input = positional[0];
const output = positional[1] || input;
const maxWidthFlag = flags.find((f) => f.startsWith('--max-width='));
const maxWidth = maxWidthFlag ? Number(maxWidthFlag.split('=')[1]) : 1600;

if (!input) {
  console.error('Usage: node scripts/optimize-image.js <input> [output] [--max-width=1600]');
  process.exit(1);
}

const ext = path.extname(input).toLowerCase();

async function run() {
  const before = (await import('fs')).statSync(input).size;

  let pipeline = sharp(input).resize({
    width: maxWidth,
    withoutEnlargement: true,
  });

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: 82, compressionLevel: 9 });
  } else if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 82 });
  } else {
    console.error(`Unsupported extension: ${ext} (svg/gif pass through untouched)`);
    process.exit(1);
  }

  const buffer = await pipeline.toBuffer();
  (await import('fs')).writeFileSync(output, buffer);

  const after = buffer.length;
  const pct = (100 * (1 - after / before)).toFixed(1);
  console.log(
    `${path.basename(input)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`
  );
}

run();
