import { Expose } from 'class-transformer';
import dayjs from 'dayjs';

export enum ClassTransformerGroup {
  MAIN = 'main',
  CREATE = 'create',
  UPDATE = 'update',
}

export class Todo {
  @Expose({
    name: 'id',
    groups: [ClassTransformerGroup.MAIN, ClassTransformerGroup.UPDATE],
  })
  public id: number;

  @Expose({
    name: 'name',
    groups: [
      ClassTransformerGroup.MAIN,
      ClassTransformerGroup.UPDATE,
      ClassTransformerGroup.CREATE,
    ],
  })
  public name: string;

  @Expose({
    name: 'is_done',
    groups: [
      ClassTransformerGroup.MAIN,
      ClassTransformerGroup.UPDATE,
      ClassTransformerGroup.CREATE,
    ],
  })
  public isDone: boolean;

  @Expose({ name: 'created_at', groups: [ClassTransformerGroup.MAIN] })
  public createdAt: string;

  @Expose({ name: 'updated_at', groups: [ClassTransformerGroup.MAIN] })
  public updatedAt: string;

  @Expose({ groups: [ClassTransformerGroup.MAIN] })
  public get isDoneStringFormat(): string {
    return this.isDone ? 'Yes' : 'No';
  }

  @Expose({ groups: [ClassTransformerGroup.MAIN] })
  public get createdAtDateFormat(): string {
    return dayjs(this.createdAt).format('L');
  }

  @Expose({ groups: [ClassTransformerGroup.MAIN] })
  public get createdAtDateTimeFormat(): string {
    return dayjs(this.createdAt).format('L LTS');
  }

  @Expose({ groups: [ClassTransformerGroup.MAIN] })
  public get updatedAtDateFormat(): string {
    return dayjs(this.updatedAt).format('L');
  }

  @Expose({ groups: [ClassTransformerGroup.MAIN] })
  public get updatedAtDateTimeFormat(): string {
    return dayjs(this.updatedAt).format('L LTS');
  }

  constructor(model: Partial<Todo> = {}) {
    Object.assign(this, model);
  }
}
