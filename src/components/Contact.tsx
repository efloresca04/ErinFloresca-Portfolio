import { contactLinks } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Let's Connect</h2>
        <div className="contact-content">
          <p>Interested in collaborating or learning more about my work?</p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                className={`contact-btn ${link.isPrimary ? '' : 'secondary'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-text">
          © 2026 Erin Floresca. Vibe coded with React.
        </div>
      </div>
    </section>
  );
};

export default Contact;