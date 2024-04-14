import classNames from "classnames";
import { ReactNode, useState } from "react";

import { useThemeStyles, componentsName } from '@nx-todo-frontend/theme';
import { getHexadecimalColorWithAlpha } from '@nx-todo-frontend/utils';

import "../../styles.css";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  action?: "primary" | "secondary";
  disabled?: boolean;
  children: ReactNode;
  icon?: JSX.Element;
};

export default function Button(props: ButtonProps) {
  const { action = "primary", children, disabled = false, icon } = props;

  const styles = useThemeStyles(componentsName.button);

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isPrimaryAction = action === "primary";
  const isSecondaryAction = action === "secondary";

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

  const primaryBgColorFromStyle = `${styles["primary-bg-color"]}`;
  const primaryBgColorHoverFromStyle = `${styles["primary-bg-color-hover"]}`;
  const primaryBgColorActiveFromStyle = `${styles["primary-bg-color-active"]}`;
  const primaryBgColorDisabled = getHexadecimalColorWithAlpha(primaryBgColorFromStyle)(70);
  const secondaryBgColorFromStyle = `${styles["secondary-bg-color"]}`;
  const secondaryBgColorHoverFromStyle = `${styles["secondary-bg-color-hover"]}`;
  const secondaryBgColorActiveFromStyle = `${styles["secondary-bg-color-active"]}`;
  const secondaryBgColorDisabled = getHexadecimalColorWithAlpha(secondaryBgColorFromStyle)(70);

  let bgColor;

  if (isPrimaryAction) {
    bgColor = primaryBgColorFromStyle;
    if (isHover) {
      bgColor = primaryBgColorHoverFromStyle;
    } else if (isActive) {
      bgColor = primaryBgColorActiveFromStyle;
    } else if (disabled) {
      bgColor = primaryBgColorDisabled;
    }
  } else if (isSecondaryAction) {
    bgColor = secondaryBgColorFromStyle;
    if (isHover) {
      bgColor = secondaryBgColorHoverFromStyle;
    } else if (isActive) {
      bgColor = secondaryBgColorActiveFromStyle;
    } else if (disabled) {
      bgColor = secondaryBgColorDisabled;
    }
  }

  const primaryColorFromStyle = `${styles["primary-color"]}`;
  const primaryColorHoverFromStyle = `${styles["primary-color-hover"]}`;
  const primaryColorActiveFromStyle = `${styles["primary-color-active"]}`;
  const primaryColorDisabled = getHexadecimalColorWithAlpha(primaryColorFromStyle)(70);
  const secondaryColorFromStyle = `${styles["secondary-color"]}`;
  const secondaryColorHoverFromStyle = `${styles["secondary-color-hover"]}`;
  const secondaryColorActiveFromStyle = `${styles["secondary-color-active"]}`;
  const secondaryColorDisabled = getHexadecimalColorWithAlpha(secondaryColorFromStyle)(70);

  let borderColor;

  if (isPrimaryAction) {
    borderColor = primaryColorFromStyle;
    if (isHover) {
      borderColor = primaryColorHoverFromStyle;
    } else if (isActive) {
      borderColor = primaryColorActiveFromStyle;
    } else if (disabled) {
      borderColor = primaryColorDisabled;
    }
  } else if (isSecondaryAction) {
    borderColor = secondaryColorFromStyle;
    if (isHover) {
      borderColor = secondaryColorHoverFromStyle;
    } else if (isActive) {
      borderColor = secondaryColorActiveFromStyle;
    } else if (disabled) {
      borderColor = secondaryColorDisabled;
    }
  }

  return (
    <button
      {...props}
      disabled={disabled}
      className={classNames("h-[42px] rounded-lg px-2 py-1 border hover:duration-750")}
      style={{
        background: bgColor,
        color: isPrimaryAction ? primaryColorFromStyle : secondaryColorFromStyle,
        borderColor: borderColor
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onFocus={handleKeyDown}
      onBlur={handleKeyUp}
    >
      {icon ? <div className="flex items-center gap-1">{icon}{children}</div>: children}
    </button>
  );
}
