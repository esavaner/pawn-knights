import { Piece } from 'models/game';

import { Board } from 'components/Board/Board';
import { Tile } from 'components/Tile/Tile';
import { Timer } from 'components/Timer/Timer';

import './Game.scss';

type Props = {
  grid: Piece[][];
};

export const Game = ({ grid }: Props) => {
  return (
    <>
      <>
        <Timer initial={6000} left={4000} />
        <Tile>
          <Board grid={grid} />
        </Tile>
        <Timer initial={6000} left={4000} active />
      </>
    </>
  );
};
