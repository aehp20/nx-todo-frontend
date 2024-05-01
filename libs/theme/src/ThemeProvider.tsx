import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import {
  StylesProps,
  StylesPropertiesNameProps,
  styles,
  stylesPropertiesName,
} from './styles';
import { themes } from './themes';
import { componentsName } from './componentsName';

type ThemeProviderValue = {
  theme: string;
  setTheme: (theme: string) => void;
  styles: StylesProps;
  stylesPropertiesName: StylesPropertiesNameProps;
};

type ThemeProviderProps = {
  theme?: string;
  children: ReactNode;
};

const ThemeContext = createContext<ThemeProviderValue>(
  {} as ThemeProviderValue,
);

export function ThemeProvider(props: ThemeProviderProps) {
  const { theme: initialTheme = themes.light, children } = props;

  const [theme, setTheme] = useState(initialTheme);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      styles: styles[theme],
      stylesPropertiesName,
    }),
    [theme, setTheme],
  );

  const appStyles = styles[theme][componentsName.app];

  const { BG_COLOR, COLOR } = stylesPropertiesName[componentsName.app];

  document.body.style.background = appStyles[BG_COLOR];
  document.body.style.color = appStyles[COLOR];

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeStyles(componentName: string) {
  const { styles, stylesPropertiesName } = useContext(ThemeContext);
  return {
    styles: styles[componentName],
    stylesPropertiesName: stylesPropertiesName[componentName],
  };
}
