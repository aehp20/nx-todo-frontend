import {
  FilterConfig,
  isOption,
  isString,
  Option,
  Query,
  SearchBar,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import { useListContext } from '../../ListProvider';

export default function SearchBarSpec() {
  const { query, setQuery } = useListContext();

  const { _ } = useI18NContext();

  const options: Option[] = [
    { label: _('Done'), value: 'true' },
    { label: _('To do'), value: 'false' },
  ];
  const selectedOption = options.find(
    (option) => option.value === query?.isDone,
  );

  const filtersConfig: FilterConfig[] = [
    {
      name: 'name',
      type: 'search',
      label: _('Search by name'),
      value: query?.name,
      placeholder: _('Enter a name'),
      autoFocus: true,
    },
    {
      name: 'isDone',
      type: 'dropdown',
      label: _('Search by status'),
      options,
      value: selectedOption,
      placeholder: _('Select a status'),
    },
  ];

  const updateQuery = (query: Query) => {
    const data: Record<string, string> = {};
    if (isString(query.name)) {
      data['name'] = query.name;
    }
    if (isOption(query.isDone)) {
      data['isDone'] = query.isDone.value;
    }
    setQuery(data);
  };

  return <SearchBar updateQuery={updateQuery} filtersConfig={filtersConfig} />;
}
