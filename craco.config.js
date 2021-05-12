/* eslint-disable */
// const path = require('path');
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
    plugins: [
        {
            plugin: sassResourcesLoader,
            // options: {
            //   resources: [path.resolve(__dirname, 'src/styles/index.scss')],
            // },
        },
    ],
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
};
