import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-content">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-date">{edu.date}</span>
              </div>
              <div className="education-school">{edu.school}</div>
              <div className="education-details">
                {edu.gpa && <p><strong>GPA:</strong> {edu.gpa}</p>}
                {edu.concentration && (
                  <p><strong>Concentration:</strong> {edu.concentration}</p>
                )}
                {edu.coursework && (
                  <p><strong>Relevant Coursework:</strong> {edu.coursework}</p>
                )}
                {edu.activities && (
                  <p><strong>Activities & Societies:</strong> {edu.activities}</p>
                )}
                {edu.honors && <p><strong>Honors:</strong> {edu.honors}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;