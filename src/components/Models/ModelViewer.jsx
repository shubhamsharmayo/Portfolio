import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import gsap from "gsap";
import "./model.css";

const Model = ({ path, scale, rotate, duration }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  useEffect(() => {
    if (rotate) {
      // Smooth GSAP animation for rotation
      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 2, // Full 360° rotation
        duration: duration, // Rotate in specified seconds
        repeat: -1, // Infinite loop
        ease: "linear", // Smooth easing
      });
    } else {
      gsap.killTweensOf(modelRef.current.rotation);
    }
  }, [rotate, duration]);

  useEffect(() => {
    // Ensure all meshes have proper metalness and roughness
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.metalness = 1.1; // Makes it reflect light
        child.material.roughness = 0.2; // Controls the sharpness of reflections
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={scale} ref={modelRef} />;
};

const ModelViewer = ({ 
  path, 
  width, 
  height, 
  position, 
  scale, 
  rotate, 
  duration,
  enableMobileScroll = false // New prop to control scrolling behavior
}) => {
  const containerRef = useRef();

  useEffect(() => {
    // Only apply the scrolling fix if enableMobileScroll is true
    if (enableMobileScroll) {
      const findCanvas = () => {
        if (containerRef.current) {
          const canvas = containerRef.current.querySelector('canvas');
          if (canvas) {
            // Disable pointer events on canvas to allow scrolling
            canvas.style.pointerEvents = 'none';
            canvas.style.touchAction = 'auto';
          }
        }
      };

      findCanvas();
      const timeoutId = setTimeout(findCanvas, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [enableMobileScroll]);

  return (
    <div 
      className={enableMobileScroll ? "model-container-scroll" : "model-container"}
      style={{ 
        width, 
        height,
        position: 'relative',
        overflow: 'hidden'
      }}
      ref={containerRef}
    >
      <Canvas 
        shadows 
        camera={{ position: position, near: 0.1, far: 1000 }}
        style={{ touchAction: enableMobileScroll ? 'auto' : 'none' }}
      >
        {/* Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <spotLight position={[-5, 10, 5]} angle={0.3} intensity={2} castShadow />
        <Environment preset="night" />

        {/* Model with GSAP Rotation */}
        <Model path={path} scale={scale} rotate={rotate} duration={duration} />

        {/* OrbitControls */}
        <OrbitControls
          enableZoom={false}
          enableRotate={!enableMobileScroll} // Disable rotation if mobile scroll is enabled
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      
      {/* Transparent overlay div only when mobile scroll is enabled */}
      {enableMobileScroll && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            pointerEvents: 'auto',
            touchAction: 'auto',
            background: 'transparent'
          }}
        />
      )}
    </div>
  );
};

export default ModelViewer;