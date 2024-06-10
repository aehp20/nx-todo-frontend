import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';
import classNames from 'classnames';

import '../../../styles.css';

export type ErrorBoundaryUIProps = {
  error: Error;
  className?: string;
};

export default function ErrorBoundaryUI(props: Readonly<ErrorBoundaryUIProps>) {
  const { error, className } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.errorBoundaryUI,
  );

  const { BG_COLOR, BORDER_COLOR } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const borderColor = `border-${styles[BORDER_COLOR]}`;

  return (
    <div className={classNames('flex flex-col w-hull', className)}>
      <div
        className={classNames(
          'flex justify-center border rounded-t-lg p-2',
          borderColor,
        )}
      >
        {error.message}
      </div>
      <div
        className={classNames(
          'relative border-x border-b rounded-b-lg w-full max-h-64 overflow-auto',
          bgColor,
          borderColor,
        )}
      >
        <div className="flex justify-center overscroll-contain overflow-auto py-2 px-4">
          {error.stack}
        </div>
      </div>
    </div>
  );
}
