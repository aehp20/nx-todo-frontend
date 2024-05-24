import { Page } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import { CacheField } from './cache';
import { FontField } from './font';
import { LanguageField } from './language';
import { ThemeField } from './theme';

export default function Settings() {
  const { _ } = useI18NContext();

  return (
    <Page title={_('Settings')}>
      <div className="flex flex-col gap-4">
        <LanguageField />
        <ThemeField />
        <FontField />
        <CacheField />
      </div>
    </Page>
  );
}
