import { colors } from "../colors";
import { themes } from "../themes";

export const stylesButton = {
  [themes.light]: {
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
    "secondary-bg-color-hover": colors.Eggshell,
    "secondary-bg-color-active": colors.Pearl,
  },
  [themes.dark]: {
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
    "secondary-bg-color-hover": colors.DarkLava,
    "secondary-bg-color-active": colors.DarkSienna,
  },
}
