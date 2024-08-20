import { MeshDistortMaterial } from '@react-three/drei';

const Blob = ({ route = '/', ...props }) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial color={'#1001d5'} distort={0.4} />
    </mesh>
  );
};

export default Blob;
