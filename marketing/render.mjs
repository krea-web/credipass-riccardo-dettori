// Render every `section.slide[data-out]` in posts.html as a 1080x1350 PNG.
// Uses puppeteer-core pointed at the system Microsoft Edge install (no Chromium download).
//
// Outputs:
//   output/<data-out>.png   (folders are created as needed)
//
// Usage:
//   node render.mjs [slice]
// where `slice` is an optional substring filter on data-out for fast iteration:
//   node render.mjs carosello-01   → only renders the first carousel
//   node render.mjs single/        → only renders single posts

import { fileURLToPath } from 'node:url';
import { dirname, join, resolve, basename } from 'node:path';
import { mkdir } from 'node:fs/promises';
import puppeteer from 'puppeteer-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const EDGE_PATHS = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

const filter = process.argv[2] || null;

const fs = await import('node:fs/promises');
let edge = null;
for (const p of EDGE_PATHS) {
  try { await fs.access(p); edge = p; break; } catch {}
}
if (!edge) {
  console.error('Microsoft Edge non trovato. Installalo o passa un --executablePath custom.');
  process.exit(1);
}
console.log(`[render] using Edge at: ${edge}`);

const htmlPath = resolve(__dirname, 'posts.html');
const fileUrl  = 'file:///' + htmlPath.replace(/\\/g, '/');

const browser = await puppeteer.launch({
  executablePath: edge,
  headless: 'new',
  // Higher DPR not needed: we already author at 1080x1350 (Instagram-native).
  defaultViewport: { width: 1080, height: 1350, deviceScaleFactor: 1 },
  args: ['--font-render-hinting=none', '--disable-font-subpixel-positioning'],
});

try {
  const page = await browser.newPage();
  page.on('console', (msg) => console.log(`[browser] ${msg.text()}`));
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 60_000 });

  // Wait for web fonts to actually be ready before taking screenshots.
  await page.evaluate(() => document.fonts.ready);

  const slides = await page.$$eval('section.slide[data-out]', (els) =>
    els.map((el) => ({ id: el.getAttribute('data-out') }))
  );

  console.log(`[render] found ${slides.length} slides`);
  if (filter) console.log(`[render] filter active: "${filter}"`);

  let count = 0;
  for (const { id } of slides) {
    if (filter && !id.includes(filter)) continue;
    const outRel = id + '.png';
    const outAbs = resolve(__dirname, 'output', outRel);
    await mkdir(dirname(outAbs), { recursive: true });

    const handle = await page.$(`section.slide[data-out="${id}"]`);
    if (!handle) { console.warn(`[render] missing element for ${id}`); continue; }

    // Bring it into view (some browsers screenshot a clipped region otherwise).
    await page.evaluate((el) => el.scrollIntoView({ block: 'center' }), handle);
    await new Promise((r) => setTimeout(r, 50));

    await handle.screenshot({
      path: outAbs,
      type: 'png',
      omitBackground: false,
    });
    count++;
    console.log(`[render] ✓ ${outRel}`);
  }

  console.log(`[render] done: ${count} image${count !== 1 ? 's' : ''} written to ./output/`);
} finally {
  await browser.close();
}
