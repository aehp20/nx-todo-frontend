import { colors } from "../colors";
import { themes } from "../themes";

export const stylesInput = {
  [themes.light]: {
    "bg-color": colors.Alabaster,
    "bg-color-hover": colors.Eggshell,
    "bg-color-active": colors.Pearl,
    "border-color": colors.MetallicSeaweed,
    "border-color-hover": colors.MetallicSeaweedHover,
    "border-color-active": colors.MetallicSeaweedActive,
    "color": colors.MediumJungleGreen
  },
  [themes.dark]: {
    "bg-color": colors.Kurotobi,
    "bg-color-hover": colors.DarkLava,
    "bg-color-active": colors.DarkSienna,
    "border-color": colors.ChromeYellow,
    "border-color-hover": colors.ChromeYellowHover,
    "border-color-active": colors.ChromeYellowActive,
    "color": colors.Alabaster
  },
}
