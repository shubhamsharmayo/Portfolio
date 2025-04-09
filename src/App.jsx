import { useState, useRef } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import NightSky from './components/nightbackground/NightSky';
import FirstPage from './components/IntroSec/FirstPage';
import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume'
import Footer from './components/footer/Footer';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null)


  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,

  };

  const scrollToSection = (section) => {
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="nav-container">

            <Navbar scrollToSection={scrollToSection} />
          </div>
          <FirstPage sectionRef={homeRef} />
          <About sectionRef={aboutRef} />
          <Skills sectionRef={skillsRef} />
          <Footer/>
        </>
      )
    },
    {
      path: "/projects",
      element: (
        <>
          <div className="nav-container">

            <Navbar scrollToSection={scrollToSection} />
          </div>
          <Projects />
          <Footer/>
        </>
      )
    },
    {
      path: "/resume",
      element: (
        <>
          <div className="nav-container">

            <Navbar scrollToSection={scrollToSection} />
          </div>
          <Resume />
          <Footer/>
        </>
      )
    }
  ]);

  return (
    <>



      <RouterProvider router={router} />
      <NightSky />
    </>
  )
}

export default App
