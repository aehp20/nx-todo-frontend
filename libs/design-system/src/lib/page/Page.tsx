import classNames from 'classnames';
import { ReactNode } from 'react';
import { useTitle } from 'react-use';

import Title from '../title/Title';

export type PageProps = {
  children: ReactNode;
  title: string;
  backLink?: ReactNode;
  actions?: ReactNode;
  mainClassName?: string;
};

export default function Page(props: PageProps) {
  const { children, title, backLink, actions, mainClassName } = props;

  useTitle(title);

  return (
    <>
      <header role="banner" className="px-6 py-3">
        {backLink ? (
          backLink
        ) : actions ? (
          <div className="flex items-center justify-between">
            <Title>{title}</Title>
            {actions}
          </div>
        ) : (
          <Title>{title}</Title>
        )}
      </header>
      <main role="main" className={classNames('px-6 pt-1 pb-6', mainClassName)}>
        {children}
      </main>
    </>
  );
}
