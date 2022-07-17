import Button from "./components/button/Button";
import ThemeButton from "./components/themeButton/ThemeButton";
import useDarkTheme from "./hooks/useDarkTheme";

export default function App() {
  const [darkTheme] = useDarkTheme()
  return (
    <div className={`
    ${darkTheme ? 'dark' : ''}
    h-screen 
    bg-nue
    dark:bg-black-nue 
    transition-colors
    duration-500
    flex 
    items-center`
    } >
      <div className="
      flex 
      w-1/6 
      h-5/6 
      m-8 
      bg-nue
      dark:bg-black-nue 
      rounded-xl
      transition-all
      shadow-nue
      hover:shadow-nue-inset
      dark:shadow-nue-black
      dark:hover:shadow-nue-black-inset
      duration-500">
      </div>
      <ThemeButton />
    </div>
  );
}
