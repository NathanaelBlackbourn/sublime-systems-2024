'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import classes from './Layout.module.scss';
import IconText from '../dom/IconText/IconText';
import Nav from '../dom/Nav/Nav';
import Button from '../dom/Button/Button';
import { usePathname } from 'next/navigation';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });
// const Room = dynamic(() => import('@/components/canvas/Room'), { ssr: false });
const HtmlOutlet = dynamic(() => import('@/components/canvas/HtmlOutlet/HtmlOutlet'), { ssr: false });
const WaveLayer = dynamic(() => import('@/components/canvas/WaveLayer/WaveLayer'), { ssr: false });
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className={classes['loading-container']}>
      <svg className={classes['loading-icon']} fill='none' viewBox='0 0 24 24'>
        <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
});

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false });

const Layout = ({ children }) => {
  const ref = useRef();

  const path = usePathname();

  return (
    <div ref={ref} className={classes['container']}>
      <View className={classes['view']}>
        <HtmlOutlet />
        <WaveLayer />
        <Common />
      </View>

      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
      {children}

      <Nav />

      <div className={classes['icon-text-lower']}>
        <IconText icon={'mapPin'}>Gothenburg</IconText>
        <div className={classes['briefcase-container']}>
          <IconText icon={'briefcase'}>Looking for employment or freelance work</IconText>
        </div>
      </div>

      <div className={classes['button-container']}>
        <Button
          icon={'download'}
          hasBackground={path !== '/'}
          onClick={() => window.open('/docs/CV_Nathanael-Blackbourn_en.pdf', '_blank')}
        >
          Download my CV
        </Button>
        <Button
          icon={'arrowUpRight'}
          hasBackground={path !== '/'}
          onClick={() => window.open('mailto:nathanaelblackbourn@gmail.com')}
        >
          Email me
        </Button>
      </div>
    </div>
  );
};

export { Layout };
