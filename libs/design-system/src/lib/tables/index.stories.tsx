import type { Meta } from '@storybook/react';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import { data as mockData } from './data';
import Table, { TableProps } from '.';
import { useState } from 'react';

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
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.email, {
    id: 'email',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor('phone', {
    header: () => 'Phone',
    cell: (info) => info.renderValue(),
  }),
];

const CustomTable = () => {
  const [data] = useState(() => [...mockData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table table={table} />;
};

export const LightTable = {
  args: {},
  render: (props: TableProps<Person>) => {
    return (
      <ThemeProvider theme={themes.light}>
        <CustomTable />
      </ThemeProvider>
    );
  },
};

export const DarkTable = {
  args: {},
  render: (props: TableProps<Person>) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <CustomTable />
      </ThemeProvider>
    );
  },
};
