import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import { AppLayout } from 'components/AppLayout/AppLayout';

import '../styles/globals.scss';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <AppLayout router={router}>
      <Component {...pageProps} key={router.asPath} />
    </AppLayout>
  );
}

export default appWithTranslation(App);
