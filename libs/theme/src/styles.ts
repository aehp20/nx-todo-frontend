import { colors } from "./colors";
import { themes } from "./themes";
import { componentsName } from "./componentsName";

export type StylesProps = {
  [key: string]: Record<string, string>;
}

export type ThemesProps = {
  [key: string]: StylesProps;
}

export const styles: ThemesProps = {
  [themes.light]: {
    [componentsName.app]: {
      "color": colors.MediumJungleGreen,
      "bg-color": colors.Alabaster,
    },
    [componentsName.button]: {
      "primary-color": colors.Alabaster,
      "primary-color-hover": colors.Alabaster,
      "primary-color-active": colors.Alabaster,
      "primary-bg-color": colors.MetallicSeaweed,
      "primary-bg-color-hover": colors.MetallicSeaweedHover,
      "primary-bg-color-active": colors.MetallicSeaweedActive,
      "secondary-color": colors.MetallicSeaweed,
      "secondary-color-hover": colors.MetallicSeaweedHover,
      "secondary-color-active": colors.MetallicSeaweedActive,
      "secondary-bg-color": colors.Alabaster,
      "secondary-bg-color-hover": colors.Alabaster,
      "secondary-bg-color-active": colors.Alabaster,
    }
  },
  [themes.dark]: {
    [componentsName.app]: {
      "color": colors.PenguinWhite,
      "bg-color": colors.Kurotobi,
    },
    [componentsName.button]: {
      "primary-color": colors.Kurotobi,
      "primary-color-hover": colors.Kurotobi,
      "primary-color-active": colors.Kurotobi,
      "primary-bg-color": colors.ChromeYellow,
      "primary-bg-color-hover": colors.ChromeYellowHover,
      "primary-bg-color-active": colors.ChromeYellowActive,
      "secondary-color": colors.ChromeYellow,
      "secondary-color-hover": colors.ChromeYellowHover,
      "secondary-color-active": colors.ChromeYellowActive,
      "secondary-bg-color": colors.Kurotobi,
      "secondary-bg-color-hover": colors.Kurotobi,
      "secondary-bg-color-active": colors.Kurotobi,
    }
  }
}
