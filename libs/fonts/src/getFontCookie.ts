import Cookies from 'js-cookie';

const FONT_COOKIE_NAME = 'NX_TODOS_FONT';

export const getFontCookie = (
  defaultFont: string,
  enabledResetFont?: boolean,
) => {
  const value = enabledResetFont ? undefined : Cookies.get(FONT_COOKIE_NAME);

  if (value) {
    return value;
  }

  setFontCookie(defaultFont);

  return defaultFont;
};

export const setFontCookie = (font: string) => {
  Cookies.set(FONT_COOKIE_NAME, font, { expires: 365, path: '/' });
};
