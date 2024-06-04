import { ConfirmationDialog } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

type DialogProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  id: number;
  handleDelete: (id: number) => void;
};

export function Dialog(props: Readonly<DialogProps>) {
  const { isOpen, setIsOpen, id, handleDelete } = props;

  const { _ } = useI18NContext();

  return (
    <ConfirmationDialog
      title={_('Delete Todo?')}
      isOpen={isOpen}
      displayConfirmation={setIsOpen}
      onConfirm={() => handleDelete(id)}
      labelNoButton={_('No')}
      labelYesButton={_('Yes')}
    >
      {_('Are you sure you want to delete this todo?')}
    </ConfirmationDialog>
  );
}
