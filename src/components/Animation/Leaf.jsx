import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField, ToneMapping } from '@react-three/postprocessing';
// import { OrbitControls } from '@react-three/drei';

const FallingLeaf = ({ index, z, speed, model }) => {
    const ref = useRef();
    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2), 
        y: THREE.MathUtils.randFloatSpread(height * 2), 
        spin: THREE.MathUtils.randFloat(8, 12), 
        rX: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI,
    });

    useFrame((state, dt) => {
        if (dt < 0.1) {
            ref.current.position.set(
                data.x * width,
                (data.y -= dt * speed),
                -z
            );
            ref.current.rotation.set(
                (data.rX += dt / data.spin),
                Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
                (data.rZ += dt / data.spin)
            );

            if (data.y < -height) data.y = height * 2;
        }
    });

    return <primitive ref={ref} object={model} scale={1} />;
};

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

