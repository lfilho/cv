import path from 'path';

const currentModuleUrl = new URL(import.meta.url);
const currentModuleDirname = path.dirname(currentModuleUrl.pathname);
const rootDir = path.join(currentModuleDirname, '..', '..');
const buildDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const pdfOutDir = path.join(publicDir, 'cv', 'pdf');
const pdfOutName = 'Luiz_Filho_-_Software_Engineering_Resume_-_Verbose.pdf';
const pdfOutPath = path.join(pdfOutDir, pdfOutName);
const pdfOutPathRelative = path
    .relative(buildDir, pdfOutPath)
    .replace('public/', '');

export { buildDir, pdfOutPath, pdfOutPathRelative };
