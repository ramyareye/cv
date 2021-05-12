/* eslint-disable @typescript-eslint/no-var-requires */
// import from https://github.com/WebPraktikos/universal-resume
const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                main: colors.green[500],
            },
        },
        theme: {
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    variants: {
        extend: {},
        textColor: ['responsive'],
        margin: ['responsive'],
        padding: ['responsive'],
    },
    plugins: [],
};
