export const vertex = `
  uniform float uTime;
  
  varying vec2 vUv;

  void main() {
    vec3 newPos = position;

    float distance = length(position.xy);

    float wave = 0.3 * sin(position.x + position.y + distance * 2.0 + uTime * 1.5);
    newPos.z += wave;

    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

export const fragment = `
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
  }
`;
