import { Piece } from 'models/game';

import { Board } from 'components/Board/Board';
import { Moves } from 'components/Moves/Moves';
import { Tile } from 'components/Tile/Tile';
import { Timer } from 'components/Timer/Timer';

import './Game.scss';

type Props = {
  grid: Piece[][];
};

const moveMock = ['abcd', 'efgh', 'ijkl'];

export const Game = ({ grid }: Props) => {
  return (
    <div className="game-container">
      <div className="game">
        <Timer initial={6000} left={4000} userName="Player 1" />
        <Tile>
          <Board grid={grid} />
        </Tile>
        <Timer initial={6000} left={4000} active userName="Player 2" />
      </div>
      <Moves list={moveMock} />
    </div>
  );
};
