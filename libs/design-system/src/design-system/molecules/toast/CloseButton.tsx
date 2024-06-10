import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';

import { XMarkIcon } from '../../atoms/icons';

type CloseButtonProps = {
  closeToast: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function CloseButton(props: Readonly<CloseButtonProps>) {
  const { closeToast } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.toast);

  const {
    CLOSE_BUTTON_COLOR,
    CLOSE_BUTTON_HOVER_COLOR,
    CLOSE_BUTTON_FOCUS_COLOR,
  } = stylesPropertiesName;

  const color = `text-${styles[CLOSE_BUTTON_COLOR]}`;
  const hoverColor = `hover:text-${styles[CLOSE_BUTTON_HOVER_COLOR]}`;
  const focusColor = `focus:text-${styles[CLOSE_BUTTON_FOCUS_COLOR]}`;

  return (
    <button
      onClick={closeToast}
      className={classNames(color, hoverColor, focusColor)}
    >
      <XMarkIcon width="20px" height="20px" />
    </button>
  );
}
