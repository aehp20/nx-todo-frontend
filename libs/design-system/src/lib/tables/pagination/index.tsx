import { PaginationMeta } from '@nx-todo-frontend/models';

import { Button } from '../../buttons';
import {
  FastArrowLeftIcon,
  FastArrowRightIcon,
  NavArrowLeftIcon,
  NavArrowRightIcon,
} from '../../icons';
import Input from '../../inputs';

export type PaginationProps<T> = {
  paginationMeta?: PaginationMeta;
  goToPage: (page: number) => void;
};

export default function Pagination<T>(props: PaginationProps<T>) {
  const { paginationMeta, goToPage } = props;

  const isDisabled = !paginationMeta;

  const goToFirstPage = () => {
    goToPage(1);
  };
  const goToPreviousPage = () => {
    if (paginationMeta) {
      goToPage(paginationMeta.page - 1);
    }
  };
  const goToNextPage = () => {
    if (paginationMeta) {
      goToPage(paginationMeta.page + 1);
    }
  };
  const goToLastPage = () => {
    if (paginationMeta) {
      goToPage(paginationMeta.totalPages);
    }
  };

  return (
    <div className="flex w-full items-center justify-center md:justify-end gap-2">
      <div className="flex gap-2">
        <Button
          icon={<FastArrowLeftIcon />}
          onClick={goToFirstPage}
          disabled={isDisabled || !paginationMeta.hasPreviousPage}
        />
        <Button
          icon={<NavArrowLeftIcon />}
          onClick={goToPreviousPage}
          disabled={isDisabled || !paginationMeta.hasPreviousPage}
        />
        <Input
          min={1}
          max={paginationMeta?.totalPages}
          type="number"
          value={paginationMeta?.page || 1}
          onChange={(event) => {
            const page = event.target.value ? Number(event.target.value) : 1;
            goToPage(page);
          }}
          disabled={isDisabled}
          className="w-[60px]"
        />
        <Button
          icon={<NavArrowRightIcon />}
          onClick={goToNextPage}
          disabled={isDisabled || !paginationMeta.hasNextPage}
        />
        <Button
          icon={<FastArrowRightIcon />}
          onClick={goToLastPage}
          disabled={isDisabled || !paginationMeta.hasNextPage}
        />
      </div>
    </div>
  );
}
