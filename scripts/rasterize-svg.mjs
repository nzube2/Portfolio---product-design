import sharp from 'sharp';
const [, , input, output, width] = process.argv;
await sharp(input, { density: 300 })
  .resize({ width: Number(width) })
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(output);
console.log(`${input} -> ${output}`);
