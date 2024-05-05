import classNames from 'classnames';
import { ReactNode } from 'react';

import { useThemeStyles, componentsName } from '@nx-todo-frontend/theme';

import '../../styles.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  action?: 'primary' | 'secondary';
  disabled?: boolean;
  children?: ReactNode;
  icon?: JSX.Element;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const {
    action = 'primary',
    children,
    disabled = false,
    icon,
    className,
  } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.button,
  );

  const {
    PRIMARY_COLOR,
    PRIMARY_COLOR_HOVER,
    PRIMARY_COLOR_ACTIVE,
    PRIMARY_COLOR_DISABLED,
    PRIMARY_BG_COLOR,
    PRIMARY_BG_COLOR_HOVER,
    PRIMARY_BG_COLOR_ACTIVE,
    PRIMARY_BG_COLOR_DISABLED,
    SECONDARY_COLOR,
    SECONDARY_COLOR_HOVER,
    SECONDARY_COLOR_ACTIVE,
    SECONDARY_COLOR_DISABLED,
    SECONDARY_BG_COLOR,
    SECONDARY_BG_COLOR_HOVER,
    SECONDARY_BG_COLOR_ACTIVE,
    SECONDARY_BG_COLOR_DISABLED,
  } = stylesPropertiesName;

  const primaryColor = styles[PRIMARY_COLOR];
  const primaryColorHover = styles[PRIMARY_COLOR_HOVER];
  const primaryColorActive = styles[PRIMARY_COLOR_ACTIVE];
  const primaryColorDisabled = styles[PRIMARY_COLOR_DISABLED];
  const primaryBgColor = styles[PRIMARY_BG_COLOR];
  const primaryBgColorHover = styles[PRIMARY_BG_COLOR_HOVER];
  const primaryBgColorActive = styles[PRIMARY_BG_COLOR_ACTIVE];
  const primaryBgColorDisabled = styles[PRIMARY_BG_COLOR_DISABLED];
  const secondaryColor = styles[SECONDARY_COLOR];
  const secondaryColorHover = styles[SECONDARY_COLOR_HOVER];
  const secondaryColorActive = styles[SECONDARY_COLOR_ACTIVE];
  const secondaryColorDisabled = styles[SECONDARY_COLOR_DISABLED];
  const secondaryBgColor = styles[SECONDARY_BG_COLOR];
  const secondaryBgColorHover = styles[SECONDARY_BG_COLOR_HOVER];
  const secondaryBgColorActive = styles[SECONDARY_BG_COLOR_ACTIVE];
  const secondaryBgColorDisabled = styles[SECONDARY_BG_COLOR_DISABLED];

  const isPrimaryAction = action === 'primary';
  const isSecondaryAction = action === 'secondary';

  let textColor;
  let textColorHover;
  let textColorActive;
  let textColorDisabled;
  let bgColor;
  let bgColorHover;
  let bgColorActive;
  let bgColorParentDisabled;

  if (isPrimaryAction) {
    textColor = `text-${primaryColor}`;
    textColorHover = `hover:text-${primaryColorHover}`;
    textColorActive = `active:text-${primaryColorActive}`;
    textColorDisabled = `disabled:text-${primaryColorDisabled}`;
    bgColor = `bg-${primaryBgColor}`;
    bgColorHover = `hover:bg-${primaryBgColorHover}`;
    bgColorActive = `active:bg-${primaryBgColorActive}`;
    bgColorParentDisabled = `disabled:bg-${primaryBgColorDisabled}`;
  } else if (isSecondaryAction) {
    textColor = `text-${secondaryColor}`;
    textColorHover = `hover:text-${secondaryColorHover}`;
    textColorActive = `active:text-${secondaryColorActive}`;
    textColorDisabled = `disabled:text-${secondaryColorDisabled}`;
    bgColor = `bg-${secondaryBgColor}`;
    bgColorHover = `hover:bg-${secondaryBgColorHover}`;
    bgColorActive = `active:bg-${secondaryBgColorActive}`;
    bgColorParentDisabled = `disabled:bg-${secondaryBgColorDisabled}`;
  }

  return (
    <button
      {...props}
      disabled={disabled}
      className={classNames(
        'h-[42px] rounded-lg px-2 py-1 border hover:duration-750',
        className,
        textColor,
        textColorHover,
        textColorActive,
        textColorDisabled,
        bgColor,
        bgColorHover,
        bgColorActive,
        bgColorParentDisabled,
      )}
    >
      {icon ? (
        <div className="flex items-center gap-1">
          {icon}
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
}
