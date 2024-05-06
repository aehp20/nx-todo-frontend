import { ReactNode, useState } from 'react';

import Button from '../buttons/Button';
import Dialog from './Dialog';

import '../../styles.css';

type ChildrenProps = {
  isOpen: boolean;
  displayConfirmation: (isOpen: boolean) => void;
};

export type ConfirmationProps = {
  title: string;
  content: ReactNode;
  children: ({ isOpen, displayConfirmation }: ChildrenProps) => ReactNode;
  onConfirm: () => void;
};

export default function Confirmation(props: ConfirmationProps) {
  const [open, setOpen] = useState(false);

  const { title, content, children, onConfirm } = props;

  return (
    <div>
      <div className="flex">
        {children({ isOpen: open, displayConfirmation: setOpen })}
      </div>
      <Modal
        title={title}
        isOpen={open}
        displayConfirmation={setOpen}
        onConfirm={onConfirm}
      >
        {content}
      </Modal>
    </div>
  );
}

type ModalProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  displayConfirmation: (isOpen: boolean) => void;
  onConfirm: () => void;
};

const Modal = (props: ModalProps) => {
  const { title, children, isOpen, displayConfirmation, onConfirm } = props;

  const onClose = () => displayConfirmation(false);

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <h2 className="text-xl">{title}</h2>
      <div className="py-5">{children}</div>
      <div className="flex justify-end gap-2">
        <Button action="secondary" onClick={() => onClose()} className="px-5">
          No
        </Button>
        <Button
          onClick={() => {
            onClose();
            onConfirm();
          }}
          className="px-5"
        >
          Yes
        </Button>
      </div>
    </Dialog>
  );
};
