'use client';

import classes from './HtmlOutlet.module.scss';

import { Html } from '@react-three/drei';
import htmlTunnel from './HtmlTunnel';

const HtmlOutlet = () => {
  return (
    <mesh>
      <planeGeometry />
      <meshBasicMaterial transparent opacity={0} />
      <Html transform zIndexRange={[1, 0]} className={classes['html-portal']}>
        <htmlTunnel.Out />
      </Html>
    </mesh>
  );
};

export default HtmlOutlet;
