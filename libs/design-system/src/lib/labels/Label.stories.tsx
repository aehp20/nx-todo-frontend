import type { Meta } from '@storybook/react';
import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import Label, { LabelProps } from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Label',
};
export default meta;

export const LightLabels = {
  args: {},
  render: (props: LabelProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <Label htmlFor="username">Username</Label>
            <input type="text" id="username" />
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkLabels = {
  args: {},
  render: (props: LabelProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <Label htmlFor="username">Username</Label>
            <input type="text" id="username" />
          </div>
        </div>
      </ThemeProvider>
    );
  },
};
