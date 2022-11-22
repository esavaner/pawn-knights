import { Navigation } from 'components/Navigation/Navigation';

import './AppLayout.scss';

type Props = {
  children?: React.ReactNode;
};

export const AppLayout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="content">{children}</main>
    </div>
  );
};
