const I18N_LOCAL_STORAGE_KEY = 'MY_APP_I18N_LOCALE';

export const getLocaleFromLocalStorage = (defaultLocale: string) => {
  const value = localStorage.getItem(I18N_LOCAL_STORAGE_KEY);
  if (value) {
    return value;
  }
  setLocaleFromLocalStorage(defaultLocale);
  return defaultLocale;
};

export const setLocaleFromLocalStorage = (locale: string) => {
  localStorage.setItem(I18N_LOCAL_STORAGE_KEY, locale);
};
