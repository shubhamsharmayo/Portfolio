import React from 'react'
import './footer.css'
import { FaGithub,FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <footer>
        <p>Developed By Shubham Sharma</p>
        <div className="logos">
            <a href="http://www.github.com/shubhamsharmayo" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shubham-sharma-7a1873263/" target='_blank'><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/shubham_sharma_yo?igsh=ZjFwMjk1aTJyeWpi" target='_blank'><FaInstagram /></a>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer
