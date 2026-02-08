import eslintPluginAstro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
    // Configuration for TypeScript and JavaScript files
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },

    // Configuration for Astro files
    {
        files: ['**/*.astro'],
        plugins: {
            astro: eslintPluginAstro,
        },
        languageOptions: {
            parser: astroParser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: ['.astro'],
            },
        },
        rules: {
            'astro/no-conflict-set-directives': 'error',
            'astro/no-deprecated-astro-canonicalurl': 'error',
            'astro/no-deprecated-astro-fetchcontent': 'error',
            'astro/no-deprecated-astro-resolve': 'error',
            'astro/no-deprecated-getentrybyslug': 'error',
            'astro/no-unused-define-vars-in-style': 'error',
            'astro/valid-compile': 'error',
        },
    },
];
