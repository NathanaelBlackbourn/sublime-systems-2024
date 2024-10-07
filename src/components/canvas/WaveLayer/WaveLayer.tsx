// useFrame(() => {
//   if (meshRef.current) {
//     const distance = camera.position.z - meshRef.current.position.z;
//     const vFov = (camera.fov * Math.PI) / 180;
//     const y = 2 * Math.tan(vFov / 2) * distance;
//     const x = y * camera.aspect;
//     meshRef.current.scale.set(x, y, 1);
//   }
// });
