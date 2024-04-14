import { themes } from "../themes";
import { componentsName } from "../componentsName";
import { stylesApp } from './app';
import { stylesButton } from './button';
import { stylesInput } from './input';

export type StylesProps = {
  [key: string]: Record<string, string>;
}

export type ThemesProps = {
  [key: string]: StylesProps;
}

export const styles: ThemesProps = {
  [themes.light]: {
    [componentsName.app]: stylesApp[themes.light],
    [componentsName.button]: stylesButton[themes.light],
    [componentsName.input]: stylesInput[themes.light],
  },
  [themes.dark]: {
    [componentsName.app]: stylesApp[themes.dark],
    [componentsName.button]: stylesButton[themes.dark],
    [componentsName.input]: stylesInput[themes.dark],
  }
}
