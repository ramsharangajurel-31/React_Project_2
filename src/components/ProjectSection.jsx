import React from 'react';


const ProjectSection = () => {
  const images = [
    'project/image1.jpeg',
    'project/image2.jpeg',
    'project/image3.jpeg',
    'project/image4.jpeg',
    'project/image5.jpeg',
    'project/image6.jpeg',
    'project/image7.jpeg',
    'project/image8.jpeg'
  ];

  return (
    <div className="project-section">
        <h2>RECENT <span> PROJECTS</span></h2>
      <div className="project-images">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Project ${index + 1}`} />
        ))}
      </div>
      <div className="project-button">
         <button className="project-button">VIEW ALL PROJECTS</button>
        </div>
    </div>
  );
};

export default ProjectSection;
