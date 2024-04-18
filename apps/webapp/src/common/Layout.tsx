import { Outlet, Link } from "react-router-dom";

import { useI18NContext } from "@nx-todo-frontend/i18n";

export default function Layout() {
  const { _ } = useI18NContext();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">List</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
