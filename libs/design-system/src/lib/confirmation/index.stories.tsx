import { ThemeProvider, themes } from '@nx-todo-frontend/theme';
import type { Meta } from '@storybook/react';

import Button from '../buttons';
import { Confirmation, ConfirmationProps } from './';

const meta: Meta<typeof Confirmation> = {
  component: Confirmation,
  title: 'Confirmation',
};
export default meta;

export const LightConfirmation = {
  args: {},
  render: (props: ConfirmationProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <Confirmation
          title="Delete Article?"
          content="Are you sure you want to delete this article?"
          onConfirm={() => console.log('onConfirm')}
          labelNoButton="No"
          labelYesButton="Yes"
        >
          {({ displayConfirmation }) => (
            <Button onClick={() => displayConfirmation(true)}>Delete</Button>
          )}
        </Confirmation>
      </ThemeProvider>
    );
  },
};

export const DarkConfirmation = {
  args: {},
  render: (props: ConfirmationProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <Confirmation
          title="Delete Article?"
          content="Are you sure you want to delete this article?"
          onConfirm={() => console.log('onConfirm')}
          labelNoButton="No"
          labelYesButton="Yes"
        >
          {({ displayConfirmation }) => (
            <Button onClick={() => displayConfirmation(true)}>Delete</Button>
          )}
        </Confirmation>
      </ThemeProvider>
    );
  },
};
