import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import TextDelete, { TextDeleteProps } from './TextDelete';

const meta: Meta<typeof TextDelete> = {
  component: TextDelete,
  title: 'Design System/Atoms/TextDelete',
};
export default meta;

export const LightTextDelete = {
  args: {},
  render: (props: TextDeleteProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <TextDelete>Delete</TextDelete>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkTextDelete = {
  args: {},
  render: (props: TextDeleteProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <TextDelete>Delete</TextDelete>
        </div>
      </ThemeProvider>
    );
  },
};
