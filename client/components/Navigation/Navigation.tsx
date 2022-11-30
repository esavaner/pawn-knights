import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FaChessKnight,
  FaGraduationCap,
  FaHome,
  FaMedal,
} from 'react-icons/fa';

import { Logo } from 'components/Logo/Logo';
import { Text } from 'components/Text/Text';

import { classNames } from 'utils/classNames';
import { routes } from 'utils/routes';

import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import './Navigation.scss';

export const Navigation = () => {
  const { t } = useTranslation('components');
  const router = useRouter();
  const links = [
    {
      path: routes.home,
      icon: <FaHome />,
      text: t('nav.home'),
    },
    {
      path: routes.room,
      icon: <FaChessKnight />,
      text: t('nav.vsPlayer'),
    },
    {
      path: routes.ai,
      icon: <FaGraduationCap />,
      text: t('nav.vsAi'),
    },
    {
      path: routes.ranking,
      icon: <FaMedal />,
      text: t('nav.ranking'),
    },
  ];
  return (
    <nav className="nav">
      <Logo />
      {links.map((link) => (
        <Text.Link
          key={link.path}
          className={classNames('item', {
            active: router.pathname === link.path,
          })}
          href={link.path}
          bold
        >
          {link.icon}
          {link.text}
        </Text.Link>
      ))}
      <div className="item">
        <ThemeToggle />
      </div>
    </nav>
  );
};
