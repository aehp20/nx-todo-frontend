import { Table } from '@tanstack/react-table';
import Button from '../../buttons';
import { Dropdown, Option } from '../../dropdown';
import {
  FastArrowLeftIcon,
  FastArrowRightIcon,
  NavArrowLeftIcon,
  NavArrowRightIcon,
} from '../../icons';
import Input from '../../inputs';

export type PaginationProps<T> = {
  table: Table<T>;
};

export default function Pagination<T>(props: PaginationProps<T>) {
  const { table } = props;

  const pageSize = table.getState().pagination.pageSize;
  const value = { label: pageSize, value: pageSize };
  const pageSizeOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
  ];

  const handleChange = (option: Option) => {
    if (option) {
      table.setPageSize(Number(option.value));
    }
  };

  return (
    <div className="flex w-full mt-4 items-center gap-2">
      <div className="flex items-center sm:mr-auto sm:mb-0 mb-2">
        <span className="mr-2">Items per page</span>
        <Dropdown
          value={value}
          options={pageSizeOptions}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-2">
        <Button
          icon={<FastArrowLeftIcon />}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        />
        <Button
          icon={<NavArrowLeftIcon />}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        />
        <Input
          min={1}
          max={table.getPageCount()}
          type="number"
          value={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
        />
        <Button
          icon={<NavArrowRightIcon />}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        />
        <Button
          icon={<FastArrowRightIcon />}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        />
      </div>
    </div>
  );
}
