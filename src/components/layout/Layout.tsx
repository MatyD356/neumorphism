import { Outlet } from 'react-router-dom';
import Menu from '../menu/Menu';
import ThemeButton from '../themeButton/ThemeButton';

export default function Layout({
  darkTheme,
  toggleTheme
}: {
  darkTheme: boolean | null;
  toggleTheme: () => void;
}) {
  return (
    <div
      className={`
    h-screen 
    bg-nue
    dark:bg-black-nue 
    transition-colors
    duration-500
    flex`}>
      <ThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <Outlet />
      <Menu darkTheme={darkTheme} />
    </div>
  );
}
