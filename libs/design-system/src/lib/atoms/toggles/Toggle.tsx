import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

import '../../../styles.css';

export type ToggleProps = React.HTMLAttributes<HTMLInputElement> & {
  isChecked?: boolean;
  isDisabled?: boolean;
  handleChange: (value: boolean) => void;
};

export default function Toggle(props: ToggleProps) {
  const {
    isChecked: initialIsChecked = false,
    isDisabled = false,
    handleChange,
  } = props;

  const [isChecked, setIsChecked] = useState(initialIsChecked);

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.toggle,
  );
  const {
    BG_COLOR_PARENT,
    BG_COLOR_PARENT_CHECKED,
    BG_COLOR_PARENT_HOVER,
    BG_COLOR_PARENT_ACTIVE,
    BG_COLOR_PARENT_DISABLED,
    BG_COLOR_CHILD,
  } = stylesPropertiesName;

  const bgColorParent = styles[BG_COLOR_PARENT];
  const bgColorParentChecked = styles[BG_COLOR_PARENT_CHECKED];
  const bgColorParentHover = styles[BG_COLOR_PARENT_HOVER];
  const bgColorParentActive = styles[BG_COLOR_PARENT_ACTIVE];
  const bgColorParentDisabled = styles[BG_COLOR_PARENT_DISABLED];
  const bgColorChild = styles[BG_COLOR_CHILD];

  const bgParent = `bg-${bgColorParent}`;
  const bgParentChecked = `peer-checked:bg-${bgColorParentChecked}`;
  const bgParentHover = `hover:bg-${bgColorParentHover}`;
  const bgParentCheckedHover = `peer-checked:hover:bg-${bgColorParentHover}`;
  const bgParentFocus = `peer-focus:shadow-[0_0_1px_${bgColorParentActive}]`;
  const bgParentDisabled = `peer-disabled:bg-${bgColorParentDisabled}`;
  const bgParentDisabledHover = `peer-disabled:hover:bg-${bgColorParentDisabled}`;
  const bgChild = `before:bg-${bgColorChild}`;

  useEffect(() => {
    if (handleChange) {
      handleChange(isChecked);
    }
  }, [isChecked]);

  return (
    <label className={'relative inline-block w-12 h-7'}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={() => setIsChecked((prev) => !prev)}
        className="opacity-0 w-0 h-0 peer"
      />
      <span
        className={classNames(
          'absolute cursor-pointer transition-[0.4s] inset-0 rounded-[28px]',
          "before:absolute before:content-[''] before:w-5 before:h-5 before:left-1 before:bottom-1",
          'before:transition-[0.4s] before:rounded-[50%]',
          'peer-checked:before:translate-x-5',
          'peer-disabled:bg-gray-300 peer-disabled:cursor-auto',
          'peer-disabled:hover:bg-gray-300',
          'peer-disabled:cursor-auto',
          bgParent,
          bgParentDisabled,
          bgParentDisabledHover,
          bgParentFocus,
          bgParentHover,
          bgParentCheckedHover,
          bgParentChecked,
          bgChild,
        )}
      />
    </label>
  );
}
