import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { BurgerButton } from '../../buttons';
import { ItemNavBar } from '../types';
import Menu from './Menu';

type SmallMenuProps = {
  title: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  items: ItemNavBar[];
};

export function SmallMenu(props: SmallMenuProps) {
  const { isOpen, setIsOpen, items, title } = props;

  return (
    <div className="relative w-full">
      <div className="flex gap-1">
        <BurgerButton
          className="m-2"
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <Title title={title} />
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} items={items} />
    </div>
  );
}

type TitleProps = {
  title: ReactNode;
};

function Title(props: TitleProps) {
  const { title } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.navBar,
  );

  const { COLOR_TITLE } = stylesPropertiesName;

  const colorTitle = `text-${styles[COLOR_TITLE]}`;

  return (
    <div
      className={classNames(
        'flex items-center flex-shrink-0 mr-4 gap-1',
        colorTitle,
      )}
    >
      {title}
    </div>
  );
}
