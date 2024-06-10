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
  isLightTheme: boolean;
  isDarkTheme: boolean;
};

type ThemeProviderProps = {
  theme?: string;
  children: ReactNode;
  enabledResetTheme?: boolean;
};

const ThemeContext = createContext<ThemeProviderValue>(
  {} as ThemeProviderValue,
);

export function ThemeProvider(props: Readonly<ThemeProviderProps>) {
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
      isLightTheme: theme === themes.light,
      isDarkTheme: theme === themes.dark,
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
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('ThemeContext: Context must be used within a Provider');
  }
  return context;
}

export function useThemeStyles(componentName: string) {
  const { styles, stylesPropertiesName } = useThemeContext();
  return {
    styles: styles[componentName],
    stylesPropertiesName: stylesPropertiesName[componentName],
  };
}
