import {
  Button,
  Page,
  PlusIcon,
  Spinner,
  Error,
} from '@nx-todo-frontend/design-system';
import { useTodos } from '@nx-todo-frontend/query';
import { useNavigate } from 'react-router-dom';
import ListSpec from './ListSpec';

export default function List() {
  const { data: todos, error, isLoading } = useTodos();

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center my-2">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <Error error={error} className="m-2" />;
  }

  return (
    <Page title="Todo">
      <Button
        icon={<PlusIcon />}
        onClick={() => navigate('/create')}
        className="mb-2"
      >
        Add
      </Button>
      <ListSpec items={todos} />
    </Page>
  );
}
