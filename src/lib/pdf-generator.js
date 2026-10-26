// This script is meant to be run after `npm run build` to generate the PDF version of the CV.
import http from 'http';
import express from 'express';
import { promisify } from 'util';
import { chromium } from 'playwright';

import { buildDir, pdfOutPath } from './pdf-details.js';
import { LIVE_URL } from './site-config.js';

// The PDF is rendered from a temporary localhost server, so root-relative anchors
// (e.g. `/cv/verbose`) would be baked into the PDF as localhost links. Rewrite them
// against the public site URL before exporting.
const siteOrigin = new URL(LIVE_URL).origin;

const app = express();
app.use(express.static(buildDir));
const server = http.createServer(app);
const listen = promisify(server.listen.bind(server));
await listen(0);

const { port } = server.address();
console.log(`Server listening on http://localhost:${port}`);

const browser = await chromium.launch();
const page = await browser.newPage();
console.log(`Generating PDF from http://localhost:${port}/cv`);
await page.emulateMedia({ colorScheme: 'light' });
await page.goto(`http://localhost:${port}/cv`, { waitUntil: 'networkidle', timeout: 60000 });
const rewrittenLinks = await page.evaluate(origin => {
  let count = 0;
  for (const anchor of document.querySelectorAll('a[href]')) {
    const href = anchor.getAttribute('href').trim();
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    anchor.setAttribute('href', `${origin}${href}`);
    count++;
  }
  return count;
}, siteOrigin);
console.log(`Rewrote ${rewrittenLinks} root-relative link(s) to ${siteOrigin}`);
console.log(`Exporting PDF`);
await page.pdf({ path: pdfOutPath });
console.log(`PDF exported to ${pdfOutPath}`);
await browser.close();
server.close();
