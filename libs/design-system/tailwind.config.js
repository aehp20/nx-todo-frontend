const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const globalColors = require('./src/lib/colors');
const globalSafelist = require('./src/lib/safelist');

const safelist = [
  ...globalSafelist.safelist
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist,
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: globalColors.colors
    },
  },
  plugins: [],
};
