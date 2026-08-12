import sharp from 'sharp';
const path = process.argv[2];
const m = await sharp(path).metadata();
console.log(path, ':', m.width, 'x', m.height);
