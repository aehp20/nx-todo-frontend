import { Option } from '@nx-todo-frontend/design-system';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type ListContextValue = {
  query?: Record<string, string>;
  setQuery: (query: Record<string, string>) => void;
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (itemsPerPage: number) => void;
  pageSizeOptions: Option[];
};

const ListContext = createContext<ListContextValue>({} as ListContextValue);

type ListProviderProps = {
  children: ReactNode;
};

const pageSizeOptions: Option[] = [
  { label: '5', value: '5' },
  { label: '10', value: '10' },
  { label: '15', value: '15' },
  { label: '20', value: '20' },
];

export default function ListProvider(props: Readonly<ListProviderProps>) {
  const { children } = props;

  const [query, setQuery] = useState<Record<string, string>>();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const value = useMemo(() => {
    return {
      query: {
        ...query,
        page: `${page}`,
        pageSize: `${pageSize}`,
        order: 'DESC',
      },
      setQuery,
      page,
      setPage,
      pageSize,
      setPageSize,
      pageSizeOptions,
    };
  }, [query, setQuery, page, setPage, pageSize, setPageSize]);

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

export function useListContext() {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('ListContext: Context must be used within a Provider');
  }
  return context;
}
