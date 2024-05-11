import { ThemeProvider, themes } from '@nx-todo-frontend/theme';
import type { Meta } from '@storybook/react';

import CardWithActions, { CardWithActionsProps } from '.';

const meta: Meta<typeof CardWithActions> = {
  component: CardWithActions,
  title: 'Card/CardWithActions',
};
export default meta;

const actions = [
  <div onClick={() => console.log('Item')}>Item</div>,
  <div onClick={() => console.log('Item 2')}>Item 2</div>,
  <div onClick={() => console.log('Item 3')}>Item 3</div>,
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
