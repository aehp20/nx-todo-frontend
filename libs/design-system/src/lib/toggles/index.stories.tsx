import { ThemeProvider, themes } from '@nx-todo-frontend/theme';
import type { Meta } from '@storybook/react';

import Toggle, { ToggleProps } from '.';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle',
};
export default meta;

export const LightToggles = {
  args: {
    action: undefined,
    disabled: undefined,
    handleChange: () => {
      console.log('handleChange');
    },
  },
  render: (props: ToggleProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className="flex gap-1">
          <Toggle {...props} />
          <Toggle {...props} isChecked />
          <Toggle {...props} isDisabled />
          <Toggle {...props} isChecked isDisabled />
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkToggles = {
  args: {
    action: undefined,
    disabled: undefined,
    handleChange: () => {
      console.log('handleChange');
    },
  },
  render: (props: ToggleProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className="flex gap-1">
          <Toggle {...props} />
          <Toggle {...props} isChecked />
          <Toggle {...props} isDisabled />
          <Toggle {...props} isChecked isDisabled />
        </div>
      </ThemeProvider>
    );
  },
};
