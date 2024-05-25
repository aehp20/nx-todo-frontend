import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import FontCard, { FontCardProps } from '.';

const meta: Meta<typeof FontCard> = {
  component: FontCard,
  title: 'Card/FontCard',
};
export default meta;

export const LightFontCard = {
  args: {},
  render: (props: FontCardProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <div className="flex gap-2">
          <FontCard
            fontName="Nunito"
            isSelected
            onClick={() => console.log('click')}
          />
          <FontCard
            fontName="Sans Serif"
            isSelected={false}
            onClick={() => console.log('click')}
          />
          <FontCard
            fontName="Lora"
            isSelected={false}
            onClick={() => console.log('click')}
          />
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkFontCard = {
  args: {},
  render: (props: FontCardProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="flex gap-2">
          <FontCard
            fontName="Nunito"
            isSelected
            onClick={() => console.log('click')}
          />
          <FontCard
            fontName="Sans Serif"
            isSelected={false}
            onClick={() => console.log('click')}
          />
          <FontCard
            fontName="Lora"
            isSelected={false}
            onClick={() => console.log('click')}
          />
        </div>
      </ThemeProvider>
    );
  },
};
