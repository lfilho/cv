// This script is meant to be run after `npm run build` to generate the PDF version of the CV.
import http from 'http';
import express from 'express';
import { promisify } from 'util';
import { chromium } from 'playwright';

import { buildDir, pdfOutPath } from './pdf-details.js';

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
await page.goto(`http://localhost:${port}/cv`, { waitUntil: 'networkidle', timeout: 60000 });
console.log(`Exporting PDF`);
await page.pdf({ path: pdfOutPath });
console.log(`PDF exported to ${pdfOutPath}`);
await browser.close();
server.close();
