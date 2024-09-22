export const vertex = `
  uniform float uTime;
  
  varying vec2 vUv;

  void main() {
    vec3 newPos = position;

    float distance = length(position.xy);

    float wave = 0.2 * sin(position.x + position.y + distance * 2.0 + uTime * 2.0);
    newPos.z += wave;

    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  }
`;

export const fragment = `
  uniform sampler2D uAlphaMap;
  
  varying vec2 vUv;

  void main() {
    vec4 alphaColor = texture2D(uAlphaMap, vUv);
    gl_FragColor = vec4(0.0, 0.0, 0.0, alphaColor.r);
  }
`;
