import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

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
      <ThemeProvider theme={themes.light}>
        <Page title="Todo page">Content</Page>
      </ThemeProvider>
    );
  },
};

export const DarkPage = {
  args: {},
  render: (props: PageProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <Page title="Todo page">Content</Page>
      </ThemeProvider>
    );
  },
};
