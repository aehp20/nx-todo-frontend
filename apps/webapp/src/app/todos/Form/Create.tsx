import { useNavigate } from 'react-router-dom';

import { Error, Page, SpinnerIcon } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { useCreateTodo } from '@nx-todo-frontend/query';
import { TodoCreate } from '@nx-todo-frontend/types';

import Form from '.';
import { useToast } from '../../../common/useToast';

export default function Create() {
  const navigate = useNavigate();

  const { _ } = useI18NContext();

  const { successToast } = useToast();

  const mutation = useCreateTodo();

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

  const submitData = (todo: TodoCreate) => {
    mutation.mutate(
      { name: todo.name, isDone: todo.isDone },
      {
        onSuccess: (data) => {
          navigate('/');
          successToast(_('The create action has been completed successfully.'));
        },
      },
    );
  };

  return (
    <Page title={_('Create Todo')}>
      <Form onSubmit={submitData} />
    </Page>
  );
}
