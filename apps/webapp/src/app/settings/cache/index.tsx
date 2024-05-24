import {
  Button,
  Label,
  RefreshDoubleIcon,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { useThemeContext } from '@nx-todo-frontend/theme';

const APP_LOCALE = import.meta.env.VITE_APP_LOCALE;
const APP_THEME = import.meta.env.VITE_APP_THEME;

export function CacheField() {
  const { setTheme } = useThemeContext();

  const { _, setLocale } = useI18NContext();

  const handleClick = () => {
    setLocale(APP_LOCALE);
    setTheme(APP_THEME);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="theme">{_('Cache')}</Label>

      <Button
        icon={<RefreshDoubleIcon className="!w-5 !h-5" />}
        onClick={handleClick}
      >
        {_('Clear Cache')}
      </Button>
    </div>
  );
}
