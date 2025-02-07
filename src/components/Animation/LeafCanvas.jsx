import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField, ToneMapping } from '@react-three/postprocessing';
import { FallingLeaf } from './FallingLeaf';
// import { OrbitControls } from '@react-three/drei';


export const LeafCanvas = () => {
    const { scene } = useGLTF('/Green-Garden/palm_leaf/scene.gltf');
    const count = 60; 
    const depth = 15;
    const easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2));
    

    return (
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 20 }}>
            <spotLight 
                position={[10, 20, 10]} 
                penumbra={1} 
                decay={0} 
                intensity={3} 
                color="orange" 
            />
            {Array.from({ length: count }, (_, i) => (
                <FallingLeaf 
                    key={i} 
                    index={i} 
                    z={Math.round(easing(i / count) * depth)}
                    speed={THREE.MathUtils.randFloat(0.3, 0.8)}
                    model={scene.clone()} 
                />
            ))}
            {/* <OrbitControls 
                enableZoom={false} 
                maxPolarAngle={Math.PI / 2} 
                minPolarAngle={Math.PI / 2} 
            /> */}
            <EffectComposer>
                <DepthOfField 
                    target={[0, 0, 15]} 
                    focalLength={0.1} 
                    bokehScale={1} 
                    height={700} 
                />
                <ToneMapping />
            </EffectComposer>
            <Environment preset="sunset" />
        </Canvas>
    );
};

