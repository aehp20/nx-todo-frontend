import { ReactNode } from 'react';

export type ActionItem = {
  content: ReactNode;
  onClick: () => void;
};
