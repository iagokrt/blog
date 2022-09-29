import React from "react"
import { Canvas } from '@react-three/fiber'
import { MeshWobbleMaterial, TrackballControls} from '@react-three/drei'
import { FrontSide } from "three";

const stelesheet = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    left: 'calc(-50vw + 50%)',
    top: '-60px'
}

const WebglCanvas = () => {
    return (
        <>
            <Canvas concurrent colorManagement style={stelesheet}>
                <group>
                    <ambientLight intensity={0.07} />
                    <directionalLight color="red" position={[0, 2, 0]} />
                    <directionalLight color="white" position={[0, 7, 0]} />
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
        </>
    )
}
/**
 *   
 <OrbitControls minAzimuthAngle={Math.PI*2} maxAzimuthAngle={Math.PI} maxZoom={10} minZoom={20} />
 * 
 <TrackballControls  />
 */
export default WebglCanvas
