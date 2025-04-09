import React, { useState,useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './resume.css';
import shubham from '../../assets/shubham.pdf';
import { FiDownload } from "react-icons/fi";

// Set PDF.js worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const onDocumentLoadSuccess = () => {
    setLoading(false);
  };

  return (
    <div className='resume'>
      <a href={shubham} className='download' target="_blank"><FiDownload />&nbsp; Download Resume</a>
      <Document
        file={shubham}
        onLoadSuccess={onDocumentLoadSuccess}
       
      >
        {loading ? (
          <p className="pdf" >Loading PDF...</p>
        ) : (
          <Page className="pdf" pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false} renderAnnotationLayer={true} />
        )}
      </Document>
    </div>
  );
};

export default Resume;
