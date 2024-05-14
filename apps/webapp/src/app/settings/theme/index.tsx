import { Dropdown, Label, Option } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { themes, useTheme } from '@nx-todo-frontend/theme';

export function ThemeField() {
  const { theme, setTheme } = useTheme();

  const { _ } = useI18NContext();

  const options: Option[] = [
    {
      label: _('Light'),
      value: themes.light,
    },
    {
      label: _('Dark'),
      value: themes.dark,
    },
  ];

  const selectedValue = options.find((option) => option.value === theme);

  const handleChange = (option: Option) => {
    if (option) {
      setTheme(option.value);
    }
  };

  return (
    <div className="flex flex-col w-1/2 md:w-1/4 gap-2">
      <Label htmlFor="theme">{_('Theme')}</Label>
      <Dropdown
        inputId="theme"
        value={selectedValue}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
}
