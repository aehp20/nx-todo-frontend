import { themes } from '../themes';

const BORDER_COLOR = 'BORDER_COLOR';

export const stylesTablePropertiesName = {
  BORDER_COLOR,
};

export const stylesTable = {
  [themes.light]: {
    [BORDER_COLOR]: 'MetallicSeaweed',
  },
  [themes.dark]: {
    [BORDER_COLOR]: 'ChromeYellow',
  },
};
