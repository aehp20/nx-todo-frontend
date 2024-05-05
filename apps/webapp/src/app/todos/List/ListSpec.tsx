import { Link, useNavigate } from 'react-router-dom';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { Table, Trash } from '@nx-todo-frontend/design-system';
import { Todo } from '../types';
import { useState } from 'react';
import { useMutation } from 'react-query';

export type ListSpecProps = {
  items: Todo[];
};

const columnHelper = createColumnHelper<Todo>();

export default function ListSpec(props: ListSpecProps) {
  const { items } = props;

  const navigate = useNavigate();

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
        <Trash
          className="cursor-pointer"
          onClick={() => handleClick(info.row.original.id)}
        />
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

  const mutation = useMutation((id: number) =>
    fetch(`http://localhost:3000/api/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  );

  const handleClick = (id: number) => {
    const result = window.confirm('Do you really want to delete this todo?');
    if (result) {
      mutation.mutate(id, {
        onSuccess: (data) => {
          // ADD A TOAST HERE
          navigate('/');
        },
      });
    }
  };

  return <Table table={table} />;
}
