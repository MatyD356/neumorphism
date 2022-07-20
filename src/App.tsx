import Surface from './components/surface/Surface';
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
      <Surface>
        <div>xd</div>
      </Surface>
      <ThemeButton />
    </div>
  );
}
