const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const toggle = require('./src/lib/toggles/toggle.safelist');

const safelist = [
  ...toggle.safelist
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
      colors: {
        "Alabaster": "#F6F4E8",
        "MediumJungleGreen": "#1D3124",
        "MetallicSeaweed": "#1C9099",
        "MetallicSeaweedHover": "#06858F",
        "MetallicSeaweedActive": "#066169",
        "BeauBlue": "#BADDE0",
        "BlueCola": "#0678E0",
        "Kurotobi": "#351E1C",
        "PenguinWhite": "#F5F3EF",
        "ChromeYellow": "#FEAA00",
        "ChromeYellowHover": "#FEBB33",
        "ChromeYellowActive": "#E5A21A",
        "Caramel": "#FEDD99",
        "Black": "#000000",
        "Blue": "#0000FF",
        "White": "#FFFFFF",
        "Red": "#FF0000",
        "Eggshell": "#EFEBD6",
        "Pearl": "#E8E2C3",
        "DarkLava": "#493432",
        "DarkSienna": "#2F1B19"
      }
    },
  },
  plugins: [],
};
