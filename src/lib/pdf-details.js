import path from 'path';

const currentModuleUrl = new URL(import.meta.url);
const currentModuleDirname = path.dirname(currentModuleUrl.pathname);
const rootDir = path.join(currentModuleDirname, '..', '..');
const buildDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const pdfOutDir = path.join(publicDir, 'cv', 'pdf');
const pdfOutName = 'Luiz_Filho_-_Software_Engineering_Leadership_Resume.pdf';
const pdfOutPath = path.join(pdfOutDir, pdfOutName);
const pdfOutPathLocal = `/cv/pdf/${pdfOutName}`;
console.log(`pdf out path: ${pdfOutPath}`);
console.log(`pdf out path relative: ${pdfOutPathLocal}`);

export { buildDir, pdfOutPath, pdfOutPathLocal };
