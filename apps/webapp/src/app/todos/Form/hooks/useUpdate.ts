import { useParamsId } from '@nx-todo-frontend/hooks';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { Todo } from '@nx-todo-frontend/models';
import { todoKeys, useTodo, useUpdateTodo } from '@nx-todo-frontend/query';

import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import { useToast } from '../../../../common/useToast';

export function useUpdate() {
  const navigate = useNavigate();

  const id = useParamsId();

  const queryClient = useQueryClient();

  const { _ } = useI18NContext();

  const { successToast } = useToast();

  const mutation = useUpdateTodo();

  const { data: todo, error: errorOnLoad, isLoading } = useTodo(id);

  useEffect(() => {
    return () => {
      queryClient.cancelQueries({ queryKey: todoKeys.byId(id) });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitData = useCallback((todo: Todo) => {
    todo.id = id;
    mutation.mutate(todo, {
      onSuccess: ({ ok }) => {
        if (ok) {
          queryClient.invalidateQueries({
            queryKey: todoKeys.all,
          });
          queryClient.invalidateQueries({
            queryKey: todoKeys.byId(id),
          });
          navigate('/todos');
          successToast(_('The update action has been completed successfully.'));
        }
      },
    });
  }, []);

  return {
    todo,
    isLoading,
    errorOnLoad,
    isSubmitting: mutation.isPending,
    errorOnSubmit: mutation.error,
    submitData,
  };
}
