import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import Title, { TitleProps } from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Design System/Atoms/Title',
};
export default meta;

export const LightTitle = {
  args: {},
  render: (props: TitleProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
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
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="flex gap-1">
          <Title>Todo</Title>
        </div>
      </ThemeProvider>
    );
  },
};
