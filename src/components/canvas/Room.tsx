import * as ITHREE from 'three';

const Room = () => {
  return (
    <mesh>
      <boxGeometry args={[20, 20, 20]} />
      <meshStandardMaterial color='#ffffff' roughness={0.5} side={ITHREE.BackSide} />
    </mesh>
  );
};

export default Room;
