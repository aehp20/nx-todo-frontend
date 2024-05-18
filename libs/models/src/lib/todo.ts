import { Expose } from 'class-transformer';
import dayjs from 'dayjs';

export enum ClassTransformerGroup {
  MAIN = 'main',
  CREATE = 'create',
  UPDATE = 'update',
}

export class Todo {
  @Expose({
    groups: [ClassTransformerGroup.MAIN, ClassTransformerGroup.UPDATE],
  })
  public id: number;

  @Expose({
    groups: [
      ClassTransformerGroup.MAIN,
      ClassTransformerGroup.UPDATE,
      ClassTransformerGroup.CREATE,
    ],
  })
  public name: string;

  @Expose({
    groups: [
      ClassTransformerGroup.MAIN,
      ClassTransformerGroup.UPDATE,
      ClassTransformerGroup.CREATE,
    ],
  })
  public isDone: boolean;

  @Expose({ groups: [ClassTransformerGroup.MAIN] })
  public createdAt: string;

  @Expose({ groups: [ClassTransformerGroup.MAIN] })
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
  public get updatedAtDateFormat(): string {
    return dayjs(this.updatedAt).format('L');
  }

  constructor(model: Partial<Todo> = {}, locale: string) {
    dayjs.locale(locale);
    Object.assign(this, model);
  }
}
