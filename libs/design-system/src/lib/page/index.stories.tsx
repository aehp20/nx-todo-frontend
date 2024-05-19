import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import { BrowserRouter } from 'react-router-dom';

import type { Meta } from '@storybook/react';

import BackLink from '../backLink';
import { Button } from '../buttons';

import Page, { PageProps } from '.';

const meta: Meta<typeof Page> = {
  component: Page,
  title: 'Page',
};
export default meta;

export const LightPage = {
  args: {},
  render: (props: PageProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <Page title="Todo page">Content</Page>
      </ThemeProvider>
    );
  },
};

const actions = <Button>Add</Button>;

export const LightWithActions = {
  args: {},
  render: (props: PageProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <Page title="Todo page" actions={actions}>
          Content
        </Page>
      </ThemeProvider>
    );
  },
};

export const LightPageWithBackLink = {
  args: {},
  render: (props: PageProps) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes.light} enabledResetTheme>
          <Page
            title={'Create Todo'}
            backLink={<BackLink to="/todos" content={'Back to Home page'} />}
          >
            Hello
          </Page>
        </ThemeProvider>
      </BrowserRouter>
    );
  },
};

export const DarkPage = {
  args: {},
  render: (props: PageProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <Page title="Todo page">Content</Page>
      </ThemeProvider>
    );
  },
};

export const DarkWithActions = {
  args: {},
  render: (props: PageProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <Page title="Todo page" actions={actions}>
          Content
        </Page>
      </ThemeProvider>
    );
  },
};

export const DarkPageWithBackLink = {
  args: {},
  render: (props: PageProps) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes.dark} enabledResetTheme>
          <Page
            title={'Create Todo'}
            backLink={<BackLink to="/todos" content={'Back to Home page'} />}
          >
            Hello
          </Page>
        </ThemeProvider>
      </BrowserRouter>
    );
  },
};
