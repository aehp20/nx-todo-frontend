import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import Link, { LinkProps } from '.';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Link',
};
export default meta;

export const LightLinks = {
  args: {},
  render: (props: LinkProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <Link
            href="https://www.linkedin.com/in/aronherreraponte/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/aronherreraponte/
          </Link>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkLinks = {
  args: {},
  render: (props: LinkProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="flex flex-col gap-1">
          <Link
            href="https://www.linkedin.com/in/aronherreraponte/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/aronherreraponte/
          </Link>
        </div>
      </ThemeProvider>
    );
  },
};
