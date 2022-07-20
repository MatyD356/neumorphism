import { useEffect, useState } from 'react';
import { getParsedItem, LOCAL_STORAGE_KEYS } from '../helpers/localStorage';

export default function useDarkTheme(): [boolean | null, () => void] {
  const [darkTheme, setDarkTheme] = useState(getParsedItem<boolean>(LOCAL_STORAGE_KEYS.DARK_THEME));

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.DARK_THEME, JSON.stringify(darkTheme));
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return [darkTheme, toggleTheme];
}
