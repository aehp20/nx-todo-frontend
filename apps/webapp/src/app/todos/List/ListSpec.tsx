import {
  SortingState,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Todo } from '@nx-todo-frontend/api';
import {
  Confirmation,
  Table,
  TrashIcon,
} from '@nx-todo-frontend/design-system';
import { useDeleteTodo } from '@nx-todo-frontend/query';

export type ListSpecProps = {
  items?: Todo[];
};

const columnHelper = createColumnHelper<Todo>();

export default function ListSpec(props: ListSpecProps) {
  const { items = [] } = props;

  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = [
    columnHelper.accessor('id', {
      header: () => 'ID',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
      header: () => 'NAME',
      cell: (info) => (
        <Link to={`/update/${info.row.original.id}`}>{info.getValue()}</Link>
      ),
    }),
    columnHelper.accessor('isDone', {
      header: () => 'IS DONE?',
      cell: (info) => (info.getValue() ? 'Yes' : 'No'),
    }),
    columnHelper.accessor('isDone', {
      id: 'action',
      header: () => 'Action',
      cell: (info) => (
        <Confirmation
          title="Delete Todo?"
          content="Are you sure you want to delete this todo?"
          onConfirm={() => handleDelete(info.row.original.id)}
          labelNoButton="No"
          labelYesButton="Yes"
        >
          {({ displayConfirmation }) => (
            <TrashIcon
              className="cursor-pointer"
              onClick={() => displayConfirmation(true)}
            />
          )}
        </Confirmation>
      ),
    }),
  ];

  const table = useReactTable({
    data: items,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const mutation = useDeleteTodo();

  const handleDelete = (id: number) => {
    mutation.mutate(id, {
      onSuccess: (data) => {
        // ADD A TOAST HERE
        console.log('DELETED', data);
      },
    });
  };

  return <Table table={table} />;
}
