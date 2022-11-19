import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { routes } from '../../utils/routes';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import style from './Navigation.module.scss';

export const Navigation = () => {
  const { t } = useTranslation('components');
  const links = [
    {
      path: routes.home,
      icon: '',
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
      text: t('nav.vsBot'),
    },
    {
      path: routes.ranking,
      icon: '',
      text: t('nav.Ranking'),
    },
  ];
  return (
    <ul className={style.nav}>
      {links.map((link) => (
        <li key={link.path} className={style.item}>
          <Link href={link.path}>{link.text}</Link>
        </li>
      ))}
      <li className={style.item}>
        <ThemeToggle />
      </li>
    </ul>
  );
};
