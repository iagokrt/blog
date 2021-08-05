import React, { useRef }  from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

import {Canvas, useThree, useFrame} from '@react-three/fiber'
import {OrbitControls, MeshWobbleMaterial, PerspectiveCamera, useCamera} from '@react-three/drei'
import { PointsMaterial, FrontSide, Vector3 } from "three";
// import * as dat from 'dat.gui';
import Navigation from '../components/webgl/Navigation'
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

const Particles = () => {
  return (
        <div style={stylesheets} className="canvas-container">
            <Navigation />
            <Canvas concurrent colorManagement>
                
                <ambientLight intensity={0.1} />
                <directionalLight color="green" position={[0, 0, 5]} />
                <directionalLight color="red" position={[0, 2, 0]} />
                <directionalLight color="blue" position={[0, 0, -5]} />

                <group>
                 
                </group>
                <OrbitControls enableZoom={true} />
            </Canvas>
        </div>  
  )
}

export default Particles
