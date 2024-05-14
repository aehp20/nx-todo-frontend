import { ThemeProvider, themes } from '@nx-todo-frontend/theme';
import type { Meta } from '@storybook/react';

import BurgerButton, { BurgerButtonProps } from '.';

const meta: Meta<typeof BurgerButton> = {
  component: BurgerButton,
  title: 'BurgerButton',
};
export default meta;

export const LightBurgerButton = {
  args: {
    action: undefined,
    disabled: undefined,
    onClick: () => {
      console.log('onClick');
    },
  },
  render: (props: BurgerButtonProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className="flex gap-1">
          <BurgerButton isOpen={false} onClick={() => console.log('onClick')} />
          <BurgerButton isOpen onClick={() => console.log('onClick')} />
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkBurgerButton = {
  args: {
    action: undefined,
    disabled: undefined,
    onClick: () => {
      console.log('onClick');
    },
  },
  render: (props: BurgerButtonProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className="flex gap-1">
          <BurgerButton isOpen={false} onClick={() => console.log('onClick')} />
          <BurgerButton isOpen onClick={() => console.log('onClick')} />
        </div>
      </ThemeProvider>
    );
  },
};
