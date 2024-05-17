import Cookies from 'js-cookie';

const THEME_COOKIE_NAME = 'NX_TODOS_THEME';

export const getThemeCookie = (
  defaultTheme: string,
  enabledResetTheme?: boolean,
) => {
  const value = enabledResetTheme ? undefined : Cookies.get(THEME_COOKIE_NAME);

  if (value) {
    return value;
  }

  setThemeCookie(defaultTheme);

  return defaultTheme;
};

export const setThemeCookie = (theme: string) => {
  Cookies.set(THEME_COOKIE_NAME, theme, { expires: 365, path: '/' });
};
