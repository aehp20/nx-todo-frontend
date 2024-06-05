import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';
import classNames from 'classnames';
import { CheckCircleSolidIcon } from '../../atoms/icons';

export default function Icon() {
  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.toast);

  const { ICON_COLOR_SUCCESS } = stylesPropertiesName;

  const iconColorSuccess = `text-${styles[ICON_COLOR_SUCCESS]}`;

  return (
    <div className={classNames(iconColorSuccess)}>
      <CheckCircleSolidIcon />
    </div>
  );
}
