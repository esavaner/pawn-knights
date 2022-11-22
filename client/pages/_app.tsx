import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={['navy', 'light']} defaultTheme="navy">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
