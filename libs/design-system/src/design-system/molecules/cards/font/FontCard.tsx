import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';

import Card from '../base/Card';

export type FontCardProps = {
  fontName: string;
  isSelected: boolean;
  onClick: () => void;
};

export default function FontCard(props: Readonly<FontCardProps>) {
  const { fontName, isSelected, onClick } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(
    componentsName.fontCard,
  );

  const { AG_COLOR, NAME_COLOR } = stylesPropertiesName;

  const agColor = `text-${styles[AG_COLOR]}`;
  const nameColor = `text-${styles[NAME_COLOR]}`;

  return (
    <Card className="!p-0 !w-fit">
      <button
        className={classNames(
          `flex flex-col gap-2 cursor-pointer font-[${fontName}]`,
          'justify-content items-center',
          'py-3 px-6',
          isSelected && 'font-bold',
        )}
        onClick={onClick}
      >
        <div className={classNames('text-4xl', isSelected && agColor)}>Ag</div>
        <div className={classNames('text-sm', nameColor)}>{fontName}</div>
      </button>
    </Card>
  );
}
