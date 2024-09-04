export const vertex = `
  uniform float uTime;

  void main() {
    vec3 newPos = position;
    float wave = 2.0 * sin(position.x * 2.0 + uTime);
    newPos.z += wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

export const fragment = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;
