import React,{useEffect} from 'react'
import './skills.css'
import Techstack from '../techstack/Techstack';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { SiC } from "react-icons/si";
import { FaWindows,FaSlack,FaHtml5,FaCss3Alt } from "react-icons/fa";
import { SiPostman,SiIntellijidea,SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = ({ sectionRef }) => {



  
  return (
    <div ref={sectionRef} id="skills" className='skills'>
      <div className="skillset">
        Professional &nbsp; <p className="highlight">Skillset</p>
      </div>
      <div className="skillnames">
        <Techstack  tech={<FaHtml5 />} />
        <Techstack  tech={<FaCss3Alt />} />
        <Techstack  tech={<DiJavascript1 />} />
        <Techstack tech={<DiReact />} />
        <Techstack tech={<DiNodejs />} />
        <Techstack tech={<DiMongodb />} />
        <Techstack tech={<SiExpress />} />
        <Techstack tech={<RiTailwindCssFill />} />
        <Techstack tech={<DiPython />} />
        <Techstack tech={<DiGit />} />
        <Techstack tech={<DiJava />} />
        <Techstack tech={<SiC  />} />
       
      </div>
     
      <div className="skilltool">
      <div className="skillset">
          <p className="highlight">Tools</p> &nbsp; use by me
      </div>
        <Techstack tech={<VscVscode />} />
        <Techstack tech={<FaWindows />} />
        <Techstack tech={<SiPostman />} />
        <Techstack tech={<SiIntellijidea />} />
        <Techstack tech={<FaSlack />} />
      </div>
    </div>
  )
}

export default Skills
