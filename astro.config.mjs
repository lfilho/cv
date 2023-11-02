import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cvPdfPathRelative from '/src/lib/pdf-generator.js';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	site: 'http://luiz.dev',
	redirects: {
		'/': '/cv',
		'/cv/pdf': cvPdfPathRelative,
	  }
});