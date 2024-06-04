import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';
import { ReactNode } from 'react';

import '../../../../styles.css';

export type MessageProps = {
  type?: 'error' | 'warning' | 'info' | 'success';
  children: ReactNode;
  className?: string;
};

export default function Message(props: MessageProps) {
  const { type = 'info', children, className } = props;

  return (
    <Container type={type} className={className}>
      {children}
    </Container>
  );
}

const getColor = (
  type: string,
  stylesPropertiesName: Record<string, string>,
) => {
  const { ERROR_COLOR, WARNING_COLOR, INFO_COLOR, SUCCESS_COLOR } =
    stylesPropertiesName;

  if (type === 'error') {
    return ERROR_COLOR;
  } else if (type === 'warning') {
    return WARNING_COLOR;
  } else if (type === 'success') {
    return SUCCESS_COLOR;
  }

  return INFO_COLOR;
};

type ContainerProps = {
  children: ReactNode;
  type: 'error' | 'warning' | 'info' | 'success';
  className?: string;
};

const Container = (props: ContainerProps) => {
  const { children, type, className } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.message,
  );

  const colorByType = getColor(type, stylesPropertiesName);

  const color = `text-${styles[colorByType]}`;
  const borderColor = `border-${styles[colorByType]}`;

  return (
    <div
      className={classNames(
        'border rounded-lg p-2 font-medium',
        className,
        borderColor,
        color,
      )}
    >
      {children}
    </div>
  );
};
