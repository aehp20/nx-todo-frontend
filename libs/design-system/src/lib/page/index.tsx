import { ReactNode } from 'react';
import { useTitle } from 'react-use';

import Title from '../title';

export type PageProps = {
  children: ReactNode;
  title: string;
  backLink?: ReactNode;
  actions?: ReactNode;
};

export default function Page(props: PageProps) {
  const { children, title, backLink, actions } = props;

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
      <main role="main" className="px-6 pt-1 pb-6">
        {children}
      </main>
    </>
  );
}
