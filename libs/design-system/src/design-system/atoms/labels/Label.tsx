import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';

import '../../../styles.css';

export type LabelProps = React.ComponentProps<'label'>;

export default function Label(props: LabelProps) {
  const { children, ...restProps } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.label);

  const { COLOR } = stylesPropertiesName;

  const color = `text-${styles[COLOR]}`;

  return (
    <label {...restProps} className={classNames('font-semibold', color)}>
      {children}
    </label>
  );
}
