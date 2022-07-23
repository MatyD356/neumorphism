import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import useDarkTheme from './hooks/useDarkTheme';
import NoMatch from './view/404/NoMatch';
import Bookmarks from './view/bookmarks/Bookmarks';
import Home from './view/home/Home';
import Write from './view/write/Write';

export default function App() {
  const [darkTheme, toggleTheme] = useDarkTheme();

  return (
    <div
      className={`
    h-screen 
    bg-nue
    dark:bg-black-nue 
    transition-colors
    duration-500
    flex`}>
      <Routes>
        <Route path="/" element={<Layout darkTheme={darkTheme} toggleTheme={toggleTheme} />}>
          <Route index element={<Home />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="write" element={<Write />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
