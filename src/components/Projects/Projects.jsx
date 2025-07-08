import React, { useState } from 'react';
import './project.css';
import note from '../../assets/note.png';
import dict from '../../assets/dict.png';
import image_segmentation from '../../assets/image_segmentation.png';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const projects = [
    {
      title: "Note Keeper Application",
      img: note,
      desc: "This is a simple and intuitive Notes Management Web Application that allows users to easily create, view, edit, and delete their notes. It offers a clean and responsive interface, ensuring a smooth experience across both desktop and mobile devices. The app securely stores notes, providing users with a reliable way to manage and organize their information effectively.",
      github: "https://github.com/shubhamsharmayo/Notes-app",
      live: "https://notes-eight-ashen.vercel.app/"
    },
    {
      title: "Online Dictionary",
      img: dict,
      desc: "This online dictionary application provides users with quick access to word definitions, synonyms, and other lexical information. Designed with a clean and intuitive interface, it ensures a seamless and user-friendly experience across all devices, making word searches fast, efficient, and accessible anytime.",
      github: "https://github.com/shubhamsharmayo/Dictionary-App",
      live: "https://dictionary-shubham.netlify.app/"
    },
    {
      title: "Object Detection and Prediction using Image Segmentation",
      img: image_segmentation,
      desc: "This project is a full-stack AI-powered web application that combines Flask (Python) for the backend and React for the frontend to perform real-time object detection and handwriting recognition. It uses a Mask R-CNN model pre-trained on the COCO dataset to detect objects in images, videos, and live webcam streams. For handwriting recognition, it integrates Tesseract OCR with OpenCV-based preprocessing. The backend exposes multiple RESTful APIs to handle file uploads, video processing, and webcam control, while the frontend provides a clean, responsive UI to interact with these features, offering a seamless visual AI experience.",
      github: "https://github.com/shubhamsharmayo/Classroom-Management",
      live: "#"
    }
  ];

  return (
    <div className='project'>
      <div className="project-heading">
        <p className="highlight">Projects</p> I have worked on
      </div>
      <div className="project-container">
        {projects.map((project, index) => (
          <div className="projectdisplay" key={index}>
            <img src={project.img} alt={project.title} />
            <h1>{project.title}</h1>
            <div className='projectdesc'>
            <p>
              {expandedIndex === index
                ? project.desc
                : project.desc.slice(0, 150) + (project.desc.length > 150 ? '...' : '')}
            </p>
            {project.desc.length > 150 && (
              <button
                className="see-more-btn"
                onClick={() => toggleExpand(index)}
              >
                {expandedIndex === index ? 'See Less' : 'See More'}
              </button>
            )}
            </div>
            <div className="buttons">
              <a href={project.github} target="_blank" className='btn' rel="noreferrer"><div><FaGithub /></div></a>
              <a href={project.live} target="_blank" className='btn' rel="noreferrer"><div><FiExternalLink /></div></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
