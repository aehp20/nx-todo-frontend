import { QueryValueType } from '../types';

export function isString(value: QueryValueType): value is string {
  if (value) {
    return typeof value === 'string';
  }
  return false;
}
