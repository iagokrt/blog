import React  from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

import {Canvas} from '@react-three/fiber'
// import {FrontSide} from 'three'
import {OrbitControls} from '@react-three/drei'
// import * as dat from 'dat.gui';

// import MusicPlayer from '../components/sound/MusicPlayer'
// import demo from '../../static/demo.mp3';

// import vertex from '../shader/vertex.glsl';
// import fragment from '../shader/fragment.glsl';

// import t from '../../static/a-end.jpg'; // end frame of video : the texture that will be used itself with the fragment uniforms
// import t1 from '../../static/a-start.jpg'; // end frame of video : the texture that will be used itself with the fragment uniforms

const stylesheets = {
  margin: '0px',
  padding: '0px',
  border: '5px solid green',
  textAlign: 'center'
};
/**
 * 
 * @returns art
 * <MeshWobbleMaterial factor={3} speed={0.5} metalness={0.12} roughness={1}  side={FrontSide} />
 */


// must set: uniforms
// 
// const uniforms = {
//   time: { type: 'f', value: 0 },
//   progress: { type: 'f', value: 0 },
//   uDistortion: { type: 'f', value: 0 },
//   t: {
//     type: 't',
//     value: new THREE.TextureLoader().load(t),
//   },
//   t1: {
//     type: 't',
//     value: new THREE.TextureLoader().load(t1),
//   },
//   resolution: { type: 'v4', value: new THREE.Vector4() },
//   uvRate1: {
//     value: new THREE.Vector2(1, 1),
//   },
// }

const LabsCanvas = () => {

  return (
        <div style={stylesheets} className="canvas-container">
            <h1>laboratory ⚗️</h1>
            <h4>
              This is an experimental area for webGL programs
            </h4>
            <nav>
              <ul>
                <li><a href="/">Return</a></li>
              </ul>
            </nav>
            <Canvas>
                <ambientLight intensity={0.1} />
                <directionalLight color="green" position={[0, 0, 5]} />
                <directionalLight color="red" position={[0, 2, 0]} />
                <directionalLight color="blue" position={[0, 0, -5]} />

                <mesh>
                  <planeBufferGeometry args={[5, 10, 15, 20]} />
                  <meshNormalMaterial />
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>  
  )
}

export default LabsCanvas
