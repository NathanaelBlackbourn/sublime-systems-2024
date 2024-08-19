import { MeshDistortMaterial } from '@react-three/drei';

const Blob = ({ route = '/', ...props }) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial color={'white'} distort={0.4} />
    </mesh>
  );
};

export default Blob;
