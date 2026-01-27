
import './App.css';

function App() {
  const downloadResume = () => {
    // This downloads the resume from the public folder
    const link = document.createElement('a');
    link.href = '/ErinFloresca_Resume.pdf'; // File should be in the public folder
    link.download = 'Erin_Floresca_Resume.pdf'; // This will be the downloaded filename
    link.click();
  };

  const handleProjectClick = (projectId: string) => {
    // For now, we'll just scroll to projects. Later you can implement routing
    console.log(`Clicked project: ${projectId}`);
    // You can implement navigation to detailed project pages here
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Erin Floresca</div>
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

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1>Erin Floresca</h1>
              <h2>Computer Engineer</h2>
              <p>
                I'm Erin Floresca, a Computer Engineering graduate from Georgia Tech with expertise in embedded systems.
              </p>
              <button onClick={downloadResume} className="resume-btn">
                Download Resume
              </button>
            </div>
            <div className="about-image">
              <img src="/src/assets/pictures/pfp.jpeg" alt="Erin Floresca" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div 
              className="project-box" 
              onClick={() => handleProjectClick('smart-home')}
            >
              <div className="project-image">
                <img src="/src/assets/projects/smart-home.jpg" alt="Smart Home Automation" />
              </div>
              <div className="project-info">
                <h3>Smart Home Automation System</h3>
                <p>IoT-based home automation with custom web dashboard and mobile control</p>
                <div className="project-tech">
                  <span>IoT</span>
                  <span>React</span>
                  <span>Arduino</span>
                </div>
              </div>
            </div>

            <div 
              className="project-box" 
              onClick={() => handleProjectClick('fpga-calculator')}
            >
              <div className="project-image">
                <img src="/src/assets/projects/fpga-calc.jpg" alt="FPGA Calculator" />
              </div>
              <div className="project-info">
                <h3>FPGA-Based Calculator</h3>
                <p>Hardware calculator implementation using Verilog with optimized arithmetic operations</p>
                <div className="project-tech">
                  <span>FPGA</span>
                  <span>Verilog</span>
                  <span>Hardware Design</span>
                </div>
              </div>
            </div>

            <div 
              className="project-box" 
              onClick={() => handleProjectClick('embedded-weather')}
            >
              <div className="project-image">
                <img src="/src/assets/projects/portfolio.jpg" alt="Embedded Weather Station" />
              </div>
              <div className="project-info">
                <h3>Embedded Weather Station</h3>
                <p>Real-time weather monitoring system with sensor integration and data visualization</p>
                <div className="project-tech">
                  <span>Embedded C</span>
                  <span>Sensors</span>
                  <span>Data Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Software Engineering Intern</h3>
                <span className="experience-date">Summer 2025</span>
              </div>
              <div className="experience-company">Tech Solutions Inc.</div>
              <ul className="experience-duties">
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Collaborated on embedded systems projects for IoT devices</li>
                <li>Participated in code reviews and agile development processes</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Research Assistant</h3>
                <span className="experience-date">2024 - 2025</span>
              </div>
              <div className="experience-company">University Engineering Department</div>
              <ul className="experience-duties">
                <li>Assisted in FPGA-based signal processing research projects</li>
                <li>Developed testing frameworks for hardware verification</li>
                <li>Co-authored research paper on embedded system optimization</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Teaching Assistant</h3>
                <span className="experience-date">2024</span>
              </div>
              <div className="experience-company">Digital Logic Design Course</div>
              <ul className="experience-duties">
                <li>Mentored students in digital circuit design and Verilog programming</li>
                <li>Conducted lab sessions for FPGA development</li>
                <li>Graded assignments and provided constructive feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2>Education</h2>
          <div className="education-content">
            <div className="education-item">
              <div className="education-header">
                <h3>Bachelor of Science in Computer Engineering</h3>
                <span className="education-date">2022 - 2026</span>
              </div>
              <div className="education-school">University Name</div>
              <div className="education-details">
                <p><strong>GPA:</strong> 3.8/4.0</p>
                <p><strong>Relevant Coursework:</strong> Digital Systems Design, Embedded Systems, 
                Computer Architecture, Signal Processing, Software Engineering, Database Systems</p>
                <p><strong>Honors:</strong> Dean's List (2023, 2024, 2025), Engineering Scholarship Recipient</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skills-list">
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Verilog</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skills-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Express.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Hardware & Embedded</h3>
              <div className="skills-list">
                <span className="skill-tag">FPGA Design</span>
                <span className="skill-tag">Arduino</span>
                <span className="skill-tag">PCB Design</span>
                <span className="skill-tag">Embedded C</span>
                <span className="skill-tag">Digital Logic</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tools & Software</h3>
              <div className="skills-list">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">MATLAB</span>
                <span className="skill-tag">Quartus</span>
                <span className="skill-tag">KiCad</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Let's Connect</h2>
          <div className="contact-content">
            <p>Interested in collaborating or learning more about my work?</p>
            <div className="contact-links">
              <a href="mailto:erin.floresca@email.com" className="contact-btn">Email Me</a>
              <a href="https://linkedin.com/in/erinfloresca" className="contact-btn secondary">LinkedIn</a>
              <a href="https://github.com/erinfloresca" className="contact-btn secondary">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;;
