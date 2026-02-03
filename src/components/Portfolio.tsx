import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
// import Skills from './Skills';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Navigation />
      <About />
      <Projects />
      <Experience />
      <Education />
      {/* <Skills /> */}
      <Contact />
    </div>
  );
};

export default Portfolio;