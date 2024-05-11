import { themes } from '../themes';

const BG_COLOR = 'BG_COLOR';
const BG_COLOR_HOVER = 'BG_COLOR_HOVER';
const BORDER_BG_COLOR = 'BORDER_BG_COLOR';

export const stylesCardPropertiesName = {
  BG_COLOR,
  BG_COLOR_HOVER,
  BORDER_BG_COLOR,
};

export const stylesCard = {
  [themes.light]: {
    [BG_COLOR]: 'white',
    [BG_COLOR_HOVER]: 'gray-100',
    [BORDER_BG_COLOR]: 'gray-400',
  },
  [themes.dark]: {
    [BG_COLOR]: 'Bole',
    [BG_COLOR_HOVER]: 'Liver',
    [BORDER_BG_COLOR]: 'gray-400',
  },
};
