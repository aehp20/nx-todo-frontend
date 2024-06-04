import { Option } from '../dropdown/Dropdown';

export type QueryValueType =
  | string
  | number
  | readonly string[]
  | undefined
  | Option;

export type Query = Record<string, QueryValueType>;

export type FilterConfig = {
  name: string;
  type: 'search' | 'dropdown';
  label: string;
  value?: QueryValueType;
  options?: Option[];
  placeholder?: string;
  disabled?: boolean;
  noOptionsMessage?: string;
};
