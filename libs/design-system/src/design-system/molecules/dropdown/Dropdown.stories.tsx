import { ThemeProvider, themes } from '@nx-todo-frontend/theme';

import type { Meta } from '@storybook/react';

import { Dropdown, DropdownProps, Option } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};
export default meta;

const multipleOptions = [
  {
    label: 'Peru',
    options: [
      {
        label: 'Lima',
        value: 'Lima',
      },
      {
        label: 'Cuzco',
        value: 'Cuzco',
      },
      {
        label: 'Ancash',
        value: 'Ancash',
      },
    ],
  },
  {
    label: 'Brasil',
    options: [
      { label: 'Rio', value: 'Rio' },
      { label: 'Brasilia', value: 'Brasilia' },
    ],
  },
];

const simpleOptions = [
  {
    label: 'Lima',
    value: 'Lima',
  },
  {
    label: 'Cuzco',
    value: 'Cuzco',
  },
  {
    label: 'Ancash',
    value: 'Ancash',
  },
];

const handleChange = (option: Option) => {
  if (option) {
    console.log(option);
  }
};

export const LightDropdown = {
  args: {},
  render: (props: DropdownProps) => {
    return (
      <ThemeProvider theme={themes.light} enabledResetTheme>
        <div className="flex flex-col gap-2">
          <Dropdown
            options={simpleOptions}
            onChange={handleChange}
            noOptionsMessage="No options"
          />
          <Dropdown
            options={simpleOptions}
            onChange={handleChange}
            noOptionsMessage="No options"
            isDisabled
          />
          <Dropdown
            options={multipleOptions}
            isMulti
            onChange={handleChange}
            noOptionsMessage="No options"
          />
          <Dropdown
            options={multipleOptions}
            isMulti
            onChange={handleChange}
            noOptionsMessage="No options"
            isDisabled
          />
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkDropdown = {
  args: {},
  render: (props: DropdownProps) => {
    return (
      <ThemeProvider theme={themes.dark} enabledResetTheme>
        <div className="flex flex-col gap-2">
          <Dropdown
            options={simpleOptions}
            onChange={handleChange}
            noOptionsMessage="No options"
          />
          <Dropdown
            options={multipleOptions}
            isMulti
            onChange={handleChange}
            noOptionsMessage="No options"
          />
        </div>
      </ThemeProvider>
    );
  },
};
