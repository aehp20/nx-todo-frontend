import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import ErrorMessage, { ErrorMessageProps } from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
};
export default meta;

export const LightErrorMessages = {
  args: {},
  render: (props: ErrorMessageProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <ErrorMessage />
          <ErrorMessage error="This is an error message" />
          <ErrorMessage
            error={{ message: 'This is an object error message' }}
          />
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkErrorMessages = {
  args: {},
  render: (props: ErrorMessageProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <ErrorMessage />
          <ErrorMessage error="This is an error message" />
          <ErrorMessage
            error={{ message: 'This is an object error message' }}
          />
        </div>
      </ThemeProvider>
    );
  },
};
