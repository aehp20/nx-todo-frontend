import { Page } from '@nx-todo-frontend/design-system';

import { Actions } from './components/Actions';
import { useList } from './hooks/useList';
import ListSpec from './ListSpec';

// TODO: custom message error to work with the backend side to make error
export default function List() {
  const { data, error, isLoading, title } = useList();
  const actions = <Actions />;

  if (error) {
    // TODO
    // Throw an error to see the ErrorBoundary component
    // Update the ErrorBoundary component to display the error details
    console.log('TODO LIST error', error);
    // TODO inspect the error content in order to be used in the constructor
    throw new Error('An error has occurred in Todo List');
  }

  return (
    <Page title={title} actions={actions}>
      <ListSpec data={data} isLoading={isLoading} />
    </Page>
  );
}
