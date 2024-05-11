import { ThemeProvider, themes } from '@nx-todo-frontend/theme';
import type { Meta } from '@storybook/react';

import { Error, Message, MessageProps } from './';

const meta: Meta<typeof Message> = {
  component: Message,
  title: 'Message',
};
export default meta;

export const LightMessages = {
  args: {},
  render: (props: MessageProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className="flex flex-col gap-1">
          <Message>This is a default message without type props</Message>
          <Message type="info">This is an info message</Message>
          <Message type="error">This is an error message</Message>
          <Message type="success">This is a message</Message>
          <Message type="warning">This is a message</Message>
          <Error />
          <Error error="This is an error message" />
          <Error error={{ message: 'This is an object error message' }} />
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkMessages = {
  args: {},
  render: (props: MessageProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className="flex flex-col gap-1">
          <Message>This is a default message without type props</Message>
          <Message type="info">This is an info message</Message>
          <Message type="error">This is an error message</Message>
          <Message type="success">This is a message</Message>
          <Message type="warning">This is a message</Message>
          <Error />
          <Error error="This is an error message" />
          <Error error={{ message: 'This is an object error message' }} />
        </div>
      </ThemeProvider>
    );
  },
};
