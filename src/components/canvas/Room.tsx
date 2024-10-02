import * as ITHREE from 'three';

const Room = () => {
  return (
    <mesh>
      <boxGeometry args={[30, 30, 30]} />
      <meshStandardMaterial color='#ffffff' roughness={0.5} side={ITHREE.BackSide} />
    </mesh>
  );
};

export default Room;
