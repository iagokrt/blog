void main() {
    vUv = uv;

    vec3 distortion = vec3(position.x*2. , position.y, 1.) * curlNoise(vec3(
    position.x*0. + time*0.09,
    position.y*0.06 + time*0.03,
    (position.x + position.y)*0.0
    ))*uDistortion;

     vec3 finalPosition = position + distortion;


    vec4 mvPosition = modelViewMatrix * vec4( finalPosition, 1.);
    gl_PointSize = 10. * ( 1. / - mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}