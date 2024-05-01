import { Outlet } from 'react-router-dom';

import { useI18NContext } from '@nx-todo-frontend/i18n';
import { IconClipboardCheck, NavBar } from '@nx-todo-frontend/design-system';

export default function Layout() {
  const { _ } = useI18NContext();

  const title = (
    <>
      <IconClipboardCheck width="28" height="28" />
      <span className="font-semibold text-xl tracking-tight">Todo</span>
    </>
  );
  const items = [
    { to: '/', label: 'Home' },
    { to: '/', label: 'Settings' },
    { to: '/', label: 'About' },
  ];

  return (
    <>
      <NavBar title={title} items={items} />
      <Outlet />
    </>
  );
}
