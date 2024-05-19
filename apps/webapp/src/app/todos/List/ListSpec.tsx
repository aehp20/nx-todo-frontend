import { TodoList } from '@nx-todo-frontend/models';

import SearchBarSpec from './components/SearchBarSpec';
import TableSpec from './components/TableSpec';

export type ListSpecProps = {
  data?: TodoList;
};

export default function ListSpec(props: ListSpecProps) {
  const { data } = props;

  return (
    <div className="flex flex-col gap-4">
      <SearchBarSpec />
      <TableSpec data={data} />
    </div>
  );
}
