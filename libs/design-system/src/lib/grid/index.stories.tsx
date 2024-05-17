import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import Grid, { GridProps } from '.';

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Grid',
};
export default meta;

type Item = {
  id: string;
  value: number;
};

const items: Item[] = [
  { id: '1', value: 1 },
  { id: '2', value: 2 },
  { id: '3', value: 3 },
  { id: '4', value: 4 },
  { id: '5', value: 5 },
  { id: '6', value: 6 },
];

type MyComponentProps = {
  item: Item;
};

const MyComponent = (props: MyComponentProps) => {
  const { item } = props;
  return <div>{item.value}</div>;
};

export const LightGrid = {
  args: {},
  render: (props: GridProps<Item>) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <Grid nbColumns={2} gap={4} items={items} Component={MyComponent} />
      </ThemeProvider>
    );
  },
};

export const DarkGrid = {
  args: {},
  render: (props: GridProps<Item>) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <Grid nbColumns={2} gap={4} items={items} Component={MyComponent} />
      </ThemeProvider>
    );
  },
};
