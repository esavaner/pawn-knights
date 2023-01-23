import Image from 'next/image';

import './Tile.scss';

type Props = {
  piece: string;
  tileIndex: string;
};

export const Tile = ({ piece, tileIndex }: Props) => {
  return (
    <div className="tile">
      <span className="tileIndex">{tileIndex}</span>
      <Image src={piece} width={1} height={1} alt={tileIndex} />
    </div>
  );
};
