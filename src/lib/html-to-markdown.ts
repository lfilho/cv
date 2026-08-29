// This script is meant to be run after `npm run build` to generate Markdown
// alternate versions of selected HTML pages from their rendered output.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { parseHTML } from 'linkedom';
import TurndownService from 'turndown';
import { generateCvMarkdown } from './cv-to-markdown.ts';

const turndown = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
  codeBlockStyle: 'fenced',
});

// Remove nodes that should never appear in Markdown output.
turndown.addRule('removeScripts', {
  filter: ['script', 'style', 'noscript'],
  replacement: () => '',
});

turndown.addRule('removeSvg', {
  filter: 'svg',
  replacement: () => '',
});

turndown.addRule('removeAriaHidden', {
  filter: node => node.getAttribute?.('aria-hidden') === 'true',
  replacement: () => '',
});

turndown.addRule('removeHeaderLinks', {
  filter: node => node.classList?.contains('header-link'),
  replacement: () => '',
});

turndown.addRule('removeEmptyHeadings', {
  filter: node => {
    if (!['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(node.nodeName)) {
      return false;
    }
    return !node.textContent?.trim();
  },
  replacement: () => '',
});

const mdPages = [
  { slug: 'index', htmlPath: 'dist/index.html', mdDir: 'md', mdFile: 'index.md' },
  { slug: 'about', htmlPath: 'dist/about/index.html', mdDir: 'about/md', mdFile: 'about.md' },
  { slug: 'contact', htmlPath: 'dist/contact/index.html', mdDir: 'contact/md', mdFile: 'contact.md' },
  { slug: 'book-me', htmlPath: 'dist/book-me/index.html', mdDir: 'book-me/md', mdFile: 'book-me.md' },
  { slug: 'privacy', htmlPath: 'dist/privacy/index.html', mdDir: 'privacy/md', mdFile: 'privacy.md' },
];

for (const { slug, htmlPath, mdDir, mdFile } of mdPages) {
  const html = await readFile(htmlPath, 'utf-8');
  const { document } = parseHTML(html);
  const main = document.querySelector('main');

  if (!main) {
    throw new Error(`No <main> element found in ${htmlPath}`);
  }

  main.querySelectorAll('script, style, noscript, svg, [aria-hidden="true"], .header-link').forEach(node => node.remove());

  const markdown = turndown.turndown(main.innerHTML).trim();

  if (!markdown) {
    throw new Error(`Empty Markdown generated for ${slug}`);
  }

  await mkdir(`dist/${mdDir}`, { recursive: true });
  await writeFile(`dist/${mdDir}/${mdFile}`, `${markdown}\n`);
  console.log(`Generated dist/${mdDir}/${mdFile}`);
}

const cvMarkdown = generateCvMarkdown(true);
await mkdir('dist/cv/md', { recursive: true });
await writeFile('dist/cv/md/cv.md', cvMarkdown);
console.log('Generated dist/cv/md/cv.md');
