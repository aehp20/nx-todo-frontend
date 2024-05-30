import { useToast } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { Todo } from '@nx-todo-frontend/models';
import { useCreateTodo } from '@nx-todo-frontend/query';

import { useNavigate } from 'react-router-dom';

export function useCreate() {
  const navigate = useNavigate();

  const { _ } = useI18NContext();

  const { successToast } = useToast();

  const mutation = useCreateTodo();

  const submitData = (todo: Todo) => {
    mutation.mutate(todo, {
      onSuccess: ({ ok }) => {
        if (ok) {
          navigate('/todos');
          successToast(_('The create action has been completed successfully.'));
        }
      },
    });
  };

  return {
    submitData,
    isSubmitting: mutation.isPending,
    errorOnSubmit: mutation.error,
  };
}
