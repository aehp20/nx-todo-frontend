import classNames from 'classnames';

import { useThemeStyles, componentsName } from '@nx-todo-frontend/theme';

import '../../styles.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  disabled?: boolean;
  type?: string;
};

export default function Input(props: InputProps) {
  const { disabled, type = 'text' } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.input);

  const {
    BG_COLOR,
    BG_COLOR_HOVER,
    BG_COLOR_ACTIVE,
    BG_COLOR_DISABLED,
    BORDER_COLOR,
    BORDER_COLOR_HOVER,
    BORDER_COLOR_ACTIVE,
    BORDER_COLOR_DISABLED,
    COLOR,
  } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const bgColorHover = `hover:bg-${styles[BG_COLOR_HOVER]}`;
  const bgColorActive = `active:bg-${styles[BG_COLOR_ACTIVE]}`;
  const bgColorDisabled = `disabled:bg-${styles[BG_COLOR_DISABLED]}`;
  const borderColor = `border-${styles[BORDER_COLOR]}`;
  const borderColorHover = `hover:border-${styles[BORDER_COLOR_HOVER]}`;
  const borderColorActive = `active:border-${styles[BORDER_COLOR_ACTIVE]}`;
  const borderColorDisabled = `disabled:border-${styles[BORDER_COLOR_DISABLED]}`;
  const color = `text-${styles[COLOR]}`;

  return (
    <input
      type={type}
      {...props}
      disabled={disabled}
      className={classNames(
        'h-[42px] px-1 hover:duration-750 border rounded-lg w-full',
        bgColor,
        bgColorHover,
        bgColorActive,
        bgColorDisabled,
        borderColor,
        borderColorHover,
        borderColorActive,
        borderColorDisabled,
        color,
      )}
    />
  );
}
