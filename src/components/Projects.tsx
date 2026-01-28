import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  const handleProjectClick = (projectId: string) => {
    console.log(`Clicked project: ${projectId}`);
    // You can implement navigation to detailed project pages here
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick} 
            />
          ))}
        </div>
        {hasMoreProjects && (
          <div className="show-more-container">
            <button 
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;