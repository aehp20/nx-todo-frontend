import { ReactNode, useState } from 'react';

import { ConfirmationDialog } from './ConfirmationDialog';

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
  labelNoButton: string;
  labelYesButton: string;
};

export function Confirmation(props: ConfirmationProps) {
  const [open, setOpen] = useState(false);

  const { title, content, children, onConfirm, labelNoButton, labelYesButton } =
    props;

  return (
    <div>
      <div className="flex">
        {children({ isOpen: open, displayConfirmation: setOpen })}
      </div>
      <ConfirmationDialog
        title={title}
        isOpen={open}
        displayConfirmation={setOpen}
        onConfirm={onConfirm}
        labelNoButton={labelNoButton}
        labelYesButton={labelYesButton}
      >
        {content}
      </ConfirmationDialog>
    </div>
  );
}
