import Cookies from 'js-cookie';

const I18N_COOKIE_NAME = 'NX_TODOS_I18N';

export const getLocaleCookie = (defaultLocale: string) => {
  const value = Cookies.get(I18N_COOKIE_NAME);
  if (value) {
    return value;
  }
  setLocaleCookie(defaultLocale);
  return defaultLocale;
};

export const setLocaleCookie = (locale: string) => {
  Cookies.set(I18N_COOKIE_NAME, locale, { expires: 365, path: '/' });
};
