import { Piece } from 'models/game';

import figures from 'public/assets/figures/figures';

import './Board.scss';
import { Tile } from './Tile/Tile';
import letters from './letters';

type Props = {
  grid: Piece[][];
};

export const Board = ({ grid }: Props) => {
  // const {}

  const board = grid
    .map((row, i) =>
      row.map((piece, j) => (
        <Tile
          key={`piece_${i}_${j}`}
          piece={figures[piece]}
          tileIndex={letters[j] + (8 - i)}
        />
      ))
    )
    .flat();

  return (
    <div className="board-container">
      <div className="board">{board}</div>
    </div>
  );
};
