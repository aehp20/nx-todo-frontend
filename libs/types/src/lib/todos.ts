export type Todo = {
  id: number;
  name: string;
  isDone: boolean;
};

export type TodoCreate = {
  name: string;
  isDone: boolean;
};

export type TodoUpdate = TodoCreate & {
  id: number;
};
