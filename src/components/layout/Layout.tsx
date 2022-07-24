import { Outlet } from 'react-router-dom';
import Menu from '../menu/Menu';
import Surface from '../surface/Surface';
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
    w-full
    dark:bg-black-nue 
    transition-colors
    duration-500
    flex
    flex-col
   `}>
      <Surface square classes="flex justify-between items-center px-4 sticky top-0">
        <h1 className="text-yellow-500 font-bold text-lg">TopBar</h1>
        <ThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Surface>
      <Outlet />
      <Menu darkTheme={darkTheme} />
    </div>
  );
}
