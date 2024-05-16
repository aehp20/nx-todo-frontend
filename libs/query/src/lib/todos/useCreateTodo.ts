import { TodoCreate } from '@nx-todo-frontend/types';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAPIContext } from '../APIProvider';

import { todoKeys } from './queries';

export function useCreateTodo() {
  const api = useAPIContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todo: TodoCreate) => api.todo.post(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: todoKeys.all,
      });
    },
  });
}
