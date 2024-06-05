import { themes } from '../themes';

const BG_COLOR = 'BG_COLOR';
const COLOR = 'COLOR';
const CLOSE_BUTTON_COLOR = 'CLOSE_BUTTON_COLOR';
const CLOSE_BUTTON_HOVER_COLOR = 'CLOSE_BUTTON_HOVER_COLOR';
const CLOSE_BUTTON_FOCUS_COLOR = 'CLOSE_BUTTON_FOCUS_COLOR';
const ICON_COLOR_SUCCESS = 'ICON_COLOR_SUCCESS';
const PROGRESS_BAR_BG_COLOR = 'PROGRESS_BAR_BG_COLOR';
const BORDER_COLOR = 'BORDER_COLOR';

export const stylesToastPropertiesName = {
  BG_COLOR,
  COLOR,
  CLOSE_BUTTON_COLOR,
  CLOSE_BUTTON_HOVER_COLOR,
  CLOSE_BUTTON_FOCUS_COLOR,
  ICON_COLOR_SUCCESS,
  PROGRESS_BAR_BG_COLOR,
  BORDER_COLOR,
};

export const stylesToast = {
  [themes.light]: {
    [BG_COLOR]: 'Alabaster',
    [COLOR]: 'MediumJungleGreen',
    [CLOSE_BUTTON_COLOR]: 'MediumJungleGreen',
    [CLOSE_BUTTON_HOVER_COLOR]: 'MediumJungleGreen',
    [CLOSE_BUTTON_FOCUS_COLOR]: 'MediumJungleGreen',
    [ICON_COLOR_SUCCESS]: 'KellyGreen',
    [PROGRESS_BAR_BG_COLOR]: '#07bc0c',
    [BORDER_COLOR]: 'MetallicSeaweed',
  },
  [themes.dark]: {
    [BG_COLOR]: 'Kurotobi',
    [COLOR]: 'PenguinWhite',
    [CLOSE_BUTTON_COLOR]: 'PenguinWhite',
    [CLOSE_BUTTON_HOVER_COLOR]: 'PenguinWhite',
    [CLOSE_BUTTON_FOCUS_COLOR]: 'PenguinWhite',
    [ICON_COLOR_SUCCESS]: 'KellyGreen',
    [PROGRESS_BAR_BG_COLOR]: '#07bc0c',
    [BORDER_COLOR]: 'ChromeYellow',
  },
};
