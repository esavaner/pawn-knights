import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

import { routes } from 'utils/routes';

import { Text } from '../Text/Text';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Navigation.scss';

export const Navigation = () => {
  const { t } = useTranslation('components');
  const links = [
    {
      path: routes.home,
      icon: <FaHome />,
      text: t('nav.home'),
    },
    {
      path: routes.room,
      icon: '',
      text: t('nav.vsPlayer'),
    },
    {
      path: routes.ai,
      icon: '',
      text: t('nav.vsAi'),
    },
    {
      path: routes.ranking,
      icon: '',
      text: t('nav.ranking'),
    },
  ];
  return (
    <nav className="nav">
      {links.map((link) => (
        <Link key={link.path} className="item" href={link.path}>
          {link.icon}
          {link.text}
        </Link>
      ))}
      <div className="item">
        <ThemeToggle />
      </div>
      <Text>abc</Text>
    </nav>
  );
};
