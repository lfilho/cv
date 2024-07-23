import fs from 'node:fs';

const text = fs.readFileSync('./node_modules/unicorn-magic/default.js', 'utf8');
const newScript = `import {fileURLToPath} from 'node:url';
export function toPath(urlOrPath) {
\treturn urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
}
${text}`;

if (text.indexOf('toPath(') === -1) {
    console.log('Fixing unicorn-magic script...');
    fs.writeFileSync('./node_modules/unicorn-magic/default.js', newScript, 'utf8');
} else {
    console.log('Skip fix unicorn-magic script.');
}
