import { useI18NContext } from '@nx-todo-frontend/i18n';

import dayjs from 'dayjs';
import { useEffect } from 'react';

export function useApp() {
  const { locale } = useI18NContext();

  useEffect(() => {
    if (locale) {
      dayjs.locale(locale);
    }
  }, [locale]);
}
