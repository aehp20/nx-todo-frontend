import { Expose } from 'class-transformer';
import dayjs from 'dayjs';

export class Todo {
  @Expose()
  public id?: number;

  @Expose()
  public name: string;

  @Expose()
  public isDone?: boolean;

  @Expose()
  public createdAt?: string;

  @Expose()
  public updatedAt?: string;

  @Expose()
  public get isDoneStringFormat(): string {
    return this.isDone ? 'Yes' : 'No';
  }

  @Expose()
  public get createdAtDateFormat(): string {
    return dayjs(this.createdAt).format('L');
  }

  @Expose()
  public get createdAtDateTimeFormat(): string {
    return dayjs(this.createdAt).format('L LTS');
  }

  @Expose()
  public get updatedAtDateFormat(): string {
    return dayjs(this.updatedAt).format('L');
  }

  @Expose()
  public get updatedAtDateTimeFormat(): string {
    return dayjs(this.updatedAt).format('L LTS');
  }

  constructor(model: Partial<Todo> = {}) {
    Object.assign(this, model);
  }
}
