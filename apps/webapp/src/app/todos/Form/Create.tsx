import {
  Error,
  NavArrowLeftIcon,
  Page,
  SpinnerIcon,
  Title,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { useCreateTodo } from '@nx-todo-frontend/query';
import { TodoCreate } from '@nx-todo-frontend/types';

import { useNavigate } from 'react-router-dom';

import { useToast } from '../../../common/useToast';

import Form from '.';

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

  const backLink = {
    to: '/',
    content: (
      <div className="flex items-center">
        <NavArrowLeftIcon /> <Title>{_('Back to Home page')}</Title>
      </div>
    ),
  };

  return (
    <Page title={_('Create Todo')} backLink={backLink}>
      <Form onSubmit={submitData} />
    </Page>
  );
}
