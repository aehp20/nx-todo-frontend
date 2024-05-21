import { TodoList } from '@nx-todo-frontend/models';

import SearchBarSpec from './components/SearchBarSpec';
import TableSpec from './components/TableSpec';

export type ListSpecProps = {
  data?: TodoList;
  isLoading: boolean;
};

export default function ListSpec(props: ListSpecProps) {
  const { data, isLoading } = props;

  return (
    <div className="flex flex-col gap-4">
      <SearchBarSpec />
      <TableSpec data={data} isLoading={isLoading} />
    </div>
  );
}
