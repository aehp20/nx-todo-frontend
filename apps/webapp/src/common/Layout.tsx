import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ClipboardCheckIcon, NavBar } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

export default function Layout() {
  const { _ } = useI18NContext();

  const title = (
    <>
      <ClipboardCheckIcon width="28" height="28" />
      <span className="font-semibold text-xl tracking-tight">{_('Todo')}</span>
    </>
  );
  const items = [
    { to: '/', label: _('Home') },
    { to: '/about', label: _('About me') },
    { to: '/settings', label: _('Settings') },
  ];

  return (
    <>
      <NavBar title={title} items={items} />
      <Suspense fallback={_('Loading...')}>
        <Outlet />
      </Suspense>
    </>
  );
}
