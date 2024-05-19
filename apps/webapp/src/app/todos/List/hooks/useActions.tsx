import { Button, PlusIcon } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

import { useNavigate } from 'react-router-dom';

export function useActions() {
  const navigate = useNavigate();

  const { _ } = useI18NContext();

  const actions = (
    <Button icon={<PlusIcon />} onClick={() => navigate('/create')}>
      {_('Add')}
    </Button>
  );

  return actions;
}
