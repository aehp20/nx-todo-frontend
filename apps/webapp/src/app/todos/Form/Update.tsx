import {
  BackLink,
  Error,
  Page,
  SpinnerIcon,
} from '@nx-todo-frontend/design-system';
import { useParamsId } from '@nx-todo-frontend/hooks';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { Todo } from '@nx-todo-frontend/models';
import { useTodo, useUpdateTodo } from '@nx-todo-frontend/query';

import { useNavigate } from 'react-router-dom';

import { useToast } from '../../../common/useToast';

import Form from '.';

export default function Update() {
  const navigate = useNavigate();

  const id = useParamsId();

  const { _ } = useI18NContext();

  const { successToast } = useToast();

  const mutation = useUpdateTodo();

  const { data: todo, error, isLoading } = useTodo(id);

  if (isLoading) {
    return (
      <div className="flex justify-center my-2">
        <SpinnerIcon /> {_('Fetching todo...')}
      </div>
    );
  }

  if (error) {
    return <Error error={error.message} className="m-2" />;
  }

  if (mutation.isLoading) {
    return (
      <div className="flex justify-center my-2">
        <SpinnerIcon /> {_('Saving...')}
      </div>
    );
  }

  if (mutation.isError) {
    return <Error error={mutation.error.message} className="m-2" />;
  }

  const submitData = (todo: Todo) => {
    todo.id = id;
    mutation.mutate(todo, {
      onSuccess: ({ ok }) => {
        if (ok) {
          navigate('/todos');
          successToast(_('The update action has been completed successfully.'));
        }
      },
    });
  };

  return (
    <Page
      title={_('Update Todo')}
      backLink={<BackLink to="/todos" content={_('Back to Home page')} />}
    >
      <Form todo={todo} onSubmit={submitData} />
    </Page>
  );
}
