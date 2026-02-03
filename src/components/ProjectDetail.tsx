import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project: Project | undefined = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="container">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate('/')} className="back-btn">
            ← Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="container">
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Portfolio
        </button>
        
        <div className="project-detail">
          <div className="project-detail-header">
            <h1>{project.title}</h1>
            <div className="project-detail-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>

          <div className="project-detail-content">
            <section className="project-overview">
              <h2>Overview</h2>
              <p>{project.longDescription || project.description}</p>
            </section>

            <section className="project-technologies">
              <h2>Technologies Used</h2>
              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </section>

            {project.features && project.features.length > 0 && (
              <section className="project-features">
                <h2>Key Features</h2>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <section className="project-challenges">
                <h2>Technical Challenges</h2>
                <ul>
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.impact && (
              <section className="project-impact">
                <h2>Project Impact</h2>
                <p>{project.impact}</p>
              </section>
            )}

            {(project.githubUrl || project.demoUrl) && (
              <section className="project-links">
                <h2>Project Links</h2>
                <div className="link-buttons">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-btn github-btn"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-btn demo-btn"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </section>
            )}

            {project.additionalImages && project.additionalImages.length > 0 && (
              <section className="project-gallery">
                <h2>Project Gallery</h2>
                <div className="image-gallery">
                  {project.additionalImages.map((image, index) => (
                    <div key={index} className="gallery-image">
                      <img src={image} alt={`${project.title} - Image ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;