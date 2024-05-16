import { memo } from 'react';

import { Card } from '../cards';

import { FilterField } from './components/FilterField';
import { useSearchBar } from './hooks/useSearchBar';
import { FilterConfig, Query } from './types';

export * from './types';
export * from './utils/isOption';

export type SearchBarProps = {
  updateQuery: (query: Query) => void;
  filtersConfig: FilterConfig[];
};

const SearchBar = memo(function SearchBar(props: SearchBarProps) {
  const { updateQuery, filtersConfig } = props;

  const { query, handleChange } = useSearchBar(updateQuery, filtersConfig);

  return (
    <Card>
      <div className="flex gap-2">
        {filtersConfig
          .map((filtersConfig, index) => (
            <FilterField
              key={index}
              filtersConfig={filtersConfig}
              handleChange={handleChange}
              query={query}
            />
          ))
          .filter(Boolean)}
      </div>
    </Card>
  );
});

export { SearchBar };
