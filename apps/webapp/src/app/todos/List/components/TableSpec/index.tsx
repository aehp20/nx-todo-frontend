import {
  Confirmation,
  Table,
  TrashIcon,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { Todo, TodoList } from '@nx-todo-frontend/models';
import { useDeleteTodo } from '@nx-todo-frontend/query';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

import { useToast } from '../../../../../common/useToast';

import { Card } from './Card';
import { Dialog } from './Dialog';

export type TableSpecProps = {
  data?: TodoList;
};

const columnHelper = createColumnHelper<Todo>();

export default function TableSpec(props: TableSpecProps) {
  const { data } = props;

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
    columnHelper.accessor('isDoneStringFormat', {
      header: () => _('IS DONE?'),
      cell: (info) => _(info.getValue()),
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
    data: data?.items || [],
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

  const ComponentOnList = generateComponentOnList(handleDelete);

  return (
    <Table
      table={table}
      ComponentOnList={ComponentOnList}
      labelItemsPerPage={_('Items per page')}
    />
  );
}

function generateComponentOnList(handleDelete: (id: number) => void) {
  const ComponentOnList = (props: { row: Row<Todo> }) => {
    const { row } = props;
    const { id } = row.original;

    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Card todo={row.original} setIsOpen={setIsOpen} />
        <Dialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          id={id}
          handleDelete={handleDelete}
        />
      </>
    );
  };

  return ComponentOnList;
}
