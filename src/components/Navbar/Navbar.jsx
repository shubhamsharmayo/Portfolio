import React, { useRef,useEffect,useState } from "react";
import "./navbar.css"; // Add styles for navbar
import FirstPage from "../IntroSec/FirstPage";
import ModelViewer from "../Models/ModelViewer";
import { NavLink } from 'react-router-dom'
import { ImMenu } from "react-icons/im";

const Navbar = ({scrollToSection}) => {
const [flag, setflag] = useState(false)
const [visible, setvisible] = useState(false)


  useEffect(() => {
    const scrolling = ()=>{
      if(window.scrollY>150){
        setflag(true)
      }
      else{
        setflag(false)
    }
    }
    
    window.addEventListener("scroll",scrolling)
  }, [])

  const visibles = ()=>{
    setvisible(!visible)
  }
 
  return (
    <div className={flag? "navbar-scroll":"navbar"}>
      {/* Navbar */}
      <nav>
        <ul>
        <div className="logo"><ModelViewer path={"/s.glb"} width={15+"vw"} height={20+"vh"} position={[0, 2, 7]} scale={1.1} /></div>
        
        
        <div className="menu" onClick={visibles}><ImMenu /></div>
          <div className={visible? "list-container-visible":"list-container"}>
            
          <li  className={visible? "list-visible":"list"} onClick={() => scrollToSection("home")}><NavLink className='navlink' to={'/'}>Home</NavLink></li>
        <li className={visible? "list-visible":"list"} onClick={() => scrollToSection("about")}>About</li>
        <li className={visible? "list-visible":"list"} onClick={() => scrollToSection("skills")}>Skills</li>
        <li className={visible? "list-visible":"list"} ><NavLink className='navlink' to={'/projects'}>Projects</NavLink></li>
        <li className={visible? "list-visible":"list"}><NavLink className='navlink' to={'/resume'}>Resume</NavLink></li>
        <li className={visible? "list-visible":"list"} onClick={() => scrollToSection("contact")}>Contact</li>
        
        </div>
        </ul>
      </nav>

     
    </div>
  );
};

export default Navbar;
