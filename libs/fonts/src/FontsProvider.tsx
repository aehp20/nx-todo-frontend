import { ReactNode, createContext, useContext, useMemo } from 'react';
import { useFontsProvider } from './useFontsProvider';

type FontsContextValue = {
  fontFamily: string;
  setFontFamily: (fontFamily: string) => void;
};

const FontsContext = createContext({} as FontsContextValue);

type FontsProviderProps = {
  urlApp: string;
  folderPath: string;
  defaultFont: string;
  children: ReactNode;
};

export function FontsProvider(props: Readonly<FontsProviderProps>) {
  const { urlApp, folderPath, defaultFont, children } = props;

  const { fontFamily, setFontFamily } = useFontsProvider(
    urlApp,
    folderPath,
    defaultFont,
  );

  document.body.style.fontFamily = fontFamily;

  const value = useMemo(() => {
    return { fontFamily, setFontFamily };
  }, [fontFamily, setFontFamily]);

  return (
    <FontsContext.Provider value={value}>{children}</FontsContext.Provider>
  );
}

export function useFontsContext() {
  const context = useContext(FontsContext);
  if (context === undefined) {
    throw new Error('FontsContext: Context must be used within a Provider');
  }
  return context;
}
