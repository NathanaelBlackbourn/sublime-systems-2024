import { MeshDistortMaterial } from '@react-three/drei';

const Blob = ({ route = '/', ...props }) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0.7} color={'#001aff'} />
    </mesh>
  );
};

export default Blob;
