import { Routes, Route } from 'react-router-dom';
import Layout from '../common/Layout';
import NoMatch from '../common/NoMatch';
import List from './todos/List';
import Create from './todos/Create';
import Update from './todos/Update';
import Settings from './settings';
import About from './about';

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
