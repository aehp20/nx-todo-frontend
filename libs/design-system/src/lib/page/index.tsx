import { ReactNode } from 'react';
import { useTitle } from 'react-use';

import Title from '../title';

export type PageProps = {
  children: ReactNode;
  title: string;
};

export default function Page(props: PageProps) {
  const { children, title } = props;

  useTitle(title);

  return (
    <>
      <header className="px-4 py-2">
        <Title>{title}</Title>
      </header>
      <main className="px-4 py-1">{children}</main>
    </>
  );
}
