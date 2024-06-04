import { useEffect, useMemo, useState } from 'react';

import { FilterConfig, Query, QueryValueType } from '../types';

export function useSearchBar(
  updateQuery: (query: Query) => void,
  filtersConfig: FilterConfig[],
) {
  const initialQuery = useMemo(() => {
    const query: Query = {};
    filtersConfig.forEach((filterConfig) => {
      const { name, value } = filterConfig;
      if (value) {
        query[name] = value;
      }
    });
    return query;
  }, [filtersConfig]);

  const [query, setQuery] = useState<Query>(initialQuery);

  const handleChange = (name: string, value: QueryValueType) => {
    if (value) {
      setQuery((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setQuery((prev) => {
        const copyQuery = { ...prev };
        delete copyQuery[name];
        return { ...copyQuery };
      });
    }
  };

  useEffect(() => {
    if (query) {
      updateQuery(query);
    }
  }, [query]);

  return {
    query,
    handleChange,
  };
}
