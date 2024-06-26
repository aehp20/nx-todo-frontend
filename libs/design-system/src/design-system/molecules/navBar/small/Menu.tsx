import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import { useNavigate } from 'react-router-dom';

import { ItemNavBar } from '../types';

import { MenuSpec } from './MenuSpec';

type MenuProps = {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  items: ItemNavBar[];
};

export default function Menu(props: Readonly<MenuProps>) {
  const { isOpen, setIsOpen, items } = props;

  const navigate = useNavigate();

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.navBar,
  );

  const { BG_COLOR, COLOR_ITEM, COLOR_ITEM_HOVER } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const colorItem = `text-${styles[COLOR_ITEM]}`;
  const colorItemHover = `hover:text-${styles[COLOR_ITEM_HOVER]}`;

  const handleTo = (to: string) => {
    navigate(to);
    setIsOpen((prev) => !prev);
  };

  return (
    <MenuSpec
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      items={items}
      handleTo={handleTo}
      styles={{
        bgColor,
        colorItem,
        colorItemHover,
      }}
    />
  );
}
