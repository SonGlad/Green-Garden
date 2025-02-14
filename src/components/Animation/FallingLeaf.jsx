import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';



export const FallingLeaf = ({ index, z, speed, model }) => {
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

    return (
        <primitive ref={ref} object={model} scale={1} />
    );
};