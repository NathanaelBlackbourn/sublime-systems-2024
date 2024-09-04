import { MeshDistortMaterial } from '@react-three/drei';

import { vertex, fragment } from '@/shaders/wave';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Plane = () => {
  const uniforms = useRef({
    uTime: { value: 0 },
  });

  useFrame(() => {
    uniforms.current.uTime.value += 0.01;
  });

  return (
    <mesh>
      <planeGeometry args={[10, 10, 30, 30]} />
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} wireframe />
    </mesh>
  );
};

export default Plane;
