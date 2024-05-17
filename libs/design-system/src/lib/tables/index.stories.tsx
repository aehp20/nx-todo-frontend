import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import { useState } from 'react';

import type { Meta } from '@storybook/react';
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

import { CardWithActions } from '../cards';
import TextDelete from '../texts';

import Table, { TableProps } from '.';
import { data as mockData } from './data';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Table',
};
export default meta;

type Person = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('id', {
    header: () => 'ID',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: () => 'NAME',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.email, {
    id: 'email',
    header: () => 'EMAIL',
    cell: (info) => <i>{info.getValue()}</i>,
  }),
  columnHelper.accessor('phone', {
    header: () => 'PHONE',
    cell: (info) => info.renderValue(),
  }),
];

const CustomTable = () => {
  const [data] = useState(() => [...mockData]);

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
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

  const actions = [
    { onClick: () => console.log('Rename'), content: 'Rename' },
    { onClick: () => console.log('Duplicate'), content: 'Duplicate' },
    {
      onClick: () => console.log('Delete'),
      content: <TextDelete>Delete</TextDelete>,
    },
  ];

  const ComponentOnList = (props: { row: Row<Person> }) => {
    const { row } = props;
    const { id, name, email, phone } = row.original;

    return (
      <CardWithActions actions={actions}>
        <div className="flex flex-col gap-2">
          <div className="font-bold">{name}</div>
          <div>
            {id} {email} {phone}
          </div>
        </div>
      </CardWithActions>
    );
  };

  return (
    <Table
      table={table}
      ComponentOnList={ComponentOnList}
      labelItemsPerPage="Items per page"
    />
  );
};

export const LightTable = {
  args: {},
  render: (props: TableProps<Person>) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <CustomTable />
      </ThemeProvider>
    );
  },
};

export const DarkTable = {
  args: {},
  render: (props: TableProps<Person>) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <CustomTable />
      </ThemeProvider>
    );
  },
};
