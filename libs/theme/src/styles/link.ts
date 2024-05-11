import { themes } from '../themes';

const COLOR = 'COLOR';

export const stylesLinkPropertiesName = {
  COLOR,
};

export const stylesLink = {
  [themes.light]: {
    [COLOR]: 'black',
  },
  [themes.dark]: {
    [COLOR]: 'white',
  },
};
