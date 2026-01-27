import type { Experience as ExperienceType } from '../types';

interface ExperienceItemProps {
  experience: ExperienceType;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3>{experience.title}</h3>
        <span className="experience-date">{experience.date}</span>
      </div>
      <div className="experience-company">{experience.company}</div>
      <ul className="experience-duties">
        {experience.duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;