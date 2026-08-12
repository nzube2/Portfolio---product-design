#!/usr/bin/env node
// One-off: extracts a base64-embedded raster image from a Figma-exported
// SVG (the "image fill" pattern trick) into a real PNG file.
import fs from 'fs';

const [, , input, output] = process.argv;
if (!input || !output) {
  console.error('Usage: node scripts/extract-svg-image.js <input.svg> <output.png>');
  process.exit(1);
}

const svg = fs.readFileSync(input, 'utf8');
const match = svg.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
if (!match) {
  console.error('No embedded base64 PNG found in', input);
  process.exit(1);
}

fs.writeFileSync(output, Buffer.from(match[1], 'base64'));
console.log(`Extracted ${input} -> ${output} (${(fs.statSync(output).size / 1024).toFixed(0)}KB)`);
