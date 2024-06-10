import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';
import { ReactNode } from 'react';

import '../../../styles.css';

export type TitleProps = {
  children: ReactNode;
};

export default function Title(props: Readonly<TitleProps>) {
  const { children } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.title);

  const { COLOR } = stylesPropertiesName;

  const color = `text-${styles[COLOR]}`;

  return (
    <h1
      data-testid="title"
      className={classNames('text-xl font-semibold', color)}
    >
      {children}
    </h1>
  );
}
