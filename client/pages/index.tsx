import { Piece } from 'models/game';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppLayout } from 'components/AppLayout/AppLayout';
import { Board } from 'components/Board/Board';
import { Button } from 'components/Button/Button';
import { Timer } from 'components/Timer/Timer';

const mockGrid: Piece[][] = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

export default function HomePage() {
  return (
    <AppLayout>
      <div>test</div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button>Test</Button>
        <Button secondary>Test</Button>
      </div>
      <Timer initial={6000} left={4000} />
      <Timer initial={6000} left={4000} active />
      <Board grid={mockGrid} />
    </AppLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['components'])),
  },
});
