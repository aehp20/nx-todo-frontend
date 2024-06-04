import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useApp } from './useApp';

const Layout = lazy(() => import('./Layout'));
const Create = lazy(() => import('../app/todos/Form/Create'));
const Update = lazy(() => import('../app/todos/Form/Update'));
const ListTodo = lazy(() => import('../app/todos/List'));
const Home = lazy(() => import('../app/home'));
const About = lazy(() => import('../app/about'));
const Settings = lazy(() => import('../app/settings'));
const NoMatch = lazy(() => import('./NoMatch'));

type AppProps = {
  ToastContainer: React.FunctionComponent;
};

export default function App(props: Readonly<AppProps>) {
  const { ToastContainer } = props;

  useApp();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/todos" element={<ListTodo />} />
          <Route path="/todos/create" element={<Create />} />
          <Route path="/todos/update/:id" element={<Update />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
