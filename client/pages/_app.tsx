import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Navigation } from '../components/Navigation/Navigation';
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={['navy', 'light']} defaultTheme="navy">
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
