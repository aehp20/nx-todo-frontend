import { useEffect, useState } from 'react';

import { Dropdown, Label, Option } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

export function LanguageField() {
  const { _, locale, setLocale } = useI18NContext();

  const [option, setOption] = useState<Option>();

  const languageOptions: Option[] = [
    {
      label: _('English'),
      value: 'en',
    },
    {
      label: _('French'),
      value: 'fr',
    },
    {
      label: _('Spanish'),
      value: 'es',
    },
  ];

  const handleChangeLanguage = (option: Option) => {
    setLocale(option.value);
  };

  useEffect(() => {
    if (locale) {
      setOption({
        label:
          locale === 'en'
            ? _('English')
            : locale === 'es'
            ? _('Spanish')
            : _('French'),
        value: locale,
      });
    }
  }, [_, locale]);

  return (
    <div className="flex flex-col w-1/2 md:w-1/4 gap-2">
      <Label htmlFor="language">{_('Language')}</Label>
      <Dropdown
        inputId="language"
        value={option}
        options={languageOptions}
        onChange={handleChangeLanguage}
      />
    </div>
  );
}
