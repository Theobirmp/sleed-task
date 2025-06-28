import { createContext, useState } from 'react';
import ChildrenPropsType from '../types/ChildrenPropsType';
import darkModeContextType from '../types/DarkModeContextType';
import { darkMode } from '../types/DarkModeContextType';
export const DarkModeContext = createContext<darkModeContextType | null>(null);

export const DarkModeProvider = ({ children }: ChildrenPropsType) => {
  const [darkMode, setDarkMode] = useState<darkMode>('light');
  const toggleDarkMode = () => {
    darkMode === 'light' ? setDarkMode('dark') : setDarkMode('light');
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`${darkMode}`}>{children}</div>
    </DarkModeContext.Provider>
  );
};
