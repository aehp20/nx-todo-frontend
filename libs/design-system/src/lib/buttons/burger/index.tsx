import classNames from 'classnames';

import { MenuIcon, XMarkIcon } from '../../icons';
import Button from '../base';

export type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

export default function BurgerButton(props: BurgerButtonProps) {
  const { isOpen, onClick, className } = props;

  const Icon = isOpen ? XMarkIcon : MenuIcon;

  return (
    <Button
      onClick={onClick}
      className={classNames('px-2 py-2 h-auto md:h-[42px]', className)}
    >
      {<Icon className="w-4 h-4 md:w-6 md:h-6" />}
    </Button>
  );
}
