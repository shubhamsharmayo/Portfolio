import React,{useRef,useState,useEffect} from 'react'
import './about.css'
import NightSky from '../nightbackground/NightSky'
import ModelViewer from '../Models/ModelViewer'


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

const About = ({ sectionRef }) => {
  const [cam, setcam] = useState(10)

  const { width, height } = useViewport();
useEffect(() => {
  if(width<=768){
setcam(15)
  }
  

}, [width])
  
  return (
    <div ref={sectionRef} id="about" className='about'>
      <div className="about-container">
      <div className="about-intro">
      KNOW &nbsp;<p className='highlight'>ABOUT &nbsp;</p> ME
       </div>
       <div className="about-para">
       I am a final-year student pursing <p className='highlight'>B.Tech </p> from Dr. A. P. J. Abdul Kalam Technical University, Lucknow with a strong passion for web development and software engineering
       </div>
       <div className="about-para">
       I'm proficient in <p className='highlight'>JavaScript, Java, and the MERN stack Development</p>
       </div>
       <div className="about-para">
       Lately, I’ve developed a keen interest in <p className='highlight'>Artifical Intelligence</p> and <p className='highlight'>Machine learning</p> and want to learn more about it 
       </div>
       <div className="about-para">
      My goal is to keep learning, experimenting, and pushing myself to become a better every day.
       </div>
      </div>
      <div className='galaxy'>

     <ModelViewer  path={"/space_station.glb"} width={100+"%"} height={100+"vh"} position={[cam,0, 15]} scale={2} rotate={"rotate"} duration={200} enableMobileScroll={true}/>
      </div>
    </div>
  )
}

export default About
