import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.id} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;