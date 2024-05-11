import classNames from 'classnames';
import { ReactNode } from 'react';

type MenuProps = {
  actions: ReactNode[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  styles: Record<string, string>;
  stylesPropertiesName: Record<string, string>;
};

export function Menu(props: MenuProps) {
  const { actions, isOpen, setIsOpen, styles, stylesPropertiesName } = props;

  const { BG_COLOR, BG_COLOR_HOVER, BORDER_BG_COLOR } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const bgColorHover = `hover:bg-${styles[BG_COLOR_HOVER]}`;
  const ringColor = `ring-${styles[BORDER_BG_COLOR]}`;

  return (
    <div
      id="dropdown"
      className={classNames(
        'absolute top-[44px] z-10 text-base list-none rounded-lg shadow w-32 ring-1',
        isOpen ? 'block' : 'hidden',
        ringColor,
        bgColor,
      )}
    >
      <ul className="py-2" aria-labelledby="dropdownButton">
        {actions.map((action, index) => (
          <li
            key={index}
            className={classNames('block px-4 py-2 text-sm', bgColorHover)}
            onClick={(_e) => {
              setIsOpen(false);
            }}
          >
            {action}
          </li>
        ))}
      </ul>
    </div>
  );
}
