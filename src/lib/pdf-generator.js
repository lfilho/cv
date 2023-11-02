import http from 'http';
import path from 'path';
import express from 'express';
import { promisify } from 'util';
import { chromium } from 'playwright';

const app = express();

const currentModuleUrl = new URL(import.meta.url);
const currentModuleDirname = path.dirname(currentModuleUrl.pathname);

const staticDir = path.join(currentModuleDirname, '..', '..', 'dist');

app.use(express.static(staticDir));

const server = http.createServer(app);
const listen = promisify(server.listen.bind(server));
await listen(0);

const { port } = server.address();
console.log(`Server listening on http://localhost:${port}`);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`http://localhost:${port}/cv`);
console.log(`Generating PDF from http://localhost:${port}/cv`);
await page.waitForLoadState('networkidle');
const pageTitle = await page.title();
const pdfFileName = pageTitle.replace(/\s+/g, '_') + '.pdf';
const pdfOutputPath = path.join(staticDir, 'cv', 'pdf', pdfFileName);
console.log(`Saving PDF to ${pdfOutputPath}`);
await page.pdf({ path: pdfOutputPath });
console.log(`PDF generated at ${pdfOutputPath}`);
await browser.close();
server.close();