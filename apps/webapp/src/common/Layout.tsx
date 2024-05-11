import { Outlet } from 'react-router-dom';

import { ClipboardCheckIcon, NavBar } from '@nx-todo-frontend/design-system';
import { useI18NContext } from '@nx-todo-frontend/i18n';

export default function Layout() {
  const { _ } = useI18NContext();

  const title = (
    <>
      <ClipboardCheckIcon width="28" height="28" />
      <span className="font-semibold text-xl tracking-tight">Todo</span>
    </>
  );
  const items = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About me' },
    { to: '/settings', label: 'Settings' },
  ];

  return (
    <>
      <NavBar title={title} items={items} />
      <Outlet />
    </>
  );
}
