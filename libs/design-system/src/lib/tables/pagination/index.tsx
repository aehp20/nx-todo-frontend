import { Table } from '@tanstack/react-table';

import { Button } from '../../buttons';
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

  return (
    <div className="flex w-full items-center justify-center md:justify-end gap-2">
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
