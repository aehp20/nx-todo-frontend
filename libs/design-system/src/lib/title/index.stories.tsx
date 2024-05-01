import type { Meta } from '@storybook/react';
import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import Title, { TitleProps } from '.';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Title',
};
export default meta;

export const LightTitle = {
  args: {},
  render: (props: TitleProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className="flex gap-1">
          <Title>Todo</Title>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkTitle = {
  args: {},
  render: (props: TitleProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className="flex gap-1">
          <Title>Todo</Title>
        </div>
      </ThemeProvider>
    );
  },
};
