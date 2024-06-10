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

import TextDelete from '../../atoms/texts/TextDelete';
import { CardWithActions } from '../cards';

import { data as mockData } from './data';
import Table, { TableProps } from './Table';

const meta: Meta<typeof Table> = {
  component: Table,
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

const ComponentOnList = (props: { row: Row<Person> }) => {
  const { row } = props;
  const { id, name, email, phone } = row.original;

  const actions = [
    { onClick: () => console.log('Rename'), content: 'Rename' },
    { onClick: () => console.log('Duplicate'), content: 'Duplicate' },
    {
      onClick: () => console.log('Delete'),
      content: <TextDelete>Delete</TextDelete>,
    },
  ];

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

  return (
    <Table
      table={table}
      ComponentOnList={ComponentOnList}
      labelItemsPerPage="Items per page"
      paginationMeta={{
        hasNextPage: true,
        hasPreviousPage: false,
        page: 1,
        pageSize: 5,
        totalItems: 35,
        totalPages: 7,
      }}
      pageSize={5}
      pageSizeOptions={[
        { label: '5', value: '5' },
        { label: '10', value: '10' },
      ]}
      setPageSize={() => console.log('setPageSize')}
      goToPage={() => console.log('setPageSize')}
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
