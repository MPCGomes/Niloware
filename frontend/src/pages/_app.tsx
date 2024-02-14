import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import AppStateWrapper from '@/components/AppStateWrapper';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppStateWrapper>
        <Component {...pageProps} />
      </AppStateWrapper>
    </Provider>
  );
}

export default MyApp;
