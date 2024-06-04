import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import Toggle, { ToggleProps } from './Toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Design System/Atoms/Toggle',
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
      <ThemeProvider theme={themes.light} enabledResetTheme>
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
      <ThemeProvider theme={themes.dark} enabledResetTheme>
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
