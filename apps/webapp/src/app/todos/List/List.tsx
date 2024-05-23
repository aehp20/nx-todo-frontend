import { Page } from '@nx-todo-frontend/design-system';

import { throwError } from '../../../common/throwError';

import ListSpec from './ListSpec';
import { Actions } from './components/Actions';
import { useList } from './hooks/useList';

export default function List() {
  const { data, error, isLoading, title } = useList();
  const actions = <Actions />;

  if (error) {
    throwError(error);
  }

  return (
    <Page title={title} actions={actions}>
      <ListSpec data={data} isLoading={isLoading} />
    </Page>
  );
}
