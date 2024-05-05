import { themes } from '../themes';

const ERROR_COLOR = 'ERROR_COLOR';
const WARNING_COLOR = 'WARNING_COLOR';
const INFO_COLOR = 'INFO_COLOR';
const SUCCESS_COLOR = 'SUCCESS_COLOR';

export const stylesMessagePropertiesName = {
  ERROR_COLOR,
  WARNING_COLOR,
  INFO_COLOR,
  SUCCESS_COLOR,
};

export const stylesMessage = {
  [themes.light]: {
    [ERROR_COLOR]: 'red-500',
    [WARNING_COLOR]: 'yellow-500',
    [INFO_COLOR]: 'gray-800',
    [SUCCESS_COLOR]: 'green-500',
  },
  [themes.dark]: {
    [ERROR_COLOR]: 'red-500',
    [WARNING_COLOR]: 'yellow-500',
    [INFO_COLOR]: 'white-800',
    [SUCCESS_COLOR]: 'green-500',
  },
};
