import Select, {
  Props,
  components,
  DropdownIndicatorProps,
  ClearIndicatorProps,
  MultiValueRemoveProps,
} from 'react-select';
import classNames from 'classnames';

import { useThemeStyles, componentsName } from '@nx-todo-frontend/theme';
import { NavArrowDownIcon, XMarkIcon } from '../icons';

import '../../styles.css';

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

const placeholderStyles = 'text-gray-500 pl-1 py-0.5';
const selectInputStyles = 'pl-1 py-0.5';
const valueContainerStyles = 'p-1 gap-1';
const singleValueStyles = 'leading-7 ml-1';
const multiValueStyles =
  'bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5';
const multiValueLabelStyles = 'leading-6 py-0.5';
const multiValueRemoveStyles =
  'border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md';
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles =
  'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800';
const indicatorSeparatorStyles = 'bg-gray-300';
const dropdownIndicatorStyles =
  'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black';
const menuStyles = 'p-1 mt-2 border border-gray-200 bg-white rounded-lg';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-gray-500 text-sm';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded',
  focus: 'bg-gray-100 active:bg-gray-200',
  selected: "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm';

export type DropdownProps = Props;

export default function Dropdown({ value, options, ...props }: DropdownProps) {
  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.dropdown,
  );

  const {
    BG_COLOR,
    BG_COLOR_HOVER,
    BG_COLOR_ACTIVE,
    BG_COLOR_DISABLED,
    BORDER_COLOR,
    BORDER_COLOR_HOVER,
    BORDER_COLOR_ACTIVE,
    BORDER_COLOR_DISABLED,
    COLOR,
  } = stylesPropertiesName;

  const bgColor = `bg-${styles[BG_COLOR]}`;
  const bgColorHover = `hover:bg-${styles[BG_COLOR_HOVER]}`;
  const bgColorActive = `active:bg-${styles[BG_COLOR_ACTIVE]}`;
  const bgColorDisabled = `disabled:bg-${styles[BG_COLOR_DISABLED]}`;
  const borderColor = `border-${styles[BORDER_COLOR]}`;
  const borderColorHover = `hover:border-${styles[BORDER_COLOR_HOVER]}`;
  const borderColorActive = `active:border-${styles[BORDER_COLOR_ACTIVE]}`;
  const borderColorDisabled = `disabled:border-${styles[BORDER_COLOR_DISABLED]}`;
  const color = `text-${styles[COLOR]}`;

  const controlStyles = {
    base: 'border rounded-lg bg-white hover:cursor-pointer',
    focus: 'border-primary-600 ring-1 ring-primary-500',
    nonFocus: `${borderColor} ${borderColorHover}`,
  };

  return (
    <Select
      value={value}
      options={options}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
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
