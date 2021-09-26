import React from "react"
import {Canvas, useThree, useFrame} from '@react-three/fiber'
import {OrbitControls, MeshWobbleMaterial, PerspectiveCamera, useCamera} from '@react-three/drei'
import { PointsMaterial, FrontSide, Vector3 } from "three";

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const About = () => {
    return (
        <>
            <aside className="about-me-container">
                <div className="canvas-overlapsed-dom" style={{position: 'absolute'}}>
                    <p className="">
                       I'm Learning about designing things. 
                    </p>
                    <p className="">
                        Now that you're here at Write  Island, you can finally find contents related to: <br />
                        Coding, web development, html, css, three.js, glsl, coreldraw, reactjs, three-fiber, react native & node.js. 
                    </p>
                </div>
                <Canvas concurrent colorManagement>

                    <group>
                        <ambientLight intensity={0.1} />
                        <directionalLight color="blue" position={[0, 0, 5]} />
                        <directionalLight color="blue" position={[0, 2, 0]} />
                        <directionalLight color="blue" position={[0, 0, -5]} />

                        <directionalLight color="red" position={[0, 5, 5]} />
                        <directionalLight color="red" position={[0, 2, 0]} />
                        <directionalLight color="green" position={[5, 0, -5]} />
                    </group>


                    <group>
                        <mesh position={[0,0, 36]}>
                            <sphereBufferGeometry args={[210, 290, 95]} attach="geometry" />
                            <MeshWobbleMaterial
                                attach="material"
                                side={FrontSide}
                                metalness={0.55}
                                roughness={0.24}
                                speed={0.8}
                                factor={1}
                                color={"#890022"}
                            />
                        </mesh>
                    </group>
                        
                    <OrbitControls minAzimuthAngle={Math.PI*2} maxAzimuthAngle={Math.PI}  />
                </Canvas>
            </aside>
        </>
    )
}

export default About
