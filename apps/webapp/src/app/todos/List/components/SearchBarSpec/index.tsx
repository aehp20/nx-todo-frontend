import {
  FilterConfig,
  Query,
  SearchBar,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

export default function SearchBarSpec() {
  const { _ } = useI18NContext();

  const filtersConfig: FilterConfig[] = [
    {
      name: 'name',
      type: 'search',
      label: _('Search by name'),
      value: undefined,
      placeholder: _('Enter a name'),
    },
    {
      name: 'status',
      type: 'dropdown',
      label: _('Search by status'),
      options: [
        { label: _('Done'), value: 'done' },
        { label: _('To do'), value: 'todo' },
      ],
      value: undefined,
      placeholder: _('Select a launch type'),
    },
  ];

  const updateQuery = (query: Query) => {
    console.log('query', query);
  };

  return <SearchBar updateQuery={updateQuery} filtersConfig={filtersConfig} />;
}
