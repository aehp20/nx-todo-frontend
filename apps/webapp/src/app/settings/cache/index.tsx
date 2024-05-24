import { Button, Label, TrashIcon } from '@nx-todo-frontend/design-system';
import { useFontsContext } from '@nx-todo-frontend/fonts';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { useThemeContext } from '@nx-todo-frontend/theme';

const APP_LOCALE = import.meta.env.VITE_APP_LOCALE;
const APP_THEME = import.meta.env.VITE_APP_THEME;
const APP_FONT = import.meta.env.VITE_APP_FONT;

export function CacheField() {
  const { setTheme } = useThemeContext();
  const { _, setLocale } = useI18NContext();
  const { setFontFamily } = useFontsContext();

  const handleClick = () => {
    setLocale(APP_LOCALE);
    setTheme(APP_THEME);
    setFontFamily(APP_FONT);
  };

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="theme">{_('Cache')}</Label>
      <Button
        data-testid="btn-clear-cache"
        icon={<TrashIcon className="!w-5 !h-5" />}
        onClick={handleClick}
      >
        {_('Clear Cache')}
      </Button>
    </div>
  );
}
