import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text3D } from '@react-three/drei';
import * as THREE from 'three';

const FloatingText = () => {
  const textRef = useRef();
  const clock = useRef(new THREE.Clock());
  const randomOffset = useRef({
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 100,
  });

  useFrame(() => {
    const elapsedTime = clock.current.getElapsedTime();

    if (textRef.current) {
      textRef.current.rotation.x += 0.01;
      textRef.current.rotation.y += 0.01;

      textRef.current.position.x = Math.sin(elapsedTime * 0.5 + randomOffset.current.x) * 2;
      textRef.current.position.y = Math.sin(elapsedTime * 0.8 + randomOffset.current.y) * 2;
      textRef.current.position.z = Math.sin(elapsedTime * 1.2 + randomOffset.current.z) * 2;
    }
  });

  return (
    <Text3D
      ref={textRef}
      font="/fonts/Druk Wide Super _Italic.json" 
      size={1}
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.1}
      bevelSize={.01}
      bevelSegments={5}
    >
      HIRE ME
      <meshStandardMaterial 
      color="#ff69b4" 
      emissive={181111}
      metalness={0.3}  
      roughness={0.3}  

      />
    </Text3D>
  );
};

const FloatingStuff = () => {
  const cameraRef = useRef();

  React.useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 12; // Point of view
    }
  }, []);

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1000, 
      }}
    >
      <PerspectiveCamera makeDefault ref={cameraRef} fov={75} near={0.1} far={1000} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <FloatingText />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default FloatingStuff;