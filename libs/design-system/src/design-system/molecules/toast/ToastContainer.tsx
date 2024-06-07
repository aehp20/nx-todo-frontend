import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';
import { ToastContainer as ToastContainerReactToastify } from 'react-toastify';

import CloseButton from './CloseButton';
import Icon from './Icon';

import 'react-toastify/dist/ReactToastify.css';
import '../../../styles.css';

export function ToastContainer() {
  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.toast);

  const { BG_COLOR, COLOR, PROGRESS_BAR_BG_COLOR, BORDER_COLOR } =
    stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const color = `text-${styles[COLOR]}`;
  const progressBarBgColor = `${styles[PROGRESS_BAR_BG_COLOR]}`;
  const borderBgColor = `border-${styles[BORDER_COLOR]}`;

  return (
    <ToastContainerReactToastify
      toastClassName={() =>
        classNames(
          'relative flex p-2 min-h-10 border rounded-md justify-between overflow-hidden cursor-pointer',
          bgColor,
          color,
          borderBgColor,
        )
      }
      position="top-right"
      autoClose={3000}
      icon={<Icon />}
      closeButton={(props) => <CloseButton closeToast={props.closeToast} />}
      progressStyle={{ background: progressBarBgColor }}
      className={String.raw`[&_.Toastify\_\_progress-bar--bg]:bg-[--bg]`}
      style={{
        '--bg': progressBarBgColor,
      }}
    />
  );
}
