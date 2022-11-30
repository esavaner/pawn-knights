import { Piece } from 'models/game';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Board } from 'components/Board/Board';
import { Tile } from 'components/Tile/Tile';
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
    <>
      {/* <div>test</div>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button>Test</Button>
        <Button secondary>Test</Button>
      </div> */}
      <Tile>
        <Timer initial={6000} left={4000} />
        <Board grid={mockGrid} />
        <Timer initial={6000} left={4000} active />
      </Tile>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['components'])),
  },
});
