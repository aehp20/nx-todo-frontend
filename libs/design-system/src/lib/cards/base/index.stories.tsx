import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import Card, { CardProps } from '.';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card/Base',
};
export default meta;

export const LightCard = {
  args: {},
  render: (props: CardProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className="flex flex-col gap-1">
          <Card>Hello</Card>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkCard = {
  args: {},
  render: (props: CardProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className="flex flex-col gap-1">
          <Card>Hello</Card>
        </div>
      </ThemeProvider>
    );
  },
};
