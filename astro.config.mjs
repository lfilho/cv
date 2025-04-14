import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { pdfOutPathRelative } from '/src/lib/pdf-details.js';

import tailwindcss from '@tailwindcss/vite';

/* 
  We are doing some URL mumbo jumbo here to tell Astro what the URL of your website will be.
  In local development, your SEO meta tags will have localhost URL.
  In built production websites, your SEO meta tags should have your website URL.
  So we give our website URL here and the template will know what URL to use 
  for meta tags during build.
  If you don't know your website URL yet, don't worry about this
  and leave it empty or use localhost URL. It won't break anything.
*/

const SERVER_PORT = 9000;
// the url to access your blog during local development
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
// the url to access your blog after deploying it somewhere (Eg. Netlify)
const LIVE_URL = 'https://luiz.dev';
// this is the astro command your npm script runs
const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
let BASE_URL = LOCALHOST_URL;
// When building the site in local or in CI, you could just set your URL manually
if (isBuild) {
    BASE_URL = LIVE_URL;
}
export default defineConfig({
    server: { port: SERVER_PORT },
    site: BASE_URL,

    redirects: {
        // FIXME: wainting on https://github.com/withastro/astro/issues/13607
        // '/cv/pdf': pdfOutPathRelative,
        '/cv/pdf': 'https://luiz.dev/cv/pdf/Luiz_Filho_-_Software_Engineering_Leadership_Resume.pdf',
    },

    integrations: [react(), sitemap()],

    vite: {
        plugins: [tailwindcss()],
    },
});
