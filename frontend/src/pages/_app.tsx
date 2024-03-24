import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/context/ThemeContext';
import '../styles/globals.scss';
import { store } from '../store/store';
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    document.body.className = storedTheme || 'light';
    setTheme(storedTheme || 'light');
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
