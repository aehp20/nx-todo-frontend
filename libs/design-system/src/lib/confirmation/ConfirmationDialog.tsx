import { ReactNode } from 'react';
import { Button } from '../buttons';
import Dialog from './Dialog';

export type ConfirmationDialogProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  displayConfirmation: (isOpen: boolean) => void;
  onConfirm: () => void;
  labelNoButton: string;
  labelYesButton: string;
};

export const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const {
    title,
    children,
    isOpen,
    displayConfirmation,
    onConfirm,
    labelNoButton,
    labelYesButton,
  } = props;

  const onClose = () => displayConfirmation(false);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <h2 className="text-xl">{title}</h2>
      <div className="py-5">{children}</div>
      <div className="flex justify-end gap-2">
        <Button action="secondary" onClick={() => onClose()} className="px-5">
          {labelNoButton}
        </Button>
        <Button
          onClick={() => {
            onClose();
            onConfirm();
          }}
          className="px-5"
        >
          {labelYesButton}
        </Button>
      </div>
    </Dialog>
  );
};
