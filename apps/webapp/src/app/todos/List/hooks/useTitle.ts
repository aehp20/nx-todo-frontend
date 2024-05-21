import { useI18NContext } from '@nx-todo-frontend/i18n';
import { PaginationResponse, Todo } from '@nx-todo-frontend/models';

export function useTitle(paginationResponse?: PaginationResponse<Todo>) {
  const { _ } = useI18NContext();

  return paginationResponse?.meta
    ? _('Todos ({count})', {
        count: paginationResponse.meta.totalItems,
      })
    : _('Todos');
}
