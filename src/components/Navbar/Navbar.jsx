import React, { useEffect, useState } from "react";
import "./navbar.css";
import ModelViewer from "../Models/ModelViewer";
import { NavLink } from 'react-router-dom';
import { ImMenu } from "react-icons/im";

const Navbar = ({ scrollToSection }) => {
  const [flag, setFlag] = useState(false);
  const [visible, setVisible] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setVisible(!visible);
  };

  // Handle scroll to add blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a nav item is clicked
  const handleNavClick = (section) => {
    if (section) scrollToSection(section);
    setVisible(false); // Close menu
  };

  return (
    <div className={flag ? "navbar-scroll" : "navbar"}>
      <nav>
        <ul>
          <div className="logo">
            <ModelViewer
              path={"/s.glb"}
              width={"15vw"}
              height={"20vh"}
              position={[0, 2, 7]}
              scale={1.1}
            />
          </div>

          <div className="menu" onClick={toggleMenu}>
            <ImMenu />
          </div>

          <div className={visible ? "list-container-visible" : "list-container"}>
            <li className={visible ? "list-visible" : "list"} onClick={() => handleNavClick("home")}>
              <NavLink className="navlink" to="/">Home</NavLink>
            </li>
            <li className={visible ? "list-visible" : "list"} onClick={() => handleNavClick("about")}>
              About
            </li>
            <li className={visible ? "list-visible" : "list"} onClick={() => handleNavClick("skills")}>
              Skills
            </li>
            <li className={visible ? "list-visible" : "list"} onClick={() => setVisible(false)}>
              <NavLink className="navlink" to="/projects">Projects</NavLink>
            </li>
            <li className={visible ? "list-visible" : "list"} onClick={() => setVisible(false)}>
              <NavLink className="navlink" to="/resume">Resume</NavLink>
            </li>
            <li className={visible ? "list-visible" : "list"} onClick={() => handleNavClick("contact")}>
              Contact
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
