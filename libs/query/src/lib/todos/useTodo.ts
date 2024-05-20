import { useI18NContext } from '@nx-todo-frontend/i18n';
import { ClassTransformerGroup, Todo } from '@nx-todo-frontend/models';

import { instanceToInstance } from 'class-transformer';

import { useQuery } from '@tanstack/react-query';

import { useAPIContext } from '../APIProvider';

import { todoKeys } from './queries';

export function useTodo(id: number) {
  const api = useAPIContext();
  const { locale } = useI18NContext();
  return useQuery({
    queryKey: todoKeys.byId(id),
    queryFn: ({ signal }) => api.todo.getTodo(signal, id),
    enabled: !!id,
    select: (data): Todo =>
      instanceToInstance(new Todo(data, locale), {
        groups: [ClassTransformerGroup.MAIN],
      }),
  });
}
