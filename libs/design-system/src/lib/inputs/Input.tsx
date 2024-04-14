import classNames from "classnames";
import { useState } from "react";

import { useThemeStyles, componentsName } from '@nx-todo-frontend/theme';
import { getHexadecimalColorWithAlpha } from '@nx-todo-frontend/utils';

import "../../styles.css";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  type?: string;
};

export default function Input(props: InputProps) {
  const { disabled, type = "text" } = props;

  const styles = useThemeStyles(componentsName.input);

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleKeyDown = () => {
    setIsActive(true);
  };
  const handleKeyUp = () => {
    setIsActive(false);
  };

  const bgColorFromStyle = `${styles["bg-color"]}`;
  const bgColorHoverFromStyle = `${styles["bg-color-hover"]}`;
  const bgColorActiveFromStyle = `${styles["bg-color-active"]}`;
  const bgColorDisabled = getHexadecimalColorWithAlpha(bgColorFromStyle)(70);

  let bgColor;

  bgColor = bgColorFromStyle;
  if (isHover) {
    bgColor = bgColorHoverFromStyle;
  } else if (isActive) {
    bgColor = bgColorActiveFromStyle;
  } else if (disabled) {
    bgColor = bgColorDisabled;
  }

  const borderColorFromStyle = `${styles["border-color"]}`;
  const borderColorHoverFromStyle = `${styles["border-color-hover"]}`;
  const borderColorActiveFromStyle = `${styles["border-color-active"]}`;
  const borderColorDisabled = getHexadecimalColorWithAlpha(borderColorFromStyle)(70);

  let borderColor;

  borderColor = borderColorFromStyle;
  if (isHover) {
    borderColor = borderColorHoverFromStyle;
  } else if (isActive) {
    borderColor = borderColorActiveFromStyle;
  } else if (disabled) {
    borderColor = borderColorDisabled;
  }

  const color = `${styles["color"]}`;

  return (
    <input
      type={type}
      {...props}
      disabled={disabled}
      className={classNames("h-[42px] px-1 hover:duration-750 border-2 rounded-lg w-full")}
      style={{
        background: bgColor,
        color: color,
        borderColor: borderColor
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onFocus={handleKeyDown}
      onBlur={handleKeyUp}
    />
  );
}
