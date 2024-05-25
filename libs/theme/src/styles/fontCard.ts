import { themes } from '../themes';

const AG_COLOR = 'AG_COLOR';
const NAME_COLOR = 'NAME_COLOR';

export const stylesFontCardPropertiesName = {
  AG_COLOR,
  NAME_COLOR,
};

export const stylesFontCard = {
  [themes.light]: {
    [AG_COLOR]: 'blue-500',
    [NAME_COLOR]: 'gray-500',
  },
  [themes.dark]: {
    [AG_COLOR]: 'blue-300',
    [NAME_COLOR]: 'gray-300',
  },
};
