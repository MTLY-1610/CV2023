import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObject = () => {
  const meshRef = useRef();
  const clock = useRef(new THREE.Clock());
  const randomOffset = useRef({
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 100,
  });

  useFrame(() => {
    const elapsedTime = clock.current.getElapsedTime();

    if (meshRef.current) {
      // Rotation
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      // random fliiiight
      meshRef.current.position.x = Math.sin(elapsedTime * 0.5 + randomOffset.current.x) * 2;
      meshRef.current.position.y = Math.sin(elapsedTime * 0.8 + randomOffset.current.y) * 2;
      meshRef.current.position.z = Math.sin(elapsedTime * 1.2 + randomOffset.current.z) * 2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
};

const FloatingStuff = () => {
  const cameraRef = useRef();

  React.useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 7; // Point of view
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
      <FloatingObject />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default FloatingStuff;