import { personalInfo } from '../data/portfolioData';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">{personalInfo.name}</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;