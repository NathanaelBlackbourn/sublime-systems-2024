'use client';

import classes from './HtmlOutlet.module.scss';

import { Html } from '@react-three/drei';

const HtmlOutlet = () => {
  return (
    <mesh>
      <planeGeometry />
      <meshBasicMaterial transparent opacity={0} />
      <Html transform zIndexRange={[1, 0]} className={classes['html-portal']}>
        <h1>Hej</h1>
      </Html>
    </mesh>
  );
};

export default HtmlOutlet;
