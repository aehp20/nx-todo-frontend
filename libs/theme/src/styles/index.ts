import { themes } from '../themes';
import { componentsName } from '../componentsName';
import { stylesApp, stylesAppPropertiesName } from './app';
import { stylesButton, stylesButtonPropertiesName } from './button';
import { stylesLabel, stylesLabelPropertiesName } from './label';
import { stylesInput, stylesInputPropertiesName } from './input';
import { stylesToggle, stylesTogglePropertiesName } from './toggle';
import { stylesNavBar, stylesNavBarPropertiesName } from './navBar';
import { stylesTitle, stylesTitlePropertiesName } from './title';

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
    [componentsName.label]: stylesLabel[themes.light],
    [componentsName.input]: stylesInput[themes.light],
    [componentsName.toggle]: stylesToggle[themes.light],
    [componentsName.navBar]: stylesNavBar[themes.light],
    [componentsName.title]: stylesTitle[themes.light],
  },
  [themes.dark]: {
    [componentsName.app]: stylesApp[themes.dark],
    [componentsName.button]: stylesButton[themes.dark],
    [componentsName.label]: stylesLabel[themes.dark],
    [componentsName.input]: stylesInput[themes.dark],
    [componentsName.toggle]: stylesToggle[themes.dark],
    [componentsName.navBar]: stylesNavBar[themes.dark],
    [componentsName.title]: stylesTitle[themes.dark],
  },
};

export const stylesPropertiesName: StylesPropertiesNameProps = {
  [componentsName.app]: stylesAppPropertiesName,
  [componentsName.button]: stylesButtonPropertiesName,
  [componentsName.label]: stylesLabelPropertiesName,
  [componentsName.input]: stylesInputPropertiesName,
  [componentsName.toggle]: stylesTogglePropertiesName,
  [componentsName.navBar]: stylesNavBarPropertiesName,
  [componentsName.title]: stylesTitlePropertiesName,
};
