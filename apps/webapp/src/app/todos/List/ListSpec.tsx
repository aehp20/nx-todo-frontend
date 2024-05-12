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

import {
  Confirmation,
  Table,
  TrashIcon,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { useDeleteTodo } from '@nx-todo-frontend/query';
import { Todo } from '@nx-todo-frontend/types';

import { useToast } from '../../../common/useToast';

export type ListSpecProps = {
  items?: Todo[];
};

const columnHelper = createColumnHelper<Todo>();

export default function ListSpec(props: ListSpecProps) {
  const { items = [] } = props;

  const [sorting, setSorting] = useState<SortingState>([]);

  const { _ } = useI18NContext();

  const { successToast } = useToast();

  const columns = [
    columnHelper.accessor('id', {
      header: () => _('ID'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('name', {
      header: () => _('NAME'),
      cell: (info) => (
        <Link to={`/update/${info.row.original.id}`}>{info.getValue()}</Link>
      ),
    }),
    columnHelper.accessor('isDone', {
      header: () => _('IS DONE?'),
      cell: (info) => (info.getValue() ? 'Yes' : 'No'),
    }),
    columnHelper.accessor('isDone', {
      id: 'action',
      header: () => _('ACTION'),
      cell: (info) => (
        <Confirmation
          title={_('Delete Todo?')}
          content={_('Are you sure you want to delete this todo?')}
          onConfirm={() => handleDelete(info.row.original.id)}
          labelNoButton={_('No')}
          labelYesButton={_('Yes')}
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
      onSuccess: (_data) => {
        successToast(_('The delete action has been completed successfully.'));
      },
    });
  };

  return <Table table={table} labelItemsPerPage={_('Items per page')} />;
}
