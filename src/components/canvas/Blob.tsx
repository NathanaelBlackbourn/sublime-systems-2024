const Blob = ({ route = '/', ...props }) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        color={'white'}
        roughness={0.1}
        metalness={0.0}
        // clearcoat={1.0}
        // clearcoatRoughness={0.1}
        transmission={1.0}
        reflectivity={1.0}
        // ior={1.5}
        iridescence={1.0}
        // envMap={}
        // dispersion={0.5}
      />
    </mesh>
  );
};

export default Blob;
