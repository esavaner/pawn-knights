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
                  // left: '-100%',
                },
                animate: {
                  top: '0vh',
                  // left: 0,
                },
                exit: {
                  top: '-100vh',
                  // left: '100%',
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
      <Navigation />
    </ThemeProvider>
  );
};
