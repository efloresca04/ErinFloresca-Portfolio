
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
// import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
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
}

export default App;;
