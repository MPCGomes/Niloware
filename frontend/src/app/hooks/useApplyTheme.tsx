import { useEffect } from 'react';
import { useAppSelector } from '../hooks';

const useApplyTheme = () => {
  const theme = useAppSelector((state) => state.theme.mode);

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
};

export default useApplyTheme;
