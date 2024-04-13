import type { Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import {IconPlus} from './icons/IconPlus';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;

export const LightButtons = {
  args: {
    action: undefined,
    disabled: undefined,
    className: undefined,
    onClick: () => { console.log('onClick'); }
  },
  render: (props: ButtonProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className='flex gap-1'>
          <Button {...props}>Add</Button>
          <Button {...props} icon={<IconPlus />}>Add</Button>
          <Button {...props}>Update</Button>
          <Button {...props}>Delete</Button>
          <Button {...props}>Save</Button>
          <Button {...props} action='secondary' icon={<IconPlus />}>Add</Button>
          <Button {...props} action='secondary'>Update</Button>
          <Button {...props} action='secondary'>Delete</Button>
          <Button {...props} disabled>Add</Button>
          <Button {...props} disabled>Update</Button>
          <Button {...props} action='secondary' disabled>Add</Button>
          <Button {...props} action='secondary' disabled>Update</Button>
        </div>
      </ThemeProvider>
    )
  }
};

export const DarkButtons = {
  args: {
    action: undefined,
    disabled: undefined,
    className: undefined,
    onClick: () => { console.log('onClick'); }
  },
  render: (props: ButtonProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className='flex gap-1'>
          <Button {...props}>Add</Button>
          <Button {...props} icon={<IconPlus />}>Add</Button>
          <Button {...props}>Update</Button>
          <Button {...props}>Delete</Button>
          <Button {...props}>Save</Button>
          <Button {...props} action='secondary' icon={<IconPlus />}>Add</Button>
          <Button {...props} action='secondary'>Update</Button>
          <Button {...props} action='secondary'>Delete</Button>
          <Button {...props} disabled>Add</Button>
          <Button {...props} disabled>Update</Button>
          <Button {...props} action='secondary' disabled>Add</Button>
          <Button {...props} action='secondary' disabled>Update</Button>
        </div>
      </ThemeProvider>
    )
  }
};
