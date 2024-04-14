import { useState } from "react";

import { useTheme, themes } from '@nx-todo-frontend/theme';

import { ToggleWithThemeLight } from "./ToggleWithThemeLight";
import { ToggleWithThemeDark } from "./ToggleWithThemeDark";

export type ToggleProps = React.HTMLAttributes<HTMLInputElement> & {
  isChecked?: boolean;
  disabled?: boolean;
};

export type ToggleWithThemeProps = React.HTMLAttributes<HTMLInputElement> & {
  isChecked: boolean;
  handleChange: () => void;
};

export default function Toggle(props: ToggleProps) {
  const { isChecked: initialIsChecked = false, disabled } = props;

  const [isChecked, setIsChecked] = useState(initialIsChecked);

  const { theme } = useTheme();

  const handleChange = () => {
    setIsChecked(prev => !prev);
  };

  return theme === themes.light ? (
    <ToggleWithThemeLight isChecked={isChecked} handleChange={handleChange} />
  ) : theme === themes.dark ? (
    <ToggleWithThemeDark isChecked={isChecked} handleChange={handleChange} />
  ) : null;
}
