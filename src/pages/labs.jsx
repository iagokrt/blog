import React from "react"


import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshWobbleMaterial} from '@react-three/drei'
import { FrontSide } from "three";
import Navigation from '../components/webgl/Navigation'
// import vertex from '../shader/vertex.glsl';
// import fragment from '../shader/fragment.glsl';

const stylesheets = {
  margin: '0px',
  padding: '0px',
  textAlign: 'center'
};

const WebglCanvas = () => {

  return (
    <div style={stylesheets} className="canvas-container">
      <Navigation />
      <Canvas concurrent colorManagement camera={{ position: [0,0,5] }}>
          
          <ambientLight intensity={0.1} />
          <directionalLight color="green" position={[0, 0, 5]} />
          <directionalLight color="red" position={[0, 2, 0]} />
          <directionalLight color="blue" position={[0, 0, -5]} />

          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh>
              <sphereBufferGeometry args={[210, 290, 95]} attach="geometry" />
              <MeshWobbleMaterial
                attach="material"
                side={FrontSide}
                metalness={0.5}
                roughness={0.4}
                speed={0.5}
                factor={1}
                color={"crimson"}
              />
            </mesh>
          </group>
          <OrbitControls enableZoom={true} />
      </Canvas>
    </div>  
  )
}

export default WebglCanvas
