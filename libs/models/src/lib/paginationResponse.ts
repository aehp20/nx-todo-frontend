import { Exclude, Type } from 'class-transformer';

import { PaginationMeta } from './paginationMeta';

type Class<T> = new (...args: any[]) => T;

export class PaginationResponse<T> {
  @Type((options) => {
    return (options?.newObject as PaginationResponse<T>).type;
  })
  public data: T[];

  @Type(() => PaginationMeta)
  public meta: PaginationMeta;

  @Exclude()
  private type: Class<T>;

  constructor(type: Class<T>) {
    this.type = type;
  }
}
