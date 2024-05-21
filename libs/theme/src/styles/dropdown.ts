import { themes } from '../themes';

const BG_COLOR = 'BG_COLOR';
const BG_COLOR_HOVER = 'BG_COLOR_HOVER';
const BG_COLOR_DISABLED = 'BG_COLOR_DISABLED';
const BORDER_COLOR = 'BORDER_COLOR';
const BORDER_COLOR_HOVER = 'BORDER_COLOR_HOVER';

export const stylesDropdownPropertiesName = {
  BG_COLOR,
  BG_COLOR_HOVER,
  BG_COLOR_DISABLED,
  BORDER_COLOR,
  BORDER_COLOR_HOVER,
};

export const stylesDropdown = {
  [themes.light]: {
    [BG_COLOR]: 'Alabaster',
    [BG_COLOR_HOVER]: 'Eggshell',
    [BG_COLOR_DISABLED]: 'gray-300',
    [BORDER_COLOR]: 'MetallicSeaweed',
    [BORDER_COLOR_HOVER]: 'MetallicSeaweedHover',
  },
  [themes.dark]: {
    [BG_COLOR]: 'Kurotobi',
    [BG_COLOR_HOVER]: 'DarkLava',
    [BG_COLOR_DISABLED]: 'gray-300',
    [BORDER_COLOR]: 'ChromeYellow',
    [BORDER_COLOR_HOVER]: 'ChromeYellowHover',
  },
};
