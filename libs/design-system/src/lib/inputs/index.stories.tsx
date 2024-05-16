import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import Input, { InputProps } from '.';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
};
export default meta;

export const LightInputs = {
  args: {
    action: undefined,
    disabled: undefined,
    placeholder: 'Enter your name',
    onClick: () => {
      console.log('onClick');
    },
  },
  render: (props: InputProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className="flex gap-1">
          <Input {...props} />
          <Input {...props} disabled />
          <Input type="search" {...props} />
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkInputs = {
  args: {
    action: undefined,
    disabled: undefined,
    placeholder: 'Enter your name',
    onClick: () => {
      console.log('onClick');
    },
  },
  render: (props: InputProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className="flex gap-1">
          <Input {...props} />
          <Input {...props} disabled />
          <Input type="search" {...props} />
        </div>
      </ThemeProvider>
    );
  },
};
