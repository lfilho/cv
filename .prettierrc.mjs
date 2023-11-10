/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    printWidth: 130,
    singleAttributePerLine: false,
    singleQuote: true,
    jsxSingleQuote: true,
    htmlWhitespaceSensitivity: 'ignore',

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
