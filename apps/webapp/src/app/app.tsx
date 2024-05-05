import { Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout';
import NoMatch from '../common/NoMatch';
import About from './about';
import Settings from './settings';
import Create from './todos/Form/Create';
import Update from './todos/Form/Update';
import List from './todos/List';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
