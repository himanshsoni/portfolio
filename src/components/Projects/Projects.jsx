import React from 'react'
import Header from '../Header/Header';
import { projectsData } from '../../assets/projectsData';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import './Projects.css';

export const Projects = () => {
    return (
        <div className='section-container'>
            <Header heading='My Projects.' details='Check out the cool things I have worked on.'/>
            <div className="project-cards-container">
               { projectsData.map( (project) => {
                    return <ProjectCard projectName={project.projectName} projectDescription={project.projectDescription} imageUrl={project.imageUrl}
                    projectUrl={project.projectUrl}  />
                })
               }
            </div>
        </div>
    )
}
