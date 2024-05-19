import { useI18NContext } from '@nx-todo-frontend/i18n';
import { TodoList } from '@nx-todo-frontend/models';

export function useTitle(data?: TodoList) {
  const { _ } = useI18NContext();

  return data?.allCount
    ? _('Todos ({count})', {
        count:
          data.allCount === data.filteredCount
            ? data.allCount
            : `${data.filteredCount}/${data.allCount}`,
      })
    : _('Todos');
}
