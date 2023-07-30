import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';


const Model = () => {
    const gltf = useGLTF('/WIP.glb', false);
    return <primitive object={gltf.scene} position={[0,0,0]} scale={0.25} />;
};

  const MyEnvironment = ({ path }) => {
    const { gl, scene } = useThree();
    const texture = useTexture(path);
  
    if (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.encoding = THREE.sRGBEncoding;
      const pmremGenerator = new THREE.PMREMGenerator(gl);
      const envMap = pmremGenerator.fromEquirectangular(texture).texture;
      scene.environment = envMap;
      pmremGenerator.dispose();
    }
  
    return null;
  };


// 'city'
// 'apartment'
// 'studio'
// 'sunset'
// 'dawn'
// 'night'
// 'warehouse'
// 'forest'
// 'lobbies'


const App = () => {
    return (
        <div style={{ height: '100%',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            padding: 0,
            margin: 0 }}>
            <Canvas style={{ display: "block", margin: "0 auto" }} camera={{ position: [0, 0, 2], fov: 40 }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls autoRotate autoRotateSpeed={.5} minDistance={1} maxDistance={5}/>
            {/* <Environment preset="forest" background /> */}
            <MyEnvironment path="/HDRI/AdobeStock_Galaxy.jpeg" /> {/* Replace with your HDRI file path */}
        </Canvas>
        </div>
    );
};

export default App;


