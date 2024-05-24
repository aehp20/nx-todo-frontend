import { useCallback, useEffect, useState } from 'react';

import { generateDataFonts } from './generateDataFonts';
import { getFontCookie, setFontCookie } from './getFontCookie';

export function useFontsProvider(
  urlApp: string,
  folderPath: string,
  defaultFont: string,
) {
  const [fontFamily, setFontFamily] = useState(getFontCookie(defaultFont));

  const loadFonts = useCallback(() => {
    const dataFonts = generateDataFonts(urlApp, folderPath);

    const fontFaces = dataFonts.map((font) => {
      return new FontFace(font.family, `url(${font.url})`, font.options);
    });

    Promise.all(fontFaces.map((fontFace) => fontFace.load())).then(
      (loadedFonts) => {
        loadedFonts.forEach((loadedFont) => document.fonts.add(loadedFont));
        handleFontFamily(fontFamily);
      },
    );
  }, [fontFamily]);

  const handleFontFamily = useCallback((fontFamily: string) => {
    setFontCookie(fontFamily);
    setFontFamily(fontFamily);
  }, []);

  useEffect(() => {
    loadFonts();
  }, []);

  return {
    fontFamily,
    setFontFamily: handleFontFamily,
  };
}
