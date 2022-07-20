import Menu from './components/menu/Menu';
import ThemeButton from './components/themeButton/ThemeButton';

export default function App() {
  return (
    <div
      className={`
    h-screen 
    bg-nue
    dark:bg-black-nue 
    transition-colors
    duration-500
    flex`}>
      <ThemeButton />
      <Menu />
    </div>
  );
}
