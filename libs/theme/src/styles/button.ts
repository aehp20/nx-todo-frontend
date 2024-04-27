import { themes } from '../themes';

const PRIMARY_COLOR = 'PRIMARY_COLOR';
const PRIMARY_COLOR_HOVER = 'PRIMARY_COLOR_HOVER';
const PRIMARY_COLOR_ACTIVE = 'PRIMARY_COLOR_ACTIVE';
const PRIMARY_COLOR_DISABLED = 'PRIMARY_COLOR_DISABLED';
const PRIMARY_BG_COLOR = 'PRIMARY_BG_COLOR';
const PRIMARY_BG_COLOR_HOVER = 'PRIMARY_BG_COLOR_HOVER';
const PRIMARY_BG_COLOR_ACTIVE = 'PRIMARY_BG_COLOR_ACTIVE';
const PRIMARY_BG_COLOR_DISABLED = 'PRIMARY_BG_COLOR_DISABLED';
const SECONDARY_COLOR = 'SECONDARY_COLOR';
const SECONDARY_COLOR_HOVER = 'SECONDARY_COLOR_HOVER';
const SECONDARY_COLOR_ACTIVE = 'SECONDARY_COLOR_ACTIVE';
const SECONDARY_COLOR_DISABLED = 'SECONDARY_COLOR_DISABLED';
const SECONDARY_BG_COLOR = 'SECONDARY_BG_COLOR';
const SECONDARY_BG_COLOR_HOVER = 'SECONDARY_BG_COLOR_HOVER';
const SECONDARY_BG_COLOR_ACTIVE = 'SECONDARY_BG_COLOR_ACTIVE';
const SECONDARY_BG_COLOR_DISABLED = 'SECONDARY_BG_COLOR_DISABLED';

export const stylesButtonPropertiesName = {
  PRIMARY_COLOR,
  PRIMARY_COLOR_HOVER,
  PRIMARY_COLOR_ACTIVE,
  PRIMARY_COLOR_DISABLED,
  PRIMARY_BG_COLOR,
  PRIMARY_BG_COLOR_HOVER,
  PRIMARY_BG_COLOR_ACTIVE,
  PRIMARY_BG_COLOR_DISABLED,
  SECONDARY_COLOR,
  SECONDARY_COLOR_HOVER,
  SECONDARY_COLOR_ACTIVE,
  SECONDARY_COLOR_DISABLED,
  SECONDARY_BG_COLOR,
  SECONDARY_BG_COLOR_HOVER,
  SECONDARY_BG_COLOR_ACTIVE,
  SECONDARY_BG_COLOR_DISABLED,
};

export const stylesButton = {
  [themes.light]: {
    [PRIMARY_COLOR]: 'Alabaster',
    [PRIMARY_COLOR_HOVER]: 'Alabaster',
    [PRIMARY_COLOR_ACTIVE]: 'Alabaster',
    [PRIMARY_COLOR_DISABLED]: 'Alabaster',
    [PRIMARY_BG_COLOR]: 'MetallicSeaweed',
    [PRIMARY_BG_COLOR_HOVER]: 'MetallicSeaweedHover',
    [PRIMARY_BG_COLOR_ACTIVE]: 'MetallicSeaweedActive',
    [PRIMARY_BG_COLOR_DISABLED]: 'gray-300',
    [SECONDARY_COLOR]: 'MetallicSeaweed',
    [SECONDARY_COLOR_HOVER]: 'MetallicSeaweedHover',
    [SECONDARY_COLOR_ACTIVE]: 'MetallicSeaweedActive',
    [SECONDARY_COLOR_DISABLED]: 'Alabaster',
    [SECONDARY_BG_COLOR]: 'Alabaster',
    [SECONDARY_BG_COLOR_HOVER]: 'Eggshell',
    [SECONDARY_BG_COLOR_ACTIVE]: 'Pearl',
    [SECONDARY_BG_COLOR_DISABLED]: 'gray-300',
  },
  [themes.dark]: {
    [PRIMARY_COLOR]: 'Kurotobi',
    [PRIMARY_COLOR_HOVER]: 'Kurotobi',
    [PRIMARY_COLOR_ACTIVE]: 'Kurotobi',
    [PRIMARY_COLOR_DISABLED]: 'Kurotobi',
    [PRIMARY_BG_COLOR]: 'ChromeYellow',
    [PRIMARY_BG_COLOR_HOVER]: 'ChromeYellowHover',
    [PRIMARY_BG_COLOR_ACTIVE]: 'ChromeYellowActive',
    [PRIMARY_BG_COLOR_DISABLED]: 'gray-300',
    [SECONDARY_COLOR]: 'ChromeYellow',
    [SECONDARY_COLOR_HOVER]: 'ChromeYellowHover',
    [SECONDARY_COLOR_ACTIVE]: 'ChromeYellowActive',
    [SECONDARY_COLOR_DISABLED]: 'Kurotobi',
    [SECONDARY_BG_COLOR]: 'Kurotobi',
    [SECONDARY_BG_COLOR_HOVER]: 'DarkLava',
    [SECONDARY_BG_COLOR_ACTIVE]: 'DarkSienna',
    [SECONDARY_BG_COLOR_DISABLED]: 'gray-300',
  },
};
