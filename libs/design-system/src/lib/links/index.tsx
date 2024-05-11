import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';
import classNames from 'classnames';

export type LinkProps = React.ComponentProps<'a'>;

export default function Link(props: LinkProps) {
  const { children, ...restProps } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.link);

  const { COLOR } = stylesPropertiesName;

  const colorLink = `link:text-${styles[COLOR]}`;
  const colorVisited = `visited:text-${styles[COLOR]}`;

  return (
    <a
      className={classNames(
        'link:no-underline link:font-bold',
        'visited:no-underline visited:font-bold',
        'hover:underline',
        'active:underline',
        colorLink,
        colorVisited,
      )}
      {...restProps}
    >
      {children}
    </a>
  );
}
