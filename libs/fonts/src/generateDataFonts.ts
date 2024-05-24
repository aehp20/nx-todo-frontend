import { fontNames } from './constants';

export const generateDataFonts = (urlApp: string, folderPath: string) => {
  return fontNames.map((fontName) => ({
    family: fontName,
    url: `${urlApp}${folderPath}${fontName}-Regular.ttf`,
    options: {
      weight: '400',
      style: 'normal',
    },
  }));
};
