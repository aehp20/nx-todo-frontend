import { useI18NContext } from '@nx-todo-frontend/i18n';
import { ClassTransformerGroup, Todo } from '@nx-todo-frontend/models';

import { instanceToInstance } from 'class-transformer';

import { useQuery } from '@tanstack/react-query';

import { useAPIContext } from '../APIProvider';

import { todoKeys } from './queries';

export function useTodos() {
  const api = useAPIContext();
  const { locale } = useI18NContext();
  return useQuery({
    queryKey: todoKeys.all,
    queryFn: () => api.todo.get(),
    select: (data): Todo[] =>
      instanceToInstance(
        data.map((item) => new Todo(item, locale)),
        { groups: [ClassTransformerGroup.MAIN] },
      ),
  });
}
