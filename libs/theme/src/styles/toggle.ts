import { themes } from "../themes";

const BG_COLOR_PARENT = "BG_COLOR_PARENT";
const BG_COLOR_PARENT_CHECKED = "BG_COLOR_PARENT_CHECKED";
const BG_COLOR_PARENT_HOVER = "BG_COLOR_PARENT_HOVER";
const BG_COLOR_PARENT_ACTIVE = "BG_COLOR_PARENT_ACTIVE";
const BG_COLOR_PARENT_DISABLED = "BG_COLOR_PARENT_DISABLED";
const BG_COLOR_CHILD = "BG_COLOR_CHILD";

export const stylesTogglePropertiesName = {
  BG_COLOR_PARENT,
  BG_COLOR_PARENT_CHECKED,
  BG_COLOR_PARENT_HOVER,
  BG_COLOR_PARENT_ACTIVE,
  BG_COLOR_PARENT_DISABLED,
  BG_COLOR_CHILD,
}

export const stylesToggle = {
  [themes.light]: {
    [BG_COLOR_PARENT]: "BeauBlue",
    [BG_COLOR_PARENT_CHECKED]: "MetallicSeaweed",
    [BG_COLOR_PARENT_HOVER]: "MetallicSeaweedHover",
    [BG_COLOR_PARENT_ACTIVE]: "Black",
    [BG_COLOR_PARENT_DISABLED]: "gray-300",
    [BG_COLOR_CHILD]: "Alabaster",
  },
  [themes.dark]: {
    [BG_COLOR_PARENT]: "Caramel",
    [BG_COLOR_PARENT_CHECKED]: "ChromeYellow",
    [BG_COLOR_PARENT_HOVER]: "ChromeYellowHover",
    [BG_COLOR_PARENT_ACTIVE]: "Black",
    [BG_COLOR_PARENT_DISABLED]: "gray-300",
    [BG_COLOR_CHILD]: "Kurotobi",
  },
}
