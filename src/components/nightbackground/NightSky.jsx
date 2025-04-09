import React,{useState,useMemo} from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import './nightsky.css'

const NightSky = () => {
  const [starCount, setStarCount] = useState(5000); // Initial stars

  // Generate new stars when state changes
  const starProps = useMemo(() => ({
    radius: 100,
    depth: 50,
    count: starCount,
    factor: 4,
    saturation: 0,
    fade: true,
  }), [starCount]);

  // Increase stars when clicking on the background
  const addStars = () => {
    setStarCount(prev => prev + 200); // Add 200 stars per click
  };

  return (
    <Canvas className="nightsky"
      style={{ position: "fixed", top: 0, left: 0,zIndex:0, width: "100%", height: "100vh" }} 
      onPointerDown={addStars} // Handle clicks
    >
      {/* Background Color */}
      <color attach="background" args={["rgb(14, 0, 12)"]} />

      {/* Stars */}
      <Stars {...starProps} />

      {/* Soft ambient light for a slight glow effect */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </Canvas>
  );
};

export default NightSky;
