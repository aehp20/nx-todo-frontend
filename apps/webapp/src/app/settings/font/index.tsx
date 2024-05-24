import { Button, Label } from '@nx-todo-frontend/design-system';
import { useFontsContext } from '@nx-todo-frontend/fonts';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import classNames from 'classnames';

export function FontField() {
  const { fontFamily, setFontFamily } = useFontsContext();

  const { _ } = useI18NContext();

  const handleClick = (fontFamily: string) => {
    setFontFamily(fontFamily);
  };

  return (
    <div className="flex flex-col w-1/2 md:w-1/4 gap-1">
      <Label htmlFor="theme">{_('Theme')}</Label>
      <div className="flex gap-2">
        <div
          className={classNames(
            "flex flex-col gap-2 font-['Lora']",
            fontFamily === 'Lora' && 'font-bold',
          )}
        >
          <div className="text-4xl">Ag</div>
          <Button onClick={() => handleClick('Lora')}>Lora</Button>
        </div>
        <div
          className={classNames(
            "flex flex-col gap-2 font-['Mina']",
            fontFamily === 'Mina' && 'font-bold',
          )}
        >
          <div className="text-4xl">Ag</div>
          <Button onClick={() => handleClick('Mina')}>Mina</Button>
        </div>
        <div
          className={classNames(
            "flex flex-col gap-2 font-['Poppins']",
            fontFamily === 'Poppins' && 'font-bold',
          )}
        >
          <div className="text-4xl">Ag</div>
          <Button onClick={() => handleClick('Poppins')}>Poppins</Button>
        </div>
      </div>
    </div>
  );
}
