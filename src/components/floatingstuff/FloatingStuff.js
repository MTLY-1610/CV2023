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

  const gradientMaterial = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vPosition;
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vPosition;
      void main() {
        float zMix = (vPosition.z + 2.0) / 4.0; // Normalize z position to 0-1 range
        vec3 color1 = vec3(1.0, 0.4, 0.7); // Pink
        vec3 color2 = vec3(0.4, 0.7, 1.0); // Light Blue
        gl_FragColor = vec4(mix(color1, color2, zMix), 1.0);
      }
    `,
    side: THREE.DoubleSide,
  });

  return (
    <Text3D
      ref={textRef}
      font="/fonts/Druk Wide Super _Italic.json"
      size={1}
      height={0.4}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.1}
      bevelSize={0.1}
      bevelSegments={5}
      material={gradientMaterial} 
      
    >
      HIRE ME
    </Text3D>
  );
};

const FloatingStuff = () => {
  const cameraRef = useRef();

  React.useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 11; 
    }
  }, []);

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000, 
      }}
    >
      <PerspectiveCamera makeDefault ref={cameraRef} fov={75} near={0.1} far={1000} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <FloatingText />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default FloatingStuff;