import { colors } from '../colors';
import { themes } from '../themes';

const COLOR = 'COLOR';
const BG_COLOR = 'BG_COLOR';

export const stylesAppPropertiesName = {
  COLOR,
  BG_COLOR,
};

export const stylesApp = {
  [themes.light]: {
    [COLOR]: colors.MediumJungleGreen,
    [BG_COLOR]: colors.Alabaster,
  },
  [themes.dark]: {
    [COLOR]: colors.PenguinWhite,
    [BG_COLOR]: colors.Kurotobi,
  },
};
