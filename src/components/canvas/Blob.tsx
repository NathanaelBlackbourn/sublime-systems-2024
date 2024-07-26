import * as THREE from 'three';

import { useCubeTexture } from '@react-three/drei';

const Blob = ({ route = '/', ...props }) => {
  const refractionMap = useCubeTexture(new Array(6).fill('panel.png'), {
    path: 'img/environment/',
  });

  const reflectionMap = useCubeTexture(new Array(6).fill('panel.png'), {
    path: 'img/environment/',
  });

  refractionMap.mapping = THREE.CubeRefractionMapping;
  reflectionMap.mapping = THREE.CubeReflectionMapping;

  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial color={'0xccfffd'} envMap={refractionMap} refractionRatio={0.985} reflectivity={1} />
    </mesh>
  );
};

export default Blob;
