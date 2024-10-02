import { MeshDistortMaterial } from '@react-three/drei';
import { TextureLoader } from 'three';

import { vertex, fragment } from '@/shaders/wave';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Plane = () => {
  const uniforms = useRef({
    uTime: { value: 0 },
    uAlphaMap: {
      value: new TextureLoader().load('/textures/layout-texture.jpg'),
    },
  });

  useFrame(() => {
    uniforms.current.uTime.value += 0.01;
  });

  return (
    <mesh>
      <planeGeometry args={[16, 9, 100, 100]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
        needsUpdate
        transparent
      />
    </mesh>
  );
};

export default Plane;
