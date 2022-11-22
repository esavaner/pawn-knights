import { classNames } from 'utils/classNames';

import './Button.scss';

type Props = {
  secondary?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const Button = ({ secondary, className, children }: Props) => {
  return (
    <button className={classNames('btn', { secondary }, className)}>
      {children}
    </button>
  );
};
