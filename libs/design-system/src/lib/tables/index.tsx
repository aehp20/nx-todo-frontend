import classNames from 'classnames';

import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';
import { Table as ITable, Row, flexRender } from '@tanstack/react-table';

import { ItemsPerPage } from './itemsPerPage';
import Pagination from './pagination';

export type TableProps<T> = {
  table: ITable<T>;
  ComponentOnList: React.FunctionComponent<{ row: Row<T> }>;
  labelItemsPerPage: string;
};

export default function Table<T>(props: TableProps<T>) {
  const { table, ComponentOnList, labelItemsPerPage } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.table);

  const { BORDER_COLOR } = stylesPropertiesName;

  const borderColor = `border-${styles[BORDER_COLOR]}`;

  return (
    <div className="flex flex-col">
      <div className="md:hidden flex flex-col gap-2">
        {table.getRowModel().rows.map((row, index) => {
          return <ComponentOnList key={index} row={row} />;
        })}
      </div>
      <table
        className={classNames('hidden md:table my-auto border', borderColor)}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className={classNames('border-b font-semibold', borderColor)}
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 pr-2 py-4 font-medium text-left"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none flex min-w-[36px]'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: <span className="pl-2">↑</span>,
                        desc: <span className="pl-2">↓</span>,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={classNames('border-b', borderColor)}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col md:flex-row mt-2 gap-2">
        <ItemsPerPage
          pageSize={table.getState().pagination.pageSize}
          setPageSize={table.setPageSize}
          label={labelItemsPerPage}
        />
        <Pagination table={table} />
      </div>
    </div>
  );
}
