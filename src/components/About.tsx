import { personalInfo } from '../data/portfolioData';

const About = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ErinFloresca-Portfolio/ErinFloresca_Resume.pdf';
    link.download = 'Erin_Floresca_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>{personalInfo.title}</h1>
            <h2>{personalInfo.subtitle}</h2>
            {personalInfo.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <button onClick={downloadResume} className="resume-btn">
              Download Resume
            </button>
          </div>
          <div className="about-image">
            <img src={personalInfo.image} alt={personalInfo.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;