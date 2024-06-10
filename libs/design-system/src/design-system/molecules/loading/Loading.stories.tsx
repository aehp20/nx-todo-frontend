import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import Loading from './Loading';

const meta: Meta = {
  component: Loading,
};
export default meta;

export const LightLoading = {
  args: {},
  render: () => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <div className="relative">
          {<Loading />}
          <div className="bg-yellow-100 w-full h-20">Hello</div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkLoading = {
  args: {},
  render: () => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="relative">
          {<Loading />}
          <div className="bg-yellow-600 w-full h-20">Hello</div>
        </div>
      </ThemeProvider>
    );
  },
};
