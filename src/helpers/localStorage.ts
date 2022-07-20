export const LOCAL_STORAGE_KEYS = {
  DARK_THEME: 'DARK_THEME'
};

export function getParsedItem<T>(key: string): T | null {
  const theme = localStorage.getItem(key);
  return theme ? JSON.parse(theme) : null;
}
