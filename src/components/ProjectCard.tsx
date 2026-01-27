import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (projectId: string) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <div 
      className="project-box" 
      onClick={() => onClick(project.id)}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;