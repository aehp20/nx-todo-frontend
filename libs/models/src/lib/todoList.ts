import { Expose, Type } from 'class-transformer';

import { Todo } from './todo';

export class TodoList {
  @Expose()
  @Type(() => Todo)
  public items: Todo[];

  @Expose()
  public allCount: number;

  @Expose()
  public filteredCount: number;

  constructor(model: Partial<TodoList> = {}) {
    Object.assign(this, model);
  }
}
