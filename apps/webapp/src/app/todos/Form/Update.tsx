import { Page } from '@nx-todo-frontend/design-system';
import { useTodo, useUpdateTodo } from '@nx-todo-frontend/query';
import Form from '.';
import { useParamsId } from '../../../hooks/useParamsId';

export default function Update() {
  const id = useParamsId();
  const mutation = useUpdateTodo();
  const { data: todo, error, isLoading } = useTodo(id);
  return (
    <Page title="Update Todo">
      <Form
        todo={todo}
        mutation={mutation}
        isLoading={isLoading}
        error={error}
      />
    </Page>
  );
}
