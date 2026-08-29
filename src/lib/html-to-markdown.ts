// This script is meant to be run after `npm run build` to generate Markdown
// alternate versions of selected HTML pages from their rendered output.
import { readFile, writeFile } from 'node:fs/promises';
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

const pages = [
  { slug: 'index', htmlPath: 'dist/index.html' },
  { slug: 'about', htmlPath: 'dist/about/index.html' },
  { slug: 'contact', htmlPath: 'dist/contact/index.html' },
  { slug: 'book-me', htmlPath: 'dist/book-me/index.html' },
  { slug: 'privacy', htmlPath: 'dist/privacy/index.html' },
];

for (const { slug, htmlPath } of pages) {
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

  await writeFile(`dist/${slug}.md`, `${markdown}\n`);
  console.log(`Generated dist/${slug}.md`);
}

const cvMarkdown = generateCvMarkdown();
await writeFile('dist/cv.md', cvMarkdown);
console.log('Generated dist/cv.md');
