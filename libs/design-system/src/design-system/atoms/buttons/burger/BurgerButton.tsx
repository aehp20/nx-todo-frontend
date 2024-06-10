import classNames from 'classnames';

import { MenuIcon, XMarkIcon } from '../../icons';
import Button from '../base/Button';

export type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

export default function BurgerButton(props: Readonly<BurgerButtonProps>) {
  const { isOpen, onClick, className } = props;

  const Icon = isOpen ? XMarkIcon : MenuIcon;

  return (
    <Button
      onClick={onClick}
      className={classNames('px-2 py-2 h-auto md:h-[42px]', className)}
      icon={<Icon className="w-4 h-4 md:w-6 md:h-6" title="Burger button" />}
    />
  );
}
