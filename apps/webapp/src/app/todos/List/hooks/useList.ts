import { todoKeys, useTodos } from '@nx-todo-frontend/query';

import { useEffect } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { useListContext } from '../ListProvider';

import { useTitle } from './useTitle';

export function useList() {
  const { query, page, pageSize } = useListContext();

  const queryClient = useQueryClient();

  const { data, error, isLoading } = useTodos({
    ...query,
    page: `${page}`,
    pageSize: `${pageSize}`,
  });
  const title = useTitle(data);

  useEffect(() => {
    return () => {
      queryClient.cancelQueries({ queryKey: todoKeys.byParams(query) });
    };
  }, []);

  return {
    data,
    error,
    isLoading,
    title,
  };
}
