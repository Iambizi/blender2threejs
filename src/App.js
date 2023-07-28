import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

const Model = () => {
    const gltf = useGLTF('/WIP.glb', false);
    return <primitive object={gltf.scene} scale={0.5} />;
};

const App = () => {
    return (
        <Canvas style={{ display: "block", margin: "0 auto" }} camera={{ position: [0, 0, 2], fov: 40 }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls autoRotate />
            <Environment preset="sunset" background />
        </Canvas>
    );
};

export default App;


