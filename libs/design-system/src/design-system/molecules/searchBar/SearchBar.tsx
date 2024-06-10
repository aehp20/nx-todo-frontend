import { memo } from 'react';

import { Card } from '../cards';

import { FilterField } from './components/FilterField';
import { useSearchBar } from './hooks/useSearchBar';
import { FilterConfig, Query } from './types';

export * from './types';
export * from './utils/isOption';
export * from './utils/isString';

import '../../../styles.css';

export type SearchBarProps = {
  updateQuery: (query: Query) => void;
  filtersConfig: FilterConfig[];
};

const SearchBar = memo(function SearchBar(props: Readonly<SearchBarProps>) {
  const { updateQuery, filtersConfig } = props;

  const { query, handleChange } = useSearchBar(updateQuery, filtersConfig);

  return (
    <Card>
      <div className="flex flex-col md:flex-row gap-2">
        {filtersConfig
          .map((filtersConfig, index) => (
            <FilterField
              key={JSON.stringify(filtersConfig)}
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
