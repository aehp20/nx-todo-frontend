import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import { Button } from '../../atoms/buttons';
import { ToastContainer } from './ToastContainer';
import { useToast } from './useToast';

const meta: Meta<typeof ToastContainer> = {
  component: ToastContainer,
  title: 'Design System/Molecules/ToastContainer',
};
export default meta;

const App = () => {
  const { successToast } = useToast();

  return (
    <>
      <Button onClick={() => successToast('This is a magic Toast.')}>
        Show Toast
      </Button>
      <ToastContainer />
    </>
  );
};

export const LightToastContainer = {
  args: {},
  render: () => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <App />
      </ThemeProvider>
    );
  },
};

export const DarkToastContainer = {
  args: {},
  render: () => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <App />
      </ThemeProvider>
    );
  },
};
