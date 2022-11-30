import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { Router } from 'next/router';

import { Navigation } from 'components/Navigation/Navigation';

import './AppLayout.scss';

type Props = {
  children?: React.ReactNode;
  router: Router;
};

export const AppLayout = ({ children, router }: Props) => {
  return (
    <ThemeProvider themes={['navy', 'light']} defaultTheme="navy">
      <Navigation />
      <main className="content">
        <LazyMotion features={domAnimation}>
          <AnimatePresence initial={false}>
            <m.article
              key={router.route.concat('slide')}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: {
                  top: '100vh',
                },
                animate: {
                  top: '0vh',
                },
                exit: {
                  top: '-100vh',
                },
              }}
              transition={{
                duration: 0.5,
              }}
            >
              {children}
            </m.article>
          </AnimatePresence>
        </LazyMotion>
      </main>
    </ThemeProvider>
  );
};
