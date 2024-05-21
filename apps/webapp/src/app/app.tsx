import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Layout = lazy(() => import('../common/Layout'));
const Create = lazy(() => import('./todos/Form/Create'));
const Update = lazy(() => import('./todos/Form/Update'));
const ListTodo = lazy(() => import('./todos/List'));
const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const Settings = lazy(() => import('./settings'));
const NoMatch = lazy(() => import('../common/NoMatch'));

export default function App() {
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
