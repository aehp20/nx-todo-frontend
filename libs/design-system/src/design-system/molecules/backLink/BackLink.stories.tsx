import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import { BrowserRouter } from 'react-router-dom';

import type { Meta } from '@storybook/react';

import BackLink, { BackLinkProps } from './BackLink';

const meta: Meta<typeof BackLink> = {
  component: BackLink,
};
export default meta;

export const LightBackLink = {
  args: {},
  render: (props: BackLinkProps) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes.light} enabledResetTheme>
          <BackLink to="/" content={'Back to Home page'} />
        </ThemeProvider>
      </BrowserRouter>
    );
  },
};

export const DarkBackLink = {
  args: {},
  render: (props: BackLinkProps) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes.dark} enabledResetTheme>
          <BackLink to="/" content={'Back to Home page'} />
        </ThemeProvider>
      </BrowserRouter>
    );
  },
};
