import { ToggleWithThemeProps } from "./Toggle";
import { ToggleUI } from "./ToggleUI";

import "./ToggleWithThemeLight.css";

export function ToggleWithThemeLight(props : ToggleWithThemeProps) {
  return (
    <ToggleUI
      {...props}
      styles={{
        switch: "switch-light",
        sliderWithRound: "slider-light round"
      }}
    />
  );
}
