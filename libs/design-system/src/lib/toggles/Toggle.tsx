import { useState } from "react";
import classNames from "classnames";

import { useThemeStyles, componentsName } from '@nx-todo-frontend/theme';

import "../../styles.css";

export type ToggleProps = React.HTMLAttributes<HTMLInputElement> & {
  isChecked?: boolean;
  isDisabled?: boolean;
};

export default function Toggle(props: ToggleProps) {
  const { isChecked: initialIsChecked = false, isDisabled = false} = props;

  const [isChecked, setIsChecked] = useState(initialIsChecked);

  const styles = useThemeStyles(componentsName.toggle);

  const bgColorParent = styles["bg-color-parent"];
  const bgColorParentChecked = styles["bg-color-parent-checked"];
  const bgColorParentHover = styles["bg-color-parent-hover"];
  const bgColorParentActive = styles["bg-color-parent-active"];
  const bgColorParentDisabled = styles["bg-color-parent-disabled"];
  const bgColorChild = styles["bg-color-child"];

  const bgParent = `bg-${bgColorParent}`;
  const bgParentChecked = `peer-checked:bg-${bgColorParentChecked}`;
  const bgParentHover = `hover:bg-${bgColorParentHover}`;
  const bgParentCheckedHover = `peer-checked:hover:bg-${bgColorParentHover}`;
  const bgParentFocus = `peer-focus:shadow-[0_0_1px_${bgColorParentActive}]`;
  const bgParentDisabled = `peer-disabled:bg-${bgColorParentDisabled}`;
  const bgParentDisabledHover = `peer-disabled:hover:bg-${bgColorParentDisabled}`;
  const bgChild = `before:bg-${bgColorChild}`;

  const handleChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <label className={"relative inline-block w-12 h-7"}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        className="opacity-0 w-0 h-0 peer"
      />
      <span className={classNames("absolute cursor-pointer transition-[0.4s] inset-0 rounded-[28px]",
      "before:absolute before:content-[''] before:w-5 before:h-5 before:left-1 before:bottom-1",
      "before:transition-[0.4s] before:rounded-[50%]",
      "peer-checked:before:translate-x-5",
      "peer-disabled:bg-gray-300 peer-disabled:cursor-auto",
      "peer-disabled:hover:bg-gray-300",
      "peer-disabled:cursor-auto",
      bgParentDisabled,
      bgParentDisabledHover,
      bgParentFocus,
      bgParentHover,
      bgParentCheckedHover,
      bgParent,
      bgChild,
      bgParentChecked)} />
    </label>
  );
}
