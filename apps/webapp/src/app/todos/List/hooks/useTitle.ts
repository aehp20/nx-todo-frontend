import { useI18NContext } from '@nx-todo-frontend/i18n';

export function useTitle(totalItems?: number) {
  const { _ } = useI18NContext();

  return totalItems
    ? _('Todos ({totalItems})', {
        totalItems,
      })
    : _('Todos');
}
