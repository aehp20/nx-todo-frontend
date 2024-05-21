import { Expose } from 'class-transformer';

export class PaginationMeta {
  @Expose()
  public hasNextPage: boolean;

  @Expose()
  public hasPreviousPage: boolean;

  @Expose()
  public pageSize: number;

  @Expose()
  public page: number;

  @Expose()
  public totalItems: number;

  @Expose()
  public totalPages: number;

  constructor(model: Partial<PaginationMeta> = {}) {
    Object.assign(this, model);
  }
}
