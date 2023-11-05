import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { pdfOutPathRelative } from '/src/lib/pdf-details.js';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    site: 'http://luiz.dev',
    redirects: {
        '/': '/cv',
        '/cv/pdf': pdfOutPathRelative,
    },
});
