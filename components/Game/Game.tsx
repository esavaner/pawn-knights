import { Piece } from 'models/game';

import { Board } from 'components/Board/Board';
import { Moves } from 'components/Moves/Moves';
import { Timer } from 'components/Timer/Timer';

import './Game.scss';

type Props = {
  grid: Piece[][];
};

const moveMock = ['abcd', 'efgh', 'ijkl'];

export const Game = ({ grid }: Props) => {
  return (
    <div className="game-container">
      <Moves list={moveMock} />
      <div className="game">
        <Timer initial={6000} left={4000} userName="Player 1" />
        <Board grid={grid} />
        <Timer initial={6000} left={4000} active userName="Player 2" />
      </div>
    </div>
  );
};
