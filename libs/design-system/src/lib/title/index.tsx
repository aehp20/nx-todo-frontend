import classNames from 'classnames';
import { ReactNode } from 'react';

import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import '../../styles.css';

export type TitleProps = {
  children: ReactNode;
};

export default function Title(props: TitleProps) {
  const { children } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.title);

  const { COLOR } = stylesPropertiesName;

  const color = `text-${styles[COLOR]}`;

  return (
    <h2 className={classNames('text-xl font-semibold', color)}>{children}</h2>
  );
}
