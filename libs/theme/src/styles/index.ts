import { themes } from '../themes';
import { componentsName } from '../componentsName';
import { stylesApp, stylesAppPropertiesName } from './app';
import { stylesButton, stylesButtonPropertiesName } from './button';
import { stylesInput, stylesInputPropertiesName } from './input';
import { stylesToggle, stylesTogglePropertiesName } from './toggle';

export type StylesProps = {
  [key: string]: Record<string, string>;
};

export type StylesPropertiesNameProps = {
  [key: string]: Record<string, string>;
};

export type ThemesProps = {
  [key: string]: StylesProps;
};

export const styles: ThemesProps = {
  [themes.light]: {
    [componentsName.app]: stylesApp[themes.light],
    [componentsName.button]: stylesButton[themes.light],
    [componentsName.input]: stylesInput[themes.light],
    [componentsName.toggle]: stylesToggle[themes.light],
  },
  [themes.dark]: {
    [componentsName.app]: stylesApp[themes.dark],
    [componentsName.button]: stylesButton[themes.dark],
    [componentsName.input]: stylesInput[themes.dark],
    [componentsName.toggle]: stylesToggle[themes.dark],
  },
};

export const stylesPropertiesName: StylesPropertiesNameProps = {
  [componentsName.app]: stylesAppPropertiesName,
  [componentsName.button]: stylesButtonPropertiesName,
  [componentsName.input]: stylesInputPropertiesName,
  [componentsName.toggle]: stylesTogglePropertiesName,
};
