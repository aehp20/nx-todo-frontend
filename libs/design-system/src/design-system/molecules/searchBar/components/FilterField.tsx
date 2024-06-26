import { Option } from '../../dropdown/Dropdown';
import { FilterConfig, Query, QueryValueType } from '../types';

import DropdownField from './DropdownField';
import InputTextField from './InputTextField';

type FilterFieldProps = {
  filtersConfig: FilterConfig;
  handleChange: (name: string, value: QueryValueType) => void;
  query: Query | undefined;
};

export function FilterField(props: Readonly<FilterFieldProps>) {
  const { filtersConfig, handleChange, query } = props;

  const {
    type,
    label,
    name,
    options,
    placeholder,
    disabled,
    noOptionsMessage,
  } = filtersConfig;

  if (type === 'search') {
    const value = query ? query[name] || '' : '';
    return (
      <InputTextField
        type="search"
        key={name}
        name={name}
        label={label}
        value={value as string}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
      />
    );
  } else if (type === 'dropdown') {
    const value = query ? query[name] : undefined;
    return (
      <DropdownField
        key={name}
        name={name}
        label={label}
        value={value as Option}
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        noOptionsMessage={noOptionsMessage}
      />
    );
  }

  return false;
}
