import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Translator from './I18NTranslator';
import { getLocaleCookie, setLocaleCookie } from './utils';

type I18NProviderProps = {
  locale: string;
  urlApp: string;
  folderPath: string;
  children: ReactNode;
};

type I18NContextProps = {
  locale: string;
  setLocale: (locale: string) => void;
  _: (...originalArguments: unknown[]) => string;
  _n: (...originalArguments: unknown[]) => string;
  _c: (...originalArguments: unknown[]) => string;
  _cn: (...originalArguments: unknown[]) => string;
};

const I18NContext = createContext({} as I18NContextProps);

export function I18NProvider(props: I18NProviderProps) {
  const { locale: originalLocale, urlApp, folderPath, children } = props;

  const [locale, setLocale] = useState<string>(getLocaleCookie(originalLocale));
  const [translator, setTranslator] = useState<Translator>();

  const handleLocale = useCallback((locale: string) => {
    setLocaleCookie(locale);
    setLocale(locale);
  }, []);

  useEffect(() => {
    async function fetchData(locale: string) {
      const loadedJSON = await fetch(`${urlApp}${folderPath}${locale}.json`)
        .then((response) => response.json())
        .then((json) => json);

      const translator = new Translator(locale, loadedJSON);
      setTranslator(translator);
    }
    fetchData(locale);
  }, [locale]);

  const value = useMemo(() => {
    if (translator) {
      const { _, _n, _c, _cn } = translator;
      return {
        locale,
        setLocale: handleLocale,
        _,
        _n,
        _c,
        _cn,
      };
    }
    return null;
  }, [translator, locale, handleLocale]);

  return value ? (
    <I18NContext.Provider value={value}>{children}</I18NContext.Provider>
  ) : (
    <div>Loading...</div>
  );
}

export function useI18NContext() {
  const context = useContext(I18NContext);
  if (context === undefined) {
    throw new Error('I18NContext: Context must be used within a Provider');
  }
  return context;
}
