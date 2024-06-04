import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import ErrorBoundaryUI, { ErrorBoundaryUIProps } from './ErrorBoundaryUI';

const meta: Meta<typeof ErrorBoundaryUI> = {
  component: ErrorBoundaryUI,
};
export default meta;

const error: Error = {
  message: `Msgid "undefined" is not a valid translatable string`,
  stack: 'Here we can see the complete error message and stacktrace',
} as Error;

export const LightErrorBoundaryUI = {
  args: {},
  render: (props: ErrorBoundaryUIProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <ErrorBoundaryUI error={error} />
      </ThemeProvider>
    );
  },
};

export const DarkErrorBoundaryUI = {
  args: {},
  render: (props: ErrorBoundaryUIProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <ErrorBoundaryUI error={error} />
      </ThemeProvider>
    );
  },
};
