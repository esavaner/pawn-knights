import { classNames } from 'utils/classNames';

import './Timer.scss';

type Props = {
  left: number;
  initial: number;
  active?: boolean;
};

export const Timer = ({ left, initial, active }: Props) => {
  const formatTime = (time: number) =>
    `${Math.floor((time % (10 * 60 * 60)) / (10 * 60))}m ${Math.floor(
      (time % (10 * 60)) / 10
    )}s ${Math.floor(time % 10)}`;

  return (
    <div className={classNames('timer-container', { active })}>
      <div className="timer-outer">
        <div
          className="timer-inner"
          style={{ width: `${(left * 100) / initial}%` }}
        />
      </div>
      <span className="timer-counter">{formatTime(left)}</span>
    </div>
  );
};
