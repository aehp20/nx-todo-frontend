import { Todo } from '@nx-todo-frontend/types';

import { useMutation, useQueryClient } from 'react-query';

import { useAPIContext } from '../APIProvider';

import { todoKeys } from './queries';

export function useUpdateTodo() {
  const api = useAPIContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (todo: Todo) => api.todo.patch(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: todoKeys.all,
      });
    },
  });
}
