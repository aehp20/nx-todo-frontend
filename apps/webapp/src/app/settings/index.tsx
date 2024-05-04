import { Dropdown, Label, Page, Option } from '@nx-todo-frontend/design-system';
import { themes, useTheme } from '@nx-todo-frontend/theme';
import { OnChangeValue } from 'react-select';

export default function Settings() {
  const { theme, setTheme } = useTheme();

  const options: Option[] = [
    {
      label: 'Light',
      value: themes.light,
    },
    {
      label: 'Dark',
      value: themes.dark,
    },
  ];

  const selectedValue = options.find((option) => option.value === theme);

  const handleChange = (option: OnChangeValue<Option, false>) => {
    if (option) {
      setTheme(option.value);
    }
  };

  return (
    <Page title="Settings">
      <div className="flex flex-col w-1/2">
        <Label>Theme</Label>
        <Dropdown
          value={selectedValue}
          options={options}
          onChange={(newValue: unknown) => handleChange(newValue as Option)}
        />
      </div>
    </Page>
  );
}
