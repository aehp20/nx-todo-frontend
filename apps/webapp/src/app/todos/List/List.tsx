import { Error, Page, SpinnerIcon } from '@nx-todo-frontend/design-system';
import { useTodos } from '@nx-todo-frontend/query';

import { useActions } from './hooks/useActions';
import { useTitle } from './hooks/useTitle';
import { useListContext } from './ListProvider';
import ListSpec from './ListSpec';

export default function List() {
  const { query } = useListContext();

  const { data, error, isLoading } = useTodos(query);
  const title = useTitle(data);
  const actions = useActions();

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
    <Page title={title} actions={actions}>
      <ListSpec data={data} />
    </Page>
  );
}
