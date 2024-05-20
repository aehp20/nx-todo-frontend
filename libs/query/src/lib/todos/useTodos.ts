import { useI18NContext } from '@nx-todo-frontend/i18n';
import { Todo, TodoList } from '@nx-todo-frontend/models';

import { useQuery } from '@tanstack/react-query';

import { useAPIContext } from '../APIProvider';

import { todoKeys } from './queries';

export function useTodos(params?: Record<string, string>) {
  const api = useAPIContext();
  const { locale } = useI18NContext();
  return useQuery({
    queryKey: todoKeys.byParams(params),
    queryFn: ({ signal }) => api.todo.get(signal, params),
    enabled: !!params,
    select: (data): TodoList => {
      const todoList: TodoList = {
        items: data.items.map((item) => new Todo(item, locale)),
        allCount: data.allCount,
        filteredCount: data.filteredCount,
      };
      const instanceTodoList = new TodoList(todoList);
      return instanceTodoList;
    },
  });
}
