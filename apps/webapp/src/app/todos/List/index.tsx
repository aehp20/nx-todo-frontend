import {
  Button,
  Error,
  Page,
  PlusIcon,
  SpinnerIcon,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { useTodos } from '@nx-todo-frontend/query';

import { useNavigate } from 'react-router-dom';

import ListSpec from './ListSpec';

export default function List() {
  const { data, error, isLoading } = useTodos();

  const navigate = useNavigate();

  const { _ } = useI18NContext();

  if (isLoading) {
    return (
      <div className="flex justify-center my-2">
        <SpinnerIcon />
      </div>
    );
  }

  if (error) {
    return <Error error={error} className="m-2" />;
  }

  return (
    <Page
      title={_('Todo')}
      actions={
        <Button icon={<PlusIcon />} onClick={() => navigate('/create')}>
          {_('Add')}
        </Button>
      }
    >
      <ListSpec items={data} />
    </Page>
  );
}
