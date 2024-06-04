import { ThemeProvider, colors, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';
import classNames from 'classnames';
import Grid from '../../molecules/grid/Grid';

const meta: Meta = {
  title: 'Design System/Atoms/Colors',
};
export default meta;

type ColorItem = {
  id: string;
  label: string;
  value: string;
};

const items: ColorItem[] = Object.keys(colors).map((key) => ({
  id: key,
  label: key,
  value: colors[key],
}));

type ColorWrapperProps = {
  item: ColorItem;
};

const ColorWrapper = (props: ColorWrapperProps) => {
  const { item } = props;
  return (
    <div className={classNames('flex flex-col items-center')}>
      <div className={classNames('w-10 h-10 border', `bg-${item.label}`)} />
      <span>{item.label}</span>
      <span>{item.value}</span>
    </div>
  );
};

export const LightColors = {
  args: {},
  render: () => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <Grid nbColumns={4} gap={4} items={items} Component={ColorWrapper} />
      </ThemeProvider>
    );
  },
};

export const DarkColors = {
  args: {},
  render: () => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <Grid nbColumns={4} gap={4} items={items} Component={ColorWrapper} />
      </ThemeProvider>
    );
  },
};
