import { themes } from '../themes';

const BG_COLOR = 'BG_COLOR';
const BG_COLOR_HOVER = 'BG_COLOR_HOVER';
const BG_COLOR_ACTIVE = 'BG_COLOR_ACTIVE';
const BG_COLOR_DISABLED = 'BG_COLOR_DISABLED';
const BORDER_COLOR = 'BORDER_COLOR';
const BORDER_COLOR_HOVER = 'BORDER_COLOR_HOVER';
const BORDER_COLOR_ACTIVE = 'BORDER_COLOR_ACTIVE';
const BORDER_COLOR_DISABLED = 'BORDER_COLOR_DISABLED';
const COLOR = 'COLOR';

export const stylesInputPropertiesName = {
  BG_COLOR,
  BG_COLOR_HOVER,
  BG_COLOR_ACTIVE,
  BG_COLOR_DISABLED,
  BORDER_COLOR,
  BORDER_COLOR_HOVER,
  BORDER_COLOR_ACTIVE,
  BORDER_COLOR_DISABLED,
  COLOR,
};

export const stylesInput = {
  [themes.light]: {
    [BG_COLOR]: 'Alabaster',
    [BG_COLOR_HOVER]: 'Eggshell',
    [BG_COLOR_ACTIVE]: 'Pearl',
    [BG_COLOR_DISABLED]: 'gray-300',
    [BORDER_COLOR]: 'MetallicSeaweed',
    [BORDER_COLOR_HOVER]: 'MetallicSeaweedHover',
    [BORDER_COLOR_ACTIVE]: 'MetallicSeaweedActive',
    [BORDER_COLOR_DISABLED]: 'gray-300',
    [COLOR]: 'MediumJungleGreen',
  },
  [themes.dark]: {
    [BG_COLOR]: 'Kurotobi',
    [BG_COLOR_HOVER]: 'DarkLava',
    [BG_COLOR_ACTIVE]: 'DarkSienna',
    [BG_COLOR_DISABLED]: 'gray-300',
    [BORDER_COLOR]: 'ChromeYellow',
    [BORDER_COLOR_HOVER]: 'ChromeYellowHover',
    [BORDER_COLOR_ACTIVE]: 'ChromeYellowActive',
    [BORDER_COLOR_DISABLED]: 'gray-300',
    [COLOR]: 'Alabaster',
  },
};
