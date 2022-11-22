import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { classNames } from '../../utils/classNames';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className={classNames(styles.container)}>
      <button
        className={classNames(styles.toggle)}
        onClick={() => setTheme('navy')}
      />
      <button
        className={classNames(styles.toggle, styles.light)}
        onClick={() => setTheme('light')}
      />
    </div>
  );
};
