import { themes } from '../themes';

const BG_COLOR = 'BG_COLOR';

export const stylesDialogPropertiesName = {
  BG_COLOR,
};

export const stylesDialog = {
  [themes.light]: {
    [BG_COLOR]: 'Alabaster',
  },
  [themes.dark]: {
    [BG_COLOR]: 'Kurotobi',
  },
};
