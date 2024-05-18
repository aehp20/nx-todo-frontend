import { Todo } from '@nx-todo-frontend/models';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAPIContext } from '../APIProvider';

import { todoKeys } from './queries';

export function useCreateTodo() {
  const api = useAPIContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todo: Todo) => api.todo.post(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: todoKeys.all,
      });
    },
  });
}
