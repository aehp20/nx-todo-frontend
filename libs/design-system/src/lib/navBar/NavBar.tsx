import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { useThemeStyles, componentsName } from '@nx-todo-frontend/theme';

import '../../styles.css';

export type ItemNavBar = { to: string; label: string };

export type NavBarProps = {
  title: ReactNode;
  items: ItemNavBar[];
};

export function NavBar(props: NavBarProps) {
  const { title, items } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.navBar,
  );

  const { BG_COLOR, COLOR_TITLE, COLOR_ITEM, COLOR_ITEM_HOVER } =
    stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const colorTitle = `text-${styles[COLOR_TITLE]}`;
  const colorItem = `text-${styles[COLOR_ITEM]}`;
  const colorItemHover = `hover:text-${styles[COLOR_ITEM_HOVER]}`;

  return (
    <nav
      className={classNames(
        'flex items-center justify-between flex-wrap p-6 w-full',
        bgColor,
      )}
    >
      <div
        className={classNames(
          'flex items-center flex-shrink-0 mr-4 gap-2',
          colorTitle,
        )}
      >
        {title}
      </div>
      <div className="flex-grow flex items-center w-auto">
        <div className="flex gap-4">
          {items.map(({ to, label }) => (
            <Link
              key={label}
              to={to}
              className={classNames(
                'block inline-block mt-0',
                colorItem,
                colorItemHover,
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
