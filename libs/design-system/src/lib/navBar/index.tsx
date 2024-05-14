import classNames from 'classnames';
import { ReactNode, useState } from 'react';

import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import { LargeMenu } from './large';
import { SmallMenu } from './small';
import { ItemNavBar } from './types';

import '../../styles.css';

export type NavBarProps = {
  title: ReactNode;
  items: ItemNavBar[];
};

export default function NavBar(props: NavBarProps) {
  const { title, items } = props;

  const [isOpen, setIsOpen] = useState(false);

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.navBar,
  );

  const { BG_COLOR } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;

  return (
    <>
      <nav className={classNames('flex md:hidden', bgColor)}>
        <SmallMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          items={items}
          title={title}
        />
      </nav>
      <nav
        className={classNames(
          'hidden md:flex items-center justify-between flex-wrap p-6 w-full',
          bgColor,
        )}
      >
        <LargeMenu
          title={title}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          items={items}
        />
      </nav>
    </>
  );
}
