import { Link } from 'react-router-dom';

import {
  ActionItem,
  CardWithActions,
  TextDelete,
} from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { Todo } from '@nx-todo-frontend/types';

type CardProps = {
  todo: Todo;
  setIsOpen: (value: boolean) => void;
};

export function Card(props: CardProps) {
  const { todo, setIsOpen } = props;
  const { id, name, isDone } = todo;

  const { _ } = useI18NContext();

  const actions: ActionItem[] = [
    {
      onClick: () => setIsOpen(true),
      content: <TextDelete>{_('Delete')}</TextDelete>,
    },
  ];

  return (
    <CardWithActions actions={actions}>
      <div className="flex flex-col gap-2">
        <div className="font-bold">
          <Link to={`/update/${id}`}>{name}</Link>
        </div>
        <div>
          {id} - {_('IS DONE?')} {isDone ? _('Yes') : _('No')}
        </div>
      </div>
    </CardWithActions>
  );
}
