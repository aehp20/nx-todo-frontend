import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ItemNavBar } from '../types';

type LargeMenuProps = {
  title: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  items: ItemNavBar[];
};

export function LargeMenu(props: Readonly<LargeMenuProps>) {
  const { title, items } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.navBar,
  );

  const { COLOR_TITLE, COLOR_ITEM, COLOR_ITEM_HOVER } = stylesPropertiesName;

  const colorTitle = `text-${styles[COLOR_TITLE]}`;
  const colorItem = `text-${styles[COLOR_ITEM]}`;
  const colorItemHover = `hover:text-${styles[COLOR_ITEM_HOVER]}`;

  return (
    <>
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
    </>
  );
}
