import classNames from 'classnames';

import { ActionItem } from '../types';

type MenuProps = {
  actions: ActionItem[];
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
      <ul aria-labelledby="dropdownButton">
        {actions.map((action, index) => (
          <li
            key={index}
            className={classNames(
              'block px-4 py-2 text-sm first:rounded-t-lg last:rounded-b-lg',
              bgColorHover,
            )}
            onClick={(_e) => {
              if (action.onClick) {
                action.onClick();
              }
              setIsOpen(false);
            }}
          >
            {action.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
