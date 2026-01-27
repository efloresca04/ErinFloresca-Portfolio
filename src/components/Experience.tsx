import ExperienceItem from './ExperienceItem';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;