import React from "react"
import {Canvas, useThree, useFrame} from '@react-three/fiber'
import {OrbitControls, MeshWobbleMaterial, PerspectiveCamera, useCamera, FlyControls, TrackballControls} from '@react-three/drei'
import { PointsMaterial, FrontSide, Vector3 } from "three";

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const About = () => {
    return (
        <>
            <aside className="about-me-container">
                <div className="canvas-overlapsed-dom" style={{position: 'absolute', width: '90%'}}>
                    <p className="">
                       I'm Learning about designing things. 
                    </p>
                    <p className="">
                        I'm a programmer that learn about computer graphics too early in life. <br />
                        So when I started to code, every project I designed was related to some kinda of artistic background.
                    </p>
                    <p className="">
                       This website is my professional inspiration that sorounds* everything and mix my technological knowledge, design and coding skills
                        * 
                    </p>
                    
                </div>
                <Canvas concurrent colorManagement style={{width: '90%'}}>

                    <group>
                        <ambientLight intensity={0.5} />

                        <directionalLight color="yellow" position={[0, 0, ]} />


                        <directionalLight color="blue" position={[0, 0, 5]} />
                        <directionalLight color="blue" position={[0, 2, 0]} />
                        <directionalLight color="blue" position={[0, 0, -5]} />

                        <directionalLight color="red" position={[0, 5, 5]} />
                        <directionalLight color="red" position={[0, 2, 0]} />
                        <directionalLight color="green" position={[5, 0, -5]} />
                    </group>


                    <group>
                        <mesh position={[0,0, 0]} rotateX={180} >
                            <sphereBufferGeometry 
                                args={[14, 1.3, 53]}
                                attach="geometry"
                            />
                            <MeshWobbleMaterial
                                attach="material"
                                side={FrontSide}
                                metalness={0.12}
                                speed={2}
                                color={"#0192ec"}

                            />
                        </mesh>
                    </group>
                        
                    <TrackballControls  />
                </Canvas>
            </aside>
        </>
    )
}
/**
 *   <OrbitControls minAzimuthAngle={Math.PI*2} maxAzimuthAngle={Math.PI}  />
 * <p className="">
 Now that you're here at Write  Island, you can finally find contents related to: <br />
 Coding, web development, html, css, three.js, glsl, coreldraw, reactjs, three-fiber, react native & node.js. 
    </p>
 */
export default About
