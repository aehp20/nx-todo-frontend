import { ThemeProvider, themes } from '@nx-todo-frontend/theme';
import type { Meta } from '@storybook/react';

import CardWithActions, { CardWithActionsProps } from '.';
import { ActionItem } from './types';

const meta: Meta<typeof CardWithActions> = {
  component: CardWithActions,
  title: 'Card/CardWithActions',
};
export default meta;

const actions: ActionItem[] = [
  { content: 'Item 1', onClick: () => console.log('Item 1') },
  { content: 'Item 2', onClick: () => console.log('Item 2') },
  { content: 'Item 3', onClick: () => console.log('Item 3') },
];

export const LightCardWithActions = {
  args: {},
  render: (props: CardWithActionsProps) => {
    return (
      <ThemeProvider theme={themes.light}>
        <div className="flex flex-col gap-1">
          <CardWithActions actions={actions}>Hello</CardWithActions>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkCardWithActions = {
  args: {},
  render: (props: CardWithActionsProps) => {
    return (
      <ThemeProvider theme={themes.dark}>
        <div className="flex flex-col gap-1">
          <CardWithActions actions={actions}>Hello</CardWithActions>
        </div>
      </ThemeProvider>
    );
  },
};
