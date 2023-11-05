/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    singleQuote: true,
    arrowParens: 'avoid',
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
