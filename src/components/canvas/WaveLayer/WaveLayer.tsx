import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

import { vertex, fragment } from '../../../shaders/wave';

const WaveLayer = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useRef({
    uTime: { value: 0 },
  });

  const { camera } = useThree() as { camera: THREE.PerspectiveCamera };

  useFrame(() => {
    if (meshRef.current) {
      const distance = camera.position.z - meshRef.current.position.z;
      const vFov = (camera.fov * Math.PI) / 180;
      const y = 2 * Math.tan(vFov / 2) * distance * 1.2;
      const x = y * camera.aspect * 1.2;
      meshRef.current.scale.set(x, y, 1);
    }

    uniforms.current.uTime.value += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1, 100, 100]} />
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current} />
    </mesh>
  );
};

export default WaveLayer;
