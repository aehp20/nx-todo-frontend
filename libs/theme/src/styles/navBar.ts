import { themes } from '../themes';

const BG_COLOR = 'BG_COLOR';
const COLOR_TITLE = 'COLOR_TITLE';
const COLOR_ITEM = 'COLOR_ITEM';
const COLOR_ITEM_HOVER = 'COLOR_ITEM_HOVER';

export const stylesNavBarPropertiesName = {
  BG_COLOR,
  COLOR_TITLE,
  COLOR_ITEM,
  COLOR_ITEM_HOVER,
};

export const stylesNavBar = {
  [themes.light]: {
    [BG_COLOR]: 'MetallicSeaweed',
    [COLOR_TITLE]: 'Alabaster',
    [COLOR_ITEM]: 'teal-200',
    [COLOR_ITEM_HOVER]: 'Alabaster',
  },
  [themes.dark]: {
    [BG_COLOR]: 'ChromeYellow',
    [COLOR_TITLE]: 'Kurotobi',
    [COLOR_ITEM]: 'white',
    [COLOR_ITEM_HOVER]: 'Kurotobi',
  },
};
