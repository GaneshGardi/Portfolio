import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

function Earth() {
  const { scene } = useGLTF('./planet/scene.gltf'); // Destructuring

  return (
    <primitive 
      object={scene} 
      scale={2.5} 
      position-y={0} 
      rotation-y={0} 
    />
  );
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 70 }}
    >
      <Suspense fallback={null}> {/* Suspense for lazy loading */}
        <OrbitControls 
          autoRotate 
          enableZoom={false}
        //   maxPolarAngle={Math.PI / 2}
        //   minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all /> {/* Ensures that assets are preloaded */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
