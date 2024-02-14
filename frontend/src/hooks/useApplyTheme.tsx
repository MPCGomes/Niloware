import { useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';

const useApplyTheme = () => {
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(`${theme}-theme`);
  }, [theme]);
};

export default useApplyTheme;
