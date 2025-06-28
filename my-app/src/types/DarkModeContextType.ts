export type darkMode = 'light' | 'dark';
type darkModeContextType = {
  darkMode: darkMode;
  toggleDarkMode: () => void;
};
export default darkModeContextType;
