import { componentsName, useThemeStyles } from '@nx-todo-frontend/theme';

import classNames from 'classnames';
import { ReactNode, useRef, useState } from 'react';

import Card from '../base/Card';

import { Actions } from './components/Actions';
import { ActionItem } from './types';

export type CardWithActionsProps = {
  children: ReactNode;
  className?: string;
  actions: ActionItem[];
};

export default function CardWithActions(props: CardWithActionsProps) {
  const { children, className, actions } = props;

  const { styles, stylesPropertiesName } = useThemeStyles(componentsName.card);

  const [isOpen, setIsOpen] = useState(false);

  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <Card className={classNames('p-0', className)}>
      <div className="relative">
        <div className="absolute right-0 top-[-6px]">
          <Actions
            nodeRef={nodeRef}
            actions={actions}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            styles={styles}
            stylesPropertiesName={stylesPropertiesName}
          />
        </div>
      </div>
      <div className="flex flex-col">{children}</div>
    </Card>
  );
}
