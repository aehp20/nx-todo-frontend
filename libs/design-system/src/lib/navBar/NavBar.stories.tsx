import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import { BrowserRouter } from 'react-router-dom';

import type { Meta } from '@storybook/react';

import { ClipboardCheckIcon } from '../icons';

import NavBar, { NavBarProps } from './NavBar';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: 'Design System/Molecules/NavBar',
};
export default meta;

const title = (
  <>
    <ClipboardCheckIcon width="28" height="28" />
    <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </>
);
const items = [
  { to: '/docs', label: 'Docs' },
  { to: '/examples', label: 'Examples' },
  { to: '/blog', label: 'Blog' },
];

export const LightNavBar = {
  args: {
    title,
    items,
  },
  render: (props: NavBarProps) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes.light} enabledResetTheme>
          <NavBar {...props} />
        </ThemeProvider>
      </BrowserRouter>
    );
  },
};

export const DarkNavBar = {
  args: {
    title,
    items,
  },
  render: (props: NavBarProps) => {
    return (
      <BrowserRouter>
        <ThemeProvider theme={themes.dark} enabledResetTheme>
          <NavBar {...props} />
        </ThemeProvider>
      </BrowserRouter>
    );
  },
};
