import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import Card, { CardProps } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
};
export default meta;

export const LightCard = {
  args: {},
  render: (props: CardProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
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
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <Card>Hello</Card>
        </div>
      </ThemeProvider>
    );
  },
};
