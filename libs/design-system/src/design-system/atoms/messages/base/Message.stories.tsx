import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import Message, { MessageProps } from './Message';

const meta: Meta<typeof Message> = {
  component: Message,
};
export default meta;

export const LightMessages = {
  args: {},
  render: (props: MessageProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <Message>This is a default message without type props</Message>
          <Message type="info">This is an info message</Message>
          <Message type="error">This is an error message</Message>
          <Message type="success">This is a message</Message>
          <Message type="warning">This is a message</Message>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkMessages = {
  args: {},
  render: (props: MessageProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <Message>This is a default message without type props</Message>
          <Message type="info">This is an info message</Message>
          <Message type="error">This is an error message</Message>
          <Message type="success">This is a message</Message>
          <Message type="warning">This is a message</Message>
        </div>
      </ThemeProvider>
    );
  },
};
