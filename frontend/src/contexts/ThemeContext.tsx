import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => useContext(ThemeContext) as ThemeContextType;

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') as Theme || 'light');

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', '#2f70ca');
    root.style.setProperty('--secondary-color', '#143d76');
    root.style.setProperty('--accent-color', '#1356b4');
    root.style.setProperty('--background-color', theme === 'light' ? '#f3f8fc' : '#03080c');
    root.style.setProperty('--background-color-opposite', theme === 'light' ? '#03080c' : '#f3f8fc');
    root.style.setProperty('--hover-color', theme === 'light' ? '#ffffff' : '#404040');
    root.style.setProperty('--text-color', theme === 'light' ? '#04070b' : '#f4f7fb');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
