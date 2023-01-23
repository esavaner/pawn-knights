import { MoveList } from 'models/game';

import { Tile } from 'components/Tile/Tile';

type Props = {
  list: MoveList;
};

export const Moves = ({ list }: Props) => {
  return <Tile className="moves-container">{list}</Tile>;
};
