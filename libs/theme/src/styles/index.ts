import { componentsName } from '../componentsName';
import { themes } from '../themes';
import { stylesApp, stylesAppPropertiesName } from './app';
import { stylesButton, stylesButtonPropertiesName } from './button';
import { stylesCard, stylesCardPropertiesName } from './card';
import { stylesDialog, stylesDialogPropertiesName } from './dialog';
import { stylesDropdown, stylesDropdownPropertiesName } from './dropdown';
import { stylesInput, stylesInputPropertiesName } from './input';
import { stylesLabel, stylesLabelPropertiesName } from './label';
import { stylesLink, stylesLinkPropertiesName } from './link';
import { stylesMessage, stylesMessagePropertiesName } from './message';
import { stylesNavBar, stylesNavBarPropertiesName } from './navBar';
import { stylesTable, stylesTablePropertiesName } from './table';
import { stylesTextDelete, stylesTextDeletePropertiesName } from './textDelete';
import { stylesTitle, stylesTitlePropertiesName } from './title';
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
    [componentsName.label]: stylesLabel[themes.light],
    [componentsName.input]: stylesInput[themes.light],
    [componentsName.toggle]: stylesToggle[themes.light],
    [componentsName.navBar]: stylesNavBar[themes.light],
    [componentsName.title]: stylesTitle[themes.light],
    [componentsName.dropdown]: stylesDropdown[themes.light],
    [componentsName.table]: stylesTable[themes.light],
    [componentsName.message]: stylesMessage[themes.light],
    [componentsName.dialog]: stylesDialog[themes.light],
    [componentsName.card]: stylesCard[themes.light],
    [componentsName.textDelete]: stylesTextDelete[themes.light],
    [componentsName.link]: stylesLink[themes.light],
  },
  [themes.dark]: {
    [componentsName.app]: stylesApp[themes.dark],
    [componentsName.button]: stylesButton[themes.dark],
    [componentsName.label]: stylesLabel[themes.dark],
    [componentsName.input]: stylesInput[themes.dark],
    [componentsName.toggle]: stylesToggle[themes.dark],
    [componentsName.navBar]: stylesNavBar[themes.dark],
    [componentsName.title]: stylesTitle[themes.dark],
    [componentsName.dropdown]: stylesDropdown[themes.dark],
    [componentsName.table]: stylesTable[themes.dark],
    [componentsName.message]: stylesMessage[themes.dark],
    [componentsName.dialog]: stylesDialog[themes.dark],
    [componentsName.card]: stylesCard[themes.dark],
    [componentsName.textDelete]: stylesTextDelete[themes.dark],
    [componentsName.link]: stylesLink[themes.dark],
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
  [componentsName.dropdown]: stylesDropdownPropertiesName,
  [componentsName.table]: stylesTablePropertiesName,
  [componentsName.message]: stylesMessagePropertiesName,
  [componentsName.dialog]: stylesDialogPropertiesName,
  [componentsName.card]: stylesCardPropertiesName,
  [componentsName.textDelete]: stylesTextDeletePropertiesName,
  [componentsName.link]: stylesLinkPropertiesName,
};
