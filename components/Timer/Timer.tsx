import { Text } from 'components/Text/Text';

import './Timer.scss';

type Props = {
  left: number;
  initial: number;
  active?: boolean;
  userName: string;
};

export const Timer = ({ left, initial, active, userName }: Props) => {
  const formatTime = (time: number) =>
    `${Math.floor((time % (10 * 60 * 60)) / (10 * 60))}m ${Math.floor(
      (time % (10 * 60)) / 10
    )}s ${Math.floor(time % 10)}`;

  return (
    <div className="timer-container">
      <Text.H3
        className="timer-username"
        variant={active ? undefined : 'lighter'}
      >
        {userName}
      </Text.H3>
      <div className="timer-outer">
        <div
          className="timer-inner"
          style={{ width: `${(left * 100) / initial}%` }}
        />
      </div>
      <Text className="timer-counter" variant={active ? undefined : 'lighter'}>
        {formatTime(left)}
      </Text>
    </div>
  );
};
