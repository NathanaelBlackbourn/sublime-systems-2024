const Blob = ({ route = '/', ...props }) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial color={'white'} roughness={0.1} metalness={0.0} transmission={1.0} thickness={1.0} />
    </mesh>
  );
};

export default Blob;
