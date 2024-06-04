import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';
import { ReactNode } from 'react';

import '../../styles.css';

export type TextDeleteProps = {
  children: ReactNode;
};

export default function TextDelete(props: TextDeleteProps) {
  const { children } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.textDelete,
  );

  const { COLOR } = stylesPropertiesName;

  const color = `text-${styles[COLOR]}`;

  return <span className={classNames(color)}>{children}</span>;
}
