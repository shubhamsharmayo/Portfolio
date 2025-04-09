import React from 'react'
import './project.css'
import note from '../../assets/note.png'
import dict from '../../assets/dict.png'
import classroom from '../../assets/classroom.png'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className='project'>
      <div className="project-heading">
        <p className="highlight">Projects</p>  I have worked on
      </div>
      <div className="project-container">
        <div className="projectdisplay">
          <img src={note} alt="" />
          <h1>Note Keeper Application</h1>
          <p>This is a simple and intuitive Notes Management Web Application that allows users to easily create, view, edit, and delete their notes. It offers a clean and responsive interface, ensuring a smooth experience across both desktop and mobile devices. The app securely stores notes, providing users with a reliable way to manage and organize their information effectively.</p>
          <div className="buttons">
            <a href="https://github.com/shubhamsharmayo/Notes-app" target="_blank" className='btn'><div ><FaGithub /></div></a>
            <a href="https://notes-eight-ashen.vercel.app/" target="_blank" className='btn'><div ><FiExternalLink /></div></a>

          </div>
        </div>
        <div className="projectdisplay">
          <img src={dict} alt="" />
          <h1>Online Dictionary </h1>
          <p>This online dictionary application provides users with quick access to word definitions, synonyms, and other lexical information. Designed with a clean and intuitive interface, it ensures a seamless and user-friendly experience across all devices, making word searches fast, efficient, and accessible anytime.</p>
          <div className="buttons">
            <a href="https://github.com/shubhamsharmayo/Dictionary-App" target="_blank" className='btn'><div ><FaGithub /></div></a>
            <a href="https://dictionary-shubham.netlify.app/" target="_blank" className='btn'><div ><FiExternalLink /></div></a>

          </div>
        </div>
        <div className="projectdisplay">
          <img src={classroom} alt="" />
          <h1>Classroom Management App</h1>
          <p>This Classroom Management Web Application streamlines academic coordination by allowing principals to assign teachers, manage subjects, and create timetables. Teachers can add students, view and manage their class schedules, while students can easily access their personalized timetables, making classroom operations organized and efficient.</p>
          <div className="buttons">
            <a href="https://github.com/shubhamsharmayo/Classroom-Management" target="_blank" className='btn'><div ><FaGithub /></div></a>
            <a href="#"  className='btn'><div ><FiExternalLink /></div></a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
