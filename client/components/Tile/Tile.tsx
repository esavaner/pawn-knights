import { classNames } from 'utils/classNames';

import './Tile.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Tile = ({ children, className }: Props) => {
  return (
    <section className={classNames('tile', className)}>{children}</section>
  );
};
