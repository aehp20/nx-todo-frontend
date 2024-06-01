import { useI18NContext } from '@nx-todo-frontend/i18n';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useEffect } from 'react';

import 'dayjs/locale/es';
import 'dayjs/locale/fr';

export function useApp() {
  const { locale } = useI18NContext();

  useEffect(() => {
    if (locale) {
      dayjs.locale(locale);
      dayjs.extend(localizedFormat);
    }
  }, [locale]);
}
