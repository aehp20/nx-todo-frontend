import { FontCard, Label } from '@nx-todo-frontend/design-system';
import { fontNames, useFontsContext } from '@nx-todo-frontend/fonts';
import { useI18NContext } from '@nx-todo-frontend/i18n';

export function FontField() {
  const { fontFamily, setFontFamily } = useFontsContext();

  const { _ } = useI18NContext();

  const handleClick = (fontFamily: string) => {
    setFontFamily(fontFamily);
  };

  return (
    <div className="flex flex-col w-1/2 md:w-1/4 gap-1">
      <Label htmlFor="theme">{_('Font')}</Label>
      <div className="flex gap-2">
        {fontNames.map((fontName) => {
          return (
            <FontCard
              key={fontName}
              fontName={fontName}
              isSelected={fontFamily === fontName}
              onClick={() => handleClick(fontName)}
            />
          );
        })}
      </div>
    </div>
  );
}
