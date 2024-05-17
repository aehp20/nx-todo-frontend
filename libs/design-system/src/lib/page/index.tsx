import { ReactNode } from 'react';
import { useTitle } from 'react-use';

import Title from '../title';

export type PageProps = {
  children: ReactNode;
  title: string;
  backLink?: ReactNode;
};

export default function Page(props: PageProps) {
  const { children, title, backLink } = props;

  useTitle(title);

  return (
    <>
      <header className="px-6 py-3">
        {backLink ? backLink : <Title>{title}</Title>}
      </header>
      <main className="px-6 pt-1 pb-6">{children}</main>
    </>
  );
}
