import type { Meta } from '@storybook/react';
import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import Input, { InputProps } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
};
export default meta;

export const LightInputs = {
  args: {
    action: undefined,
    disabled: undefined,
    placeholder: "Enter your name",
    onClick: () => { console.log('onClick'); }
  },
  render: (props: InputProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className='flex gap-1'>
          <Input {...props} />
          <Input {...props} disabled />
        </div>
      </ThemeProvider>
    )
  }
};

export const DarkInputs = {
  args: {
    action: undefined,
    disabled: undefined,
    placeholder: "Enter your name",
    onClick: () => { console.log('onClick'); }
  },
  render: (props: InputProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className='flex gap-1'>
          <Input {...props} />
          <Input {...props} disabled />
        </div>
      </ThemeProvider>
    )
  }
};
