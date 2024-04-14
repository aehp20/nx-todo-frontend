import { ToggleWithThemeProps } from "./Toggle";
import { ToggleUI } from "./ToggleUI";

import "./ToggleWithThemeDark.css";

export function ToggleWithThemeDark(props : ToggleWithThemeProps) {
  return (
    <ToggleUI
      {...props}
      styles={{
        switch: "switch-dark",
        sliderWithRound: "slider-dark round"
      }}
    />
  );
}
