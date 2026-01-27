import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const handleProjectClick = (projectId: string) => {
    console.log(`Clicked project: ${projectId}`);
    // You can implement navigation to detailed project pages here
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;