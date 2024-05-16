import { Option } from '../../dropdown';
import { FilterConfig, Query, QueryValueType } from '../types';

import DropdownField from './DropdownField';
import InputTextField from './InputTextField';

type FilterFieldProps = {
  filtersConfig: FilterConfig;
  handleChange: (name: string, value: QueryValueType) => void;
  query: Query | undefined;
};

export function FilterField(props: FilterFieldProps) {
  const { filtersConfig, handleChange, query } = props;

  const { type, label, name, options, placeholder } = filtersConfig;

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
      />
    );
  }

  return false;
}
