import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type ListContextValue = {
  query?: Record<string, string>;
  setQuery: (query: Record<string, string>) => void;
};

const ListContext = createContext<ListContextValue>({} as ListContextValue);

type ListProviderProps = {
  children: ReactNode;
};

export default function ListProvider(props: ListProviderProps) {
  const { children } = props;

  const [query, setQuery] = useState<Record<string, string>>();

  const value = useMemo(() => {
    return {
      query,
      setQuery,
    };
  }, [query, setQuery]);

  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
}

export function useListContext() {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
