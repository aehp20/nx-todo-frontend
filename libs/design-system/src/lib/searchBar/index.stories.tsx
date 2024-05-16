import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import { FilterConfig, Query } from './types';
import { SearchBar, SearchBarProps } from '.';

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: 'SearchBar',
};
export default meta;

const filtersConfig: FilterConfig[] = [
  {
    name: 'name',
    type: 'search',
    label: 'Name',
    value: undefined,
    placeholder: 'Enter a name',
  },
  {
    name: 'launchType',
    type: 'dropdown',
    label: 'Launch type',
    options: [
      { label: 'Automatic', value: 'repeatedly' },
      { label: 'Manual', value: 'manually' },
    ],
    value: undefined,
    placeholder: 'Select a launch type',
  },
  {
    name: 'category',
    type: 'dropdown',
    label: 'Platforms',
    options: [
      { label: 'LinkedIn', value: 'linkedin' },
      { label: 'Sales Navigator', value: 'salesNavigator' },
      { label: 'Google', value: 'mail' },
      { label: 'Instagram', value: 'instagram' },
      { label: 'Facebook', value: 'facebook' },
      { label: 'Twitter', value: 'twitter' },
      { label: 'Workflow', value: 'workflow' },
      { label: 'All Solutions', value: 'all' },
    ],
    value: undefined,
    placeholder: 'Select a platform',
  },
];

const App = () => {
  const updateQuery = (query: Query) => {
    console.log('query', query);
  };

  return <SearchBar updateQuery={updateQuery} filtersConfig={filtersConfig} />;
};

export const LightSearchBar = {
  args: {},
  render: (props: SearchBarProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <App />
      </ThemeProvider>
    );
  },
};

export const DarkSearchBar = {
  args: {},
  render: (props: SearchBarProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <App />
      </ThemeProvider>
    );
  },
};
