import { PaginationResponse, Todo } from '@nx-todo-frontend/models';

import SearchBarSpec from './components/SearchBarSpec';
import TableSpec from './components/TableSpec';

export type ListSpecProps = {
  data?: PaginationResponse<Todo>;
  isLoading: boolean;
};

export default function ListSpec(props: Readonly<ListSpecProps>) {
  const { data, isLoading } = props;

  return (
    <div className="flex flex-col gap-4">
      <SearchBarSpec />
      <TableSpec data={data} isLoading={isLoading} />
    </div>
  );
}
