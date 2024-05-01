import { themes } from '../themes';

const BG_COLOR = 'BG_COLOR';
const BORDER_COLOR = 'BORDER_COLOR';
const BORDER_COLOR_HOVER = 'BORDER_COLOR_HOVER';

export const stylesDropdownPropertiesName = {
  BG_COLOR,
  BORDER_COLOR,
  BORDER_COLOR_HOVER,
};

export const stylesDropdown = {
  [themes.light]: {
    [BG_COLOR]: 'Alabaster',
    [BORDER_COLOR]: 'MetallicSeaweed',
    [BORDER_COLOR_HOVER]: 'MetallicSeaweedHover',
  },
  [themes.dark]: {
    [BG_COLOR]: 'Kurotobi',
    [BORDER_COLOR]: 'ChromeYellow',
    [BORDER_COLOR_HOVER]: 'ChromeYellowHover',
  },
};
