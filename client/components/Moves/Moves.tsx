import { MoveList } from 'models/game';

import { Tile } from 'components/Tile/Tile';

type Props = {
  moveList: MoveList;
};

export const Moves = ({ moveList }: Props) => {
  <Tile>{moveList}</Tile>;
};
