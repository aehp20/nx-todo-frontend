const THEME_LOCAL_STORAGE_KEY = 'MY_APP_THEME';

export const getThemeFromLocalStorage = (defaultTheme: string) => {
  const value = localStorage.getItem(THEME_LOCAL_STORAGE_KEY);
  if (value) {
    return value;
  }
  setThemeFromLocalStorage(defaultTheme);
  return defaultTheme;
};

export const setThemeFromLocalStorage = (theme: string) => {
  localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
};
