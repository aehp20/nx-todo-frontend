import { useNavigate } from 'react-router-dom';

import { Error, Page, SpinnerIcon } from '@nx-todo-frontend/design-system';
import { useParamsId } from '@nx-todo-frontend/hooks';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { useTodo, useUpdateTodo } from '@nx-todo-frontend/query';
import { TodoCreate } from '@nx-todo-frontend/types';

import Form from '.';

export default function Update() {
  const navigate = useNavigate();

  const id = useParamsId();

  const { _ } = useI18NContext();

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
        <SpinnerIcon /> {_('Submitting...')}
      </div>
    );
  }

  if (mutation.isError) {
    return <Error error={mutation.error.message} className="m-2" />;
  }

  const submitData = (todo: TodoCreate) => {
    mutation.mutate(
      { id, name: todo.name, isDone: todo.isDone },
      {
        onSuccess: (data) => {
          console.log('onSuccess data:', data);
          // ADD A TOAST HERE
          navigate('/');
        },
      },
    );
  };

  return (
    <Page title={_('Update Todo')}>
      <Form todo={todo} onSubmit={submitData} />
    </Page>
  );
}
