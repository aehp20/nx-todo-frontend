import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import PlusIcon from '../../icons/PlusIcon';

import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Design System/Atoms/Button/Base',
};
export default meta;

export const LightButtons = {
  args: {
    action: undefined,
    disabled: undefined,
    onClick: () => {
      console.log('onClick');
    },
  },
  render: (props: ButtonProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <Button {...props}>Add</Button>
            <Button {...props} icon={<PlusIcon />}>
              Add
            </Button>
            <Button {...props}>Update</Button>
            <Button {...props}>Delete</Button>
            <Button {...props}>Save</Button>
          </div>
          <div className="flex gap-1">
            <Button {...props} disabled>
              Add
            </Button>
            <Button {...props} disabled>
              Update
            </Button>
          </div>
          <div className="flex gap-1">
            <Button {...props} action="secondary" icon={<PlusIcon />}>
              Add
            </Button>
            <Button {...props} action="secondary">
              Update
            </Button>
            <Button {...props} action="secondary">
              Delete
            </Button>
          </div>
          <div className="flex gap-1">
            <Button {...props} action="secondary" disabled>
              Add
            </Button>
            <Button {...props} action="secondary" disabled>
              Update
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkButtons = {
  args: {
    action: undefined,
    disabled: undefined,
    onClick: () => {
      console.log('onClick');
    },
  },
  render: (props: ButtonProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <Button {...props}>Add</Button>
            <Button {...props} icon={<PlusIcon />}>
              Add
            </Button>
            <Button {...props}>Update</Button>
            <Button {...props}>Delete</Button>
            <Button {...props}>Save</Button>
          </div>
          <div className="flex gap-1">
            <Button {...props} disabled>
              Add
            </Button>
            <Button {...props} disabled>
              Update
            </Button>
          </div>
          <div className="flex gap-1">
            <Button {...props} action="secondary" icon={<PlusIcon />}>
              Add
            </Button>
            <Button {...props} action="secondary">
              Update
            </Button>
            <Button {...props} action="secondary">
              Delete
            </Button>
          </div>
          <div className="flex gap-1">
            <Button {...props} action="secondary" disabled>
              Add
            </Button>
            <Button {...props} action="secondary" disabled>
              Update
            </Button>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};
