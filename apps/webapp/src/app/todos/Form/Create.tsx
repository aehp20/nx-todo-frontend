import { Page } from '@nx-todo-frontend/design-system';
import { useCreateTodo } from '@nx-todo-frontend/query';
import Form from '.';

export default function Create() {
  const mutation = useCreateTodo();
  return (
    <Page title="Create Todo">
      <Form mutation={mutation} />
    </Page>
  );
}
