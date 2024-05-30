const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const buttonSafelist = [
  'bg-MetallicSeaweed',
  'text-Alabaster',
  'hover:text-Alabaster',
  'active:text-Alabaster',
  'disabled:text-Alabaster',
  'disabled:bg-MetallicSeaweedDisabled',
  'bg-Alabaster',
  'text-MetallicSeaweed',
  'hover:text-MetallicSeaweedHover',
  'active:text-MetallicSeaweedActive',
  'hover:bg-MetallicSeaweedHover',
  'active:bg-MetallicSeaweedActive',
  'hover:bg-Eggshell',
  'active:bg-Pearl',
  'disabled:text-MetallicSeaweedDisabled',
  'disabled:bg-Alabaster',
  'bg-ChromeYellow',
  'text-Kurotobi',
  'hover:bg-ChromeYellowHover',
  'active:bg-ChromeYellowActive',
  'hover:text-Kurotobi',
  'active:text-Kurotobi',
  'disabled:text-Kurotobi',
  'disabled:bg-ChromeYellowDisabled',
  'bg-Kurotobi',
  'text-ChromeYellow',
  'hover:bg-DarkLava',
  'active:bg-DarkSienna',
  'hover:text-ChromeYellowHover',
  'active:text-ChromeYellowActive',
  'disabled:text-ChromeYellowDisabled',
  'disabled:bg-Kurotobi',
];
const inputSafelist = [
  'bg-Alabaster',
  'hover:bg-Eggshell',
  'active:bg-Pearl',
  'disabled:bg-gray-300',
  'border-MetallicSeaweed',
  'hover:border-MetallicSeaweedHover',
  'active:border-MetallicSeaweedActive',
  'disabled:border-gray-300',
  'text-MediumJungleGreen',
  'bg-Kurotobi',
  'hover:bg-DarkLava',
  'active:bg-DarkSienna',
  'disabled:bg-gray-300',
  'border-ChromeYellow',
  'hover:border-ChromeYellowHover',
  'active:border-ChromeYellowActive',
  'disabled:border-gray-300',
  'text-Alabaster',
  'placeholder:text-MetallicSeaweed',
  'placeholder:text-ChromeYellow',
];
const labelSafelist = ['text-MetallicSeaweed', 'text-ChromeYellow'];
const navBarSafelist = [
  'bg-MetallicSeaweed',
  'text-Alabaster',
  'hover:text-Alabaster',
  'bg-ChromeYellow',
  'text-Kurotobi',
  'text-white',
  'hover:text-Kurotobi',
];
const toggleSafelist = [
  'peer-disabled:bg-gray-300',
  'peer-disabled:hover:bg-gray-300',
  'peer-focus:shadow-[0_0_1px_Black]',
  'hover:bg-MetallicSeaweedHover',
  'peer-checked:hover:bg-MetallicSeaweedHover',
  'bg-BeauBlue',
  'before:bg-Alabaster',
  'peer-checked:bg-MetallicSeaweed',
  'bg-Caramel',
  'peer-checked:bg-ChromeYellow',
  'hover:bg-ChromeYellowHover',
  'peer-checked:hover:bg-ChromeYellowHover',
  'before:bg-Kurotobi',
];
const messageSafelist = [
  'text-gray-800',
  'border-gray-800',
  'text-white-800',
  'border-white-800',
  'text-red-500',
  'border-red-500',
  'text-green-500',
  'border-green-500',
  'text-yellow-500',
  'border-yellow-500',
];
const cardSafelist = [
  'bg-white',
  'bg-Bole',
  'bg-Liver',
  'border-gray-400',
  'hover:bg-gray-100',
  'hover:bg-Liver',
  'ring-gray-400',
  'hover:ring-gray-400',
  'divide-white',
];
const textDeleteSafelist = [
  'text-red-600',
  'text-orange-300'
];
const linkSafelist = [
  'link:text-black',
  'visited:text-black'
];
const gridSafelist = [
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
  'gap-4',
];
const dropdownSafelist = [
  'w-[250px]',
  'bg-gray-300',
];
const tableSafelist = [
  'h-[342px]',
  'h-[627px]',
  'h-[912px]',
  'h-[1197px]',
  'h-[1482px]',
];
const errorBoundaryUISafelist = [
  'bg-Grilled',
  'border-Grilled',
];
const fontCardSafelist = [
  'text-blue-500',
  'text-blue-300',
  'text-gray-500',
  'text-gray-300',
  'font-[Lora]',
  'font-[Mina]',
  'font-[Poppins]',
];
const safelist = [
  ...toggleSafelist,
  ...buttonSafelist,
  ...labelSafelist,
  ...inputSafelist,
  ...navBarSafelist,
  ...messageSafelist,
  ...cardSafelist,
  ...textDeleteSafelist,
  ...linkSafelist,
  ...gridSafelist,
  ...dropdownSafelist,
  ...tableSafelist,
  ...errorBoundaryUISafelist,
  ...fontCardSafelist,
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
        Alabaster: '#F6F4E8',
        MediumJungleGreen: '#1D3124',
        MetallicSeaweed: '#01546F',
        MetallicSeaweedHover: '#014C65',
        MetallicSeaweedActive: '#014860',
        BeauBlue: '#BADDE0',
        BlueCola: '#0678E0',
        Kurotobi: '#351E1C',
        PenguinWhite: '#F5F3EF',
        ChromeYellow: '#FEAA00',
        ChromeYellowHover: '#FEBB33',
        ChromeYellowActive: '#E5A21A',
        Caramel: '#FEDD99',
        Black: '#000000',
        Blue: '#0000FF',
        White: '#FFFFFF',
        Red: '#FF0000',
        Eggshell: '#EFEBD6',
        Pearl: '#E8E2C3',
        DarkLava: '#493432',
        DarkSienna: '#2F1B19',
        Liver: '#884d49',
        Bole: '#774440',
        Grilled: '#634130',
      },
    },
  },
  plugins: [],
};
