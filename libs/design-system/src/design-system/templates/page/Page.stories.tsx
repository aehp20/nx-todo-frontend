import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import { BrowserRouter } from 'react-router-dom';

import type { Meta } from '@storybook/react';

import { Button } from '../../atoms/buttons';
import Title from '../../atoms/title/Title';
import BackLink from '../../molecules/backLink/BackLink';

import Page, { PageProps } from './Page';

const meta: Meta<typeof Page> = {
  component: Page,
};
export default meta;

export const LightPage = {
  args: {},
  render: (props: PageProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <Page title="Todo page" headerContent={<Title>Todo page</Title>}>
          Content
        </Page>
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
        <Page
          title="Todo page"
          headerContent={
            <div className="flex items-center justify-between">
              <Title>Todo page</Title>
              {actions}
            </div>
          }
        >
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
            headerContent={
              <BackLink to="/todos" content={'Back to Home page'} />
            }
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
        <Page title="Todo page" headerContent={<Title>Todo page</Title>}>
          Content
        </Page>
      </ThemeProvider>
    );
  },
};

export const DarkWithActions = {
  args: {},
  render: (props: PageProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <Page
          title="Todo page"
          headerContent={
            <div className="flex items-center justify-between">
              <Title>Todo page</Title>
              {actions}
            </div>
          }
        >
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
            headerContent={
              <BackLink to="/todos" content={'Back to Home page'} />
            }
          >
            Hello
          </Page>
        </ThemeProvider>
      </BrowserRouter>
    );
  },
};
