import classNames from 'classnames';
import { ReactNode } from 'react';
import { useTitle } from 'react-use';

import '../../../styles.css';

export type PageProps = {
  children: ReactNode;
  title?: string;
  headerContent: ReactNode;
  mainClassName?: string;
};

export default function Page(props: Readonly<PageProps>) {
  const { children, title, headerContent, mainClassName } = props;

  useTitle(title || '');

  return (
    <>
      <header role="banner" className="px-6 py-3">
        {headerContent}
      </header>
      <main role="main" className={classNames('px-6 pt-1 pb-6', mainClassName)}>
        {children}
      </main>
    </>
  );
}
