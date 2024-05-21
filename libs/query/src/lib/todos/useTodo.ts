import { ClassTransformerGroup, Todo } from '@nx-todo-frontend/models';

import { plainToInstance } from 'class-transformer';

import { useQuery } from '@tanstack/react-query';

import { useAPIContext } from '../APIProvider';

import { todoKeys } from './queries';

export function useTodo(id: number) {
  const api = useAPIContext();
  return useQuery({
    queryKey: todoKeys.byId(id),
    queryFn: ({ signal }) => api.todo.getTodo(signal, id),
    enabled: !!id,
    select: (data): Todo => {
      return plainToInstance(Todo, data, {
        groups: [ClassTransformerGroup.MAIN],
      });
    },
  });
}
