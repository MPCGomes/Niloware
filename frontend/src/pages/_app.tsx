import { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import '../styles/globals.scss';
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    document.body.className = storedTheme || 'light';
    setTheme(storedTheme || 'light');
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
