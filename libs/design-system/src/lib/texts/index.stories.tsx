import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import TextDelete, { TextDeleteProps } from '.';

const meta: Meta<typeof TextDelete> = {
  component: TextDelete,
  title: 'TextDelete',
};
export default meta;

export const LightTextDelete = {
  args: {},
  render: (props: TextDeleteProps) => {
    return (
      <ThemeProvider theme={themes.light}>
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
      <ThemeProvider theme={themes.dark}>
        <div className="flex flex-col gap-1">
          <TextDelete>Delete</TextDelete>
        </div>
      </ThemeProvider>
    );
  },
};
