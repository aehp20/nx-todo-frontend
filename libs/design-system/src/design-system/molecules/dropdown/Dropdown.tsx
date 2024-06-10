import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';
import Select, {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  MultiValueRemoveProps,
  Props,
} from 'react-select';

import { NavArrowDownIcon, XMarkIcon } from '../../atoms/icons';

import '../../../styles.css';

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return (
    <components.DropdownIndicator {...props}>
      <NavArrowDownIcon />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  return (
    <components.ClearIndicator {...props}>
      <XMarkIcon />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <XMarkIcon />
    </components.MultiValueRemove>
  );
};

const selectInputStyles = 'pl-1 py-0.5';
const valueContainerStyles = 'p-1 gap-1';
const singleValueStyles = 'leading-7 ml-1';
const multiValueLabelStyles = 'leading-6 py-0.5';
const indicatorsContainerStyles = 'p-1 gap-1';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';
const multiValueRemoveStyles =
  'border border-gray-200 bg-gray-100 hover:bg-gray-200 hover:text-gray-800 text-gray-500 hover:border-gray-800 rounded-md';
const clearIndicatorStyles =
  'hover:bg-gray-200 hover:text-gray-800 text-gray-500 p-1 rounded-md';
const indicatorSeparatorStyles = 'bg-gray-500';
const dropdownIndicatorStyles =
  'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black';

export type Option = {
  value: string;
  label: string;
};

export type DropdownProps = Omit<Props, 'onChange' | 'noOptionsMessage'> & {
  customStyles?: Record<string, string>;
  noOptionsMessage?: string;
  onChange: (option: Option) => void;
};

export function Dropdown({
  value,
  options,
  onChange,
  customStyles,
  noOptionsMessage,
  isDisabled,
  isSearchable = false,
  blurInputOnSelect = true,
  ...props
}: DropdownProps) {
  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.dropdown,
  );

  const {
    BG_COLOR,
    BG_COLOR_HOVER,
    BG_COLOR_DISABLED,
    BORDER_COLOR,
    BORDER_COLOR_HOVER,
  } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const bgColorHover = `hover:bg-${styles[BG_COLOR_HOVER]}`;
  const bgColorDisabled = `bg-${styles[BG_COLOR_DISABLED]}`;
  const borderColor = `border-${styles[BORDER_COLOR]}`;
  const borderColorHover = `hover:border-${styles[BORDER_COLOR_HOVER]}`;
  const placeholderColor = `text-${styles[BORDER_COLOR]}`;
  const valueBgColor = `bg-${styles[BORDER_COLOR]}`;
  const valueColor = `text-${styles[BG_COLOR]}`;
  const optionBgColorHover = `bg-${styles[BORDER_COLOR]}`;
  const optionFocusColor = `text-${styles[BG_COLOR]}`;
  const menuBorderColor = `border-${styles[BORDER_COLOR]}`;
  const noOptionsMessageColor = `text-${styles[BORDER_COLOR]}`;
  const noOptionsMessageBorderColor = `border-${styles[BORDER_COLOR]}`;

  const placeholderStyles = `${placeholderColor} pl-1 py-0.5`;
  const controlStyles = {
    base: `border rounded-lg ${
      isDisabled ? bgColorDisabled : bgColor
    } ${bgColorHover} hover:cursor-pointer ${customStyles?.control}`,
    focus: 'border-blue-500',
    nonFocus: `${borderColor} ${borderColorHover}`,
  };
  const menuStyles = `p-1 mt-2 border ${menuBorderColor} ${bgColor} rounded-lg`;
  const optionStyles = {
    base: 'hover:cursor-pointer px-3 py-2 rounded',
    focus: `${optionBgColorHover} ${optionFocusColor}`,
    selected: `after:content-['✔'] after:ml-2`,
  };
  const multiValueStyles = `${valueBgColor} ${valueColor} rounded items-center py-0.5 pl-2 pr-1 gap-1.5`;
  const noOptionsMessageStyles = `${noOptionsMessageColor} p-2 ${bgColor} border border-dashed ${noOptionsMessageBorderColor} rounded-sm`;

  return (
    <Select
      value={value}
      options={options}
      onChange={(newValue: unknown) => onChange(newValue as Option)}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      noOptionsMessage={() => noOptionsMessage ?? 'No options'}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      blurInputOnSelect={blurInputOnSelect}
      unstyled
      styles={{
        input: (base) => ({
          ...base,
          'input:focus': {
            boxShadow: 'none',
          },
        }),
        // On mobile, the label will truncate automatically, so we want to
        // override that behaviour.
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: 'normal',
          overflow: 'visible',
        }),
        control: (base) => ({
          ...base,
          transition: 'none',
        }),
      }}
      components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
      classNames={{
        control: ({ isFocused }) =>
          classNames(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base,
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          classNames(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base,
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
      {...props}
    />
  );
}
