import './Tile.scss';

type Props = {
  children?: React.ReactNode;
};

export const Tile = ({ children }: Props) => {
  return <section className="tile">{children}</section>;
};
