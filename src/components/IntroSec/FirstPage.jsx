import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import NightSky from "../nightbackground/NightSky";
import "./firstpage.css";
import ModelViewer from "../Models/ModelViewer";

const greetings = {
  1: "Hi!",
  2: "नमस्ते",
  3: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  4: "राधे राधे",
  5: "Bonjour!",
  6: "¡Hola!",
  7: "Hallo!",
  8: "Привет!",
  9: "こんにちは",
  10: "你好",
};
const titles = [
  "I'm a Software Developer",
  "I'm a MERN Stack Developer",
];

const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport;
};

const FirstPage = ({ sectionRef }) => {
  const [word, setWord] = useState(greetings[1]);
  const wordRef = useRef(null);
  const { width, height } = useViewport();
  const [title, setTitle] = useState("");
  const titleRef = useRef(null);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [scaling, setscaling] = useState("")

 

  // Greeting animation
  useEffect(() => {
    let count = 1;
    const interval = setInterval(() => {
      count = count >= 10 ? 1 : count + 1;

      // Create GSAP Timeline
      const tl = gsap.timeline();
      tl.to(wordRef.current, { y: -30, opacity: 0, duration: 0.5 }) // Move Up & Fade Out
        .set(wordRef.current, { y: 30, opacity: 0 }) // Reset Position Below
        .call(() => setWord(greetings[count])) // Change Word
        .to(wordRef.current, { y: 0, opacity: 1, duration: 0.5 }); // Move Up & Fade In

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const typeWriter = () => {
      const currentTitle = titles[currentTitleIndex];
      const shouldDelete = isDeleting;
      const fullText = currentTitle;
      
      // Set typing speed
      const typingSpeed = isDeleting ? speed / 2 : speed;
      
      if (!isDeleting && title === fullText) {
        // Start deleting after a pause
        setIsDeleting(true);
        setSpeed(100);
        return;
      } else if (isDeleting && title === '') {
        // Move to next title after deletion
        setIsDeleting(false);
        setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        setSpeed(100);
        return;
      }
      
      // Set the new title
      setTitle(
        isDeleting 
          ? fullText.substring(0, title.length - 1) 
          : fullText.substring(0, title.length + 1)
      );
    };
    
    const timer = setTimeout(typeWriter, speed);
    return () => clearTimeout(timer);
  }, [title, isDeleting, currentTitleIndex, speed]);

  return (
    <div ref={sectionRef} id="home" className="firstpage">
      
      <div className="container">
        <div className="cont">
          <p className="word" ref={wordRef} style={{ position: "relative" }}>{word}</p>
          <p className="name">I'M SHUBHAM SHARMA</p>
          <p className="title" ref={titleRef}>{title}<span className="cursor">|</span></p>
        </div>
         
        <div className="crystal">
          <ModelViewer path={"/crystal.glb"} width={30+"vw"} height={width*0.08+"vh"} position={[0, 2, 10]} scale={88} rotate={"rotate"} duration={20} />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;