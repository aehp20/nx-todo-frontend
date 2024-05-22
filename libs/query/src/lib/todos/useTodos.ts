import { PaginationResponse, Todo } from '@nx-todo-frontend/models';

import { plainToClassFromExist } from 'class-transformer';

import { useQuery } from '@tanstack/react-query';

import { useAPIContext } from '../APIProvider';

import { todoKeys } from './queries';

export function useTodos(params?: Record<string, string>) {
  const api = useAPIContext();
  return useQuery({
    queryKey: todoKeys.byParams(params),
    queryFn: ({ signal }) => api.todo.get(signal, params),
    enabled: !!params,
    select: (data): PaginationResponse<Todo> => {
      const paginationResponse = plainToClassFromExist(
        new PaginationResponse<Todo>(Todo),
        data,
      );
      return paginationResponse;
    },
  });
}
