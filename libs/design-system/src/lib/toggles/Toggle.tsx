import { useState } from "react";
import classNames from "classnames";

import { useThemeStyles, componentsName } from '@nx-todo-frontend/theme';

import "../../styles.css";

export type ToggleProps = React.HTMLAttributes<HTMLInputElement> & {
  isChecked?: boolean;
  disabled?: boolean;
};

export type ToggleWithThemeProps = React.HTMLAttributes<HTMLInputElement> & {
  isChecked: boolean;
  handleChange: () => void;
};

export default function Toggle(props: ToggleProps) {
  const { isChecked: initialIsChecked = false, disabled } = props;

  const [isChecked, setIsChecked] = useState(initialIsChecked);

  const styles = useThemeStyles(componentsName.toggle);

  const bgColorParent = styles["bg-color-parent"];
  const bgColorParentChecked = styles["bg-color-parent-checked"];
  const bgColorChild = styles["bg-color-child"];

  const bgParent = `bg-${bgColorParent}`;
  const bgParentChecked = `peer-checked:bg-${bgColorParentChecked}`;
  const bgChild = `before:bg-${bgColorChild}`;

  const handleChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <label className={"relative inline-block w-12 h-7"}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="opacity-0 w-0 h-0 peer"
      />
      <span className={classNames("absolute cursor-pointer transition-[0.4s] inset-0 rounded-[28px]",
      "before:absolute before:content-[''] before:w-5 before:h-5 before:left-1 before:bottom-1",
      "before:transition-[0.4s] before:rounded-[50%]",
      "peer-checked:before:translate-x-5",
      "peer-focus:shadow-[0_0_1px_BlueCola]",
      bgParent,
      bgChild,
      bgParentChecked,
      )}></span>
    </label>
  );
}
