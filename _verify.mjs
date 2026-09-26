import { chromium } from 'playwright';
const b = await chromium.launch({ args: ['--disable-gpu','--disable-dev-shm-usage','--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const errs = [];
p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
p.on('pageerror', e => errs.push(String(e)));
await p.goto('file://' + process.cwd() + '/index.html', { waitUntil: 'networkidle' });
await p.waitForTimeout(1200);
// scroll through whole page to trigger lazy images + check scroll works
await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await p.waitForTimeout(800);
const scrollOK = await p.evaluate(() => window.scrollY > 500);
// check section present + images loaded
const imgs = await p.evaluate(() => [...document.querySelectorAll('.gal img')].map(i => i.naturalWidth > 0));
const pdfs = await p.evaluate(() => [...document.querySelectorAll('.kcard')].length);
await p.evaluate(() => window.scrollTo(0, 0));
await p.waitForTimeout(400);
await p.screenshot({ path: '/tmp/gym-top.png' });
// gallery section screenshot
const gal = await p.$('#gallery'); await gal.scrollIntoViewIfNeeded(); await p.waitForTimeout(600);
await p.screenshot({ path: '/tmp/gym-gallery.png' });
const kit = await p.$('#kit'); await kit.scrollIntoViewIfNeeded(); await p.waitForTimeout(600);
await p.screenshot({ path: '/tmp/gym-kit.png' });
// mobile check
await p.setViewportSize({ width: 390, height: 844 });
await p.evaluate(() => window.scrollTo(0, document.getElementById('gallery').offsetTop));
await p.waitForTimeout(600);
await p.screenshot({ path: '/tmp/gym-mobile.png' });
console.log(JSON.stringify({ jsErrors: errs, scrollOK, galleryImgs: imgs, kitCards: pdfs }));
await b.close();
