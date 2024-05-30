import { useThemeContext } from '@nx-todo-frontend/theme';

import { lazy, Suspense } from 'react';

const LightToastContainer = lazy(() => import('./lightToast'));
const DarkToastContainer = lazy(() => import('./darkToast'));

export function ToastContainer() {
  const { isLightTheme, isDarkTheme } = useThemeContext();

  return (
    <Suspense>
      {isLightTheme && <LightToastContainer />}
      {isDarkTheme && <DarkToastContainer />}
    </Suspense>
  );
}
