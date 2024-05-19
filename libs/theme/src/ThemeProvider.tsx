import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { componentsName } from './componentsName';
import {
  styles,
  stylesPropertiesName,
  StylesPropertiesNameProps,
  StylesProps,
} from './styles';
import { themes } from './themes';
import { getThemeCookie, setThemeCookie } from './utils';

type ThemeProviderValue = {
  theme: string;
  setTheme: (theme: string) => void;
  styles: StylesProps;
  stylesPropertiesName: StylesPropertiesNameProps;
};

type ThemeProviderProps = {
  theme?: string;
  children: ReactNode;
  enabledResetTheme?: boolean;
};

const ThemeContext = createContext<ThemeProviderValue>(
  {} as ThemeProviderValue,
);

export function ThemeProvider(props: ThemeProviderProps) {
  const {
    theme: initialTheme = themes.light,
    enabledResetTheme = false,
    children,
  } = props;

  const [theme, setTheme] = useState(
    getThemeCookie(initialTheme, enabledResetTheme),
  );

  const handleTheme = useCallback((theme: string) => {
    setThemeCookie(theme);
    setTheme(theme);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme: handleTheme,
      styles: styles[theme],
      stylesPropertiesName,
    }),
    [theme, handleTheme],
  );

  const appStyles = styles[theme][componentsName.app];

  const { BG_COLOR, COLOR } = stylesPropertiesName[componentsName.app];

  document.body.style.background = appStyles[BG_COLOR];
  document.body.style.color = appStyles[COLOR];

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useThemeStyles(componentName: string) {
  const { styles, stylesPropertiesName } = useContext(ThemeContext);
  return {
    styles: styles[componentName],
    stylesPropertiesName: stylesPropertiesName[componentName],
  };
}
