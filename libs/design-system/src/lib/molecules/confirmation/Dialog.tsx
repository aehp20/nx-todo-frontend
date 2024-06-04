import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';

import { XMarkIcon } from '../../atoms/icons';

import '../../../styles.css';

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Dialog(props: Props) {
  const { open, onClose } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.dialog,
  );

  const { BG_COLOR } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex backdrop-opacity-10 backdrop-invert bg-gray/30">
      <div
        className={classNames(
          'relative p-8 w-full max-w-xs md:max-w-md m-auto flex-col flex rounded-lg',
          bgColor,
        )}
      >
        <div>{props.children}</div>
        <span className="absolute top-0 right-0 p-4">
          <XMarkIcon className="cursor-pointer" onClick={() => onClose()} />
        </span>
      </div>
    </div>
  );
}
