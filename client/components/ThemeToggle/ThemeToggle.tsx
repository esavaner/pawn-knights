import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import './ThemeToggle.scss';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="theme-toggle-containter">
      <button className="toggle" onClick={() => setTheme('navy')} />
      <button className="toggle light" onClick={() => setTheme('light')} />
    </div>
  );
};
