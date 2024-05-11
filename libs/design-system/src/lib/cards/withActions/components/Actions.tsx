import { ReactNode } from 'react';

import classNames from 'classnames';
import { MoreHorizIcon } from '../../../icons';
import { useOnClickOutside } from '../useOnClickOutside';
import { Menu } from './Menu';

type ActionsProps = {
  nodeRef: React.RefObject<HTMLDivElement>;
  actions: ReactNode[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  styles: Record<string, string>;
  stylesPropertiesName: Record<string, string>;
};

export function Actions(props: ActionsProps) {
  const { nodeRef, actions, isOpen, setIsOpen, styles, stylesPropertiesName } =
    props;

  const { BG_COLOR, BORDER_BG_COLOR } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const ringColorHover = `hover:ring-${styles[BORDER_BG_COLOR]}`;

  useOnClickOutside(nodeRef, () => setIsOpen(false));

  return (
    <div ref={nodeRef} className="relative flex justify-end w-8 ml-auto">
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        className={classNames(
          'inline-block hover:ring-1 rounded-lg text-sm p-1.5',
          bgColor,
          ringColorHover,
        )}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MoreHorizIcon />
      </button>
      <Menu
        actions={actions}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        styles={styles}
        stylesPropertiesName={stylesPropertiesName}
      />
    </div>
  );
}
