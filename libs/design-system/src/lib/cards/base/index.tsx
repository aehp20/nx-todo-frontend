import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';
import classNames from 'classnames';
import { ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card(props: CardProps) {
  const { children, className } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.card);

  const { BG_COLOR, BG_COLOR_HOVER, BORDER_BG_COLOR } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const bgColorHover = `hover:bg-${styles[BG_COLOR_HOVER]}`;
  const borderBgColor = `border-${styles[BORDER_BG_COLOR]}`;

  return (
    <div
      className={classNames(
        'block w-full p-4 border rounded-lg shadow',
        className,
        bgColor,
        bgColorHover,
        borderBgColor,
      )}
    >
      {children}
    </div>
  );
}
