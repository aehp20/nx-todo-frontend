import { Option } from '../../dropdown';
import { QueryValueType } from '../types';

export function isOption(value: QueryValueType): value is Option {
  if (value) {
    return (
      (value as Option).label !== undefined &&
      (value as Option).value !== undefined
    );
  }
  return false;
}
