import React from 'react';
import './ProjectCard.css';



export const ProjectCard = ({
    projectName,projectDescription,imageUrl,projectUrl
}) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className="project-link" target="_blank">
                    <img src={imageUrl} alt={projectName} className='project-img' />
                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">
                    {projectName}
                </h2>
                <p className="project-detail">
                    {projectDescription}
                </p>
            </div>
        </div>
    )
}

