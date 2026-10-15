const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  { name: 'cover.jpg', id: 'photo-1516589178581-6cd7833ae3b2', w: 1000, h: 1000 },
  { name: 'memory-01.jpg', id: 'photo-1518199266791-5375a83190b7', w: 800, h: 1000 },
  { name: 'memory-02.jpg', id: 'photo-1517256064527-09c73fc73e38', w: 800, h: 1000 },
  { name: 'memory-03.jpg', id: 'photo-1515934751635-c81c6bc9a2d8', w: 1000, h: 800 },
  { name: 'memory-04.jpg', id: 'photo-1529333166437-7750a6dd5a70', w: 800, h: 1000 },
  { name: 'memory-05.jpg', id: 'photo-1507525428034-b723cf961d3e', w: 1000, h: 800 },
  { name: 'memory-06.jpg', id: 'photo-1495616811223-4d98c6e9c869', w: 800, h: 1000 },
  { name: 'gallery-01.jpg', id: 'photo-1526047932273-341f2a7631f9', w: 800, h: 1000 },
  { name: 'gallery-02.jpg', id: 'photo-1519741497674-611481863552', w: 1000, h: 800 },
  { name: 'gallery-03.jpg', id: 'photo-1455390582262-044cdead277a', w: 900, h: 900 },
  { name: 'gallery-04.jpg', id: 'photo-1501339847302-ac426a4a7cbb', w: 800, h: 1000 },
  { name: 'gallery-05.jpg', id: 'photo-1469854523086-cc02fe5d8800', w: 1000, h: 750 },
  { name: 'gallery-06.jpg', id: 'photo-1495446815901-a7297e633e8d', w: 800, h: 1000 },
  { name: 'gallery-07.jpg', id: 'photo-1506703719100-a0f3a48c0f86', w: 1000, h: 800 },
  { name: 'gallery-08.jpg', id: 'photo-1470240731273-7821a6eeb6bd', w: 900, h: 900 },
];

async function download() {
  console.log(`Downloading ${images.length} placeholder photographs...`);
  for (const img of images) {
    const url = `https://images.unsplash.com/${img.id}?w=${img.w}&h=${img.h}&auto=format&fit=crop&q=80`;
    const dest = path.join(targetDir, img.name);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(arrayBuffer));
      console.log(`✓ Saved ${img.name} (${(arrayBuffer.byteLength / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`✗ Failed to download ${img.name}:`, err.message);
    }
  }
  console.log('Finished downloading images.');
}

download();
