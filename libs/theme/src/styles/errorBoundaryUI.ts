import { themes } from '../themes';

const BG_COLOR = 'BG_COLOR';
const BORDER_COLOR = 'BORDER_COLOR';

export const stylesErrorBoundaryUIPropertiesName = {
  BG_COLOR,
  BORDER_COLOR,
};

export const stylesErrorBoundaryUI = {
  [themes.light]: {
    [BG_COLOR]: 'gray-300',
    [BORDER_COLOR]: 'MetallicSeaweed',
  },
  [themes.dark]: {
    [BG_COLOR]: 'Grilled',
    [BORDER_COLOR]: 'ChromeYellow',
  },
};
