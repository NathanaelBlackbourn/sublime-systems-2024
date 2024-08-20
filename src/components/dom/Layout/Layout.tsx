'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import classes from './Layout.module.scss';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });
const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false });
const Room = dynamic(() => import('@/components/canvas/Room'), { ssr: false });
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
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

  return (
    <div ref={ref} className={classes.container}>
      {children}
      <View className='absolute top-0 flex h-screen w-full flex-col items-center justify-center' orbit>
        <Blob />
        <Room />
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
      <h1 className={classes.header}>
        This site belongs to me, Nathanael Blackbourn, a web developer living in Gothenburg.
      </h1>
      <p className={classes.body}>
        I&apos;m building something here. For now, if you would like to know more about me feel free to{' '}
        <a className={classes.email} href={'mailto:nathanaelblackbourn@gmail.com'}>
          email
          <span className={classes.form}>
            <div className={classes['icon-container']}>
              <ArrowUpRight className={classes.arrow} />
            </div>
          </span>
        </a>{' '}
        me.
      </p>
    </div>
  );
};

export { Layout };