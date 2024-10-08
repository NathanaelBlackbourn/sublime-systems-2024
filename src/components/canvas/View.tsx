'use client';

import { forwardRef, HTMLAttributes, Suspense, useImperativeHandle, useRef } from 'react';
import { PerspectiveCamera, View as ViewImpl } from '@react-three/drei';
import { Three } from '@/helpers/components/Three';
import * as THREE from 'three';

type CommonProps = { color?: THREE.ColorRepresentation };

export const Common = ({ color }: CommonProps) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={3.5} />
    <pointLight position={[25, 0, 0]} intensity={8} decay={0.3} />
    <pointLight position={[-100, 0, 0]} intensity={8} decay={0.3} />
    <pointLight position={[0, 0, 0]} intensity={100} decay={1.2} />
    <PerspectiveCamera makeDefault position={[0, 0, 10]} />
  </Suspense>
);

type ViewProps = HTMLAttributes<HTMLDivElement> & {
  orbit?: boolean;
};

const View = forwardRef<HTMLElement, ViewProps>(({ children, ...props }, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>{children}</ViewImpl>
      </Three>
    </>
  );
});
View.displayName = 'View';

export { View };
