import { themes } from "../themes";

export const stylesToggle = {
  [themes.light]: {
    "bg-color-parent": "BeauBlue",
    "bg-color-parent-checked": "MetallicSeaweed",
    "bg-color-parent-hover": "MetallicSeaweedHover",
    "bg-color-parent-active": "Black",
    "bg-color-parent-disabled": "gray-300",
    "bg-color-child": "Alabaster",
  },
  [themes.dark]: {
    "bg-color-parent": "Caramel",
    "bg-color-parent-checked": "ChromeYellow",
    "bg-color-parent-hover": "ChromeYellowHover",
    "bg-color-parent-active": "Black",
    "bg-color-parent-disabled": "gray-300",
    "bg-color-child": "Kurotobi",
  },
}
