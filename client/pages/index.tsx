import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppLayout } from 'components/AppLayout/AppLayout';
import { Button } from 'components/Button/Button';

export default function Home() {
  return (
    <AppLayout>
      <div>test</div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button>Test</Button>
        <Button secondary>Test</Button>
      </div>
    </AppLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['components'])),
  },
});
