import { Todo } from '@nx-todo-frontend/models';

import SearchBarSpec from './components/SearchBarSpec';
import TableSpec from './components/TableSpec';

export type ListSpecProps = {
  items?: Todo[];
};

export default function ListSpec(props: ListSpecProps) {
  const { items = [] } = props;

  return (
    <div className="flex flex-col gap-4">
      <SearchBarSpec />
      <TableSpec items={items} />;
    </div>
  );
}
