import { Card } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';
import { Todo } from '@nx-todo-frontend/models';

type SummaryProps = {
  todo?: Todo;
};

export function Summary(props: Readonly<SummaryProps>) {
  const { todo } = props;

  const { _ } = useI18NContext();

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div>
          {_('Created at:')} {todo ? todo.createdAtDateTimeFormat : ''}
        </div>
        <div>
          {_('Updated at:')} {todo ? todo.updatedAtDateTimeFormat : ''}
        </div>
      </div>
    </Card>
  );
}
