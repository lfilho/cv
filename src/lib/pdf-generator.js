// This script is meant to be run after `npm run build` to generate the PDF version of the CV.
import http from 'http';
import path from 'path';
import express from 'express';
import { promisify } from 'util';
import { chromium } from 'playwright';


const currentModuleUrl = new URL(import.meta.url);
const currentModuleDirname = path.dirname(currentModuleUrl.pathname);
const rootDir = path.join(currentModuleDirname, '..', '..');
const buildDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const pdfOutDir = path.join(publicDir, 'cv', 'pdf');
const pdfOutName = 'Luiz_Gonzaga_dos_Santos_Filho_-_Software_Engineering_Resume.pdf';
const pdfOutPath = path.join(pdfOutDir, pdfOutName);

const app = express();
app.use(express.static(buildDir));
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
console.log(`Exporting PDF`);
await page.pdf({ path: pdfOutPath });
console.log(`PDF exported to ${pdfOutPath}`);
await browser.close();
server.close();

const pdfOutPathRelative = path.relative(buildDir, pdfOutPath).replace('public/', '');
export default pdfOutPathRelative;