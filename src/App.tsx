import Menu from './components/menu/Menu';
import ThemeButton from './components/themeButton/ThemeButton';
import useDarkTheme from './hooks/useDarkTheme';

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
      <ThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <Menu iconColor={darkTheme ? '#ECF0F3' : '#292D32'} />
    </div>
  );
}
