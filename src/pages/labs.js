import React, { useRef }  from "react"
// import { Link, graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

import {Canvas, useThree, useFrame} from '@react-three/fiber'
import {OrbitControls, MeshWobbleMaterial, PerspectiveCamera, useCamera} from '@react-three/drei'
import { PointsMaterial, FrontSide, Vector3 } from "three";
// import * as dat from 'dat.gui';
import {FaLinkedinIn as LinkedinIcon, FaGithub as GithubIcon, FaBehanceSquare as BehanceIcon} from 'react-icons/fa'

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

const overlay = {position: 'absolute'}

const Topics = () => {
  return (
    <>
      <nav className="navigation-topbar">
        <ul>
          <li key={`navigation item-${Math.random(5)}`}>
            <a href="/" className="typograph"><span className="logo" title="back to writings">Write Island</span></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/iagobarreto/" className="icons first"><span className="" title="linkedin-profile"><LinkedinIcon size={32} color="white" /></span></a>
            <a href="https://github.com/iagokrt" className="icons second"><span className="" title="github-profile"><GithubIcon size={32} color="white" /></span></a>
            <a href="https://www.behance.net/iagokarneiro" className="icons third"><span className="" title="behance-profile"><BehanceIcon size={32} color="white" /></span></a>
          </li>
        </ul>
      </nav>
      <div style={overlay}>
        <h1>laboratory ⚗️</h1>
        <h2 className="labs-text">This is an <span className="outline">experimental</span> area for <span className="outline">webGL</span> programs</h2>
      </div>
    </>
  )
}

const LabsCanvas = () => {

  const Dolly = () => {
    useFrame(state => {
      state.camera.position.z = 2.2 + Math.sin(state.clock.getElapsedTime()) * 92
      state.camera.updateProjectionMatrix()
      // console.log('camera state:', state.camera)
      state.camera.lookAt(new Vector3(2,2,-50))
    })
    
    return null
  }
  return (
        <div style={stylesheets} className="canvas-container">
            <Topics />
            <Canvas concurrent colorManagement>
                <Dolly />
                <ambientLight intensity={0.1} />
                <directionalLight color="green" position={[0, 0, 5]} />
                <directionalLight color="red" position={[0, 2, 0]} />
                <directionalLight color="blue" position={[0, 0, -5]} />

                <group>
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
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>  
  )
}

export default LabsCanvas
