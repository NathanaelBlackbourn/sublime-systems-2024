export const vertex = `
  uniform float uTime;

  void main() {
    vec3 newPos = position;

    float distance = length(position.xy);

    float wave = 0.2 * sin(position.x + position.y + distance * 2.0 + uTime * 2.0);
    newPos.z += wave;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

export const fragment = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;
