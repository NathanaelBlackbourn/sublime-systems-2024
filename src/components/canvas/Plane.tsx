import { MeshDistortMaterial } from '@react-three/drei';
import { TextureLoader } from 'three';

import { vertex, fragment } from '@/shaders/wave';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Plane = () => {
  const uniforms = useRef({
    uTime: { value: 0 },
    uAlphaMap: {
      value: new TextureLoader().load('/textures/landing-texture.jpg'),
    },
  });

  useFrame(() => {
    uniforms.current.uTime.value += 0.01;
  });

  return (
    <mesh>
      <planeGeometry args={[10, 10, 30, 30]} />
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} needsUpdate />
    </mesh>
  );
};

export default Plane;
