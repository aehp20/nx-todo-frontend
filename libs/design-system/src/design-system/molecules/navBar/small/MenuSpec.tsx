import classNames from 'classnames';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { ItemNavBar } from '../types';

type MenuSpecProps = {
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  items: ItemNavBar[];
  handleTo: (to: string) => void;
  styles: {
    bgColor: string;
    colorItem: string;
    colorItemHover: string;
  };
};

export function MenuSpec(props: Readonly<MenuSpecProps>) {
  const { isOpen, items, handleTo, styles } = props;
  const { bgColor, colorItem, colorItemHover } = styles;

  return (
    <Container
      isOpen={isOpen}
      styles={{
        bgColor,
      }}
    >
      <Items
        items={items}
        handleTo={handleTo}
        styles={{
          colorItem,
          colorItemHover,
        }}
      />
    </Container>
  );
}

type ContainerProps = {
  children: ReactNode;
  isOpen: boolean;
  styles: {
    bgColor: string;
  };
};

export function Container(props: Readonly<ContainerProps>) {
  const { children, isOpen, styles } = props;
  const { bgColor } = styles;

  return (
    <div
      className={classNames(
        'absolute mt-px z-10 text-base shadow w-1/2',
        isOpen ? 'block' : 'hidden',
        bgColor,
      )}
    >
      {children}
    </div>
  );
}

type ItemsProps = {
  items: ItemNavBar[];
  handleTo: (to: string) => void;
  styles: {
    colorItem: string;
    colorItemHover: string;
  };
};

export function Items(props: Readonly<ItemsProps>) {
  const { items, handleTo, styles } = props;

  return (
    <div className="flex flex-col gap-2 p-2">
      {items.map(({ to, label }) => (
        <Item
          key={label}
          to={to}
          label={label}
          handleTo={handleTo}
          styles={styles}
        >
          {label}
        </Item>
      ))}
    </div>
  );
}

type ItemProps = {
  children: ReactNode;
  to: string;
  label: string;
  handleTo: (to: string) => void;
  styles: {
    colorItem: string;
    colorItemHover: string;
  };
};

export function Item(props: Readonly<ItemProps>) {
  const { children, to, label, handleTo, styles } = props;
  const { colorItem, colorItemHover } = styles;

  return (
    <Link
      key={label}
      to={to}
      onClick={() => handleTo(to)}
      className={classNames(
        'block inline-block mt-0',
        colorItem,
        colorItemHover,
      )}
    >
      {children}
    </Link>
  );
}
