import React from 'react';
import './App.css'; // Importing the App-specific CSS
import resume from "./ISHA_RATHORE_RESUME.pdf";
import heroImage from './assets/WhatsApp Image 2024-10-11 at 17.02.53_7c22b021.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SectionsContainer />
      <ContactForm />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}


function ContactForm() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a
          href={resume} /* Replace with your resume's file path */
          className="download-resume"
          download="Isha_Rathore_Resume.pdf" /* Optional: Rename the file for download */
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
}


function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hello,</h2>
        <h1>I'm Isha Rathore</h1>
        <p className="title">
          Isha Rathore, a final-year Computer Science student at Acharya Institute of Technology, specializes in full-stack development and scalable web applications.
        </p>
        <div className="quick-links">
          <a href="mailto:isharathore36@gmail.com" className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/isha-rathore-18b1b4280" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com/Rathoree-01" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Isha Rathore" />
      </div>
    </section>
  );
}

function SectionsContainer() {
  return (
    <div className="sections-container">
      <AboutSection />
      <ProjectsSection />
      <ContactSection /> {/* Include ContactSection here */}
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-core-skills">
          <h2>Core Skills</h2>
          <ul>
            <li><strong>Programming Skills:</strong> C, Java, Python, C++</li>
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
            <li><strong>Technologies:</strong> Git, GitHub, Flask, SQL, Kaggle, ML</li>
          </ul>
        </div>
        <div className="about-achievements">
          <h2>Achievements & Certifications</h2>
          <ul>
            <li>
              <strong>Emerging Technologies (AI & Cloud) | Edunet Foundation</strong>
              <a href="https://drive.google.com/your-cyber-security-certificate-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </li>
            <li>
              <strong>Machine Learning Fundamentals | Infosys Springboard</strong>
              <a href="https://drive.google.com/file/d/1JQTDF4eYUnAEyBmEwyMogBIWvcxDoDPX/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </li>
            <li>
              <strong>Workshop on Full Stack Web Application Development | IEEE</strong>
              <a
                href="https://drive.google.com/file/d/1j6g4aZJzJqXDLB9nhOtl8MZ53MDEOfbk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </li>
            <li>
              <strong>Agile Project Management | Coursera</strong>
              <a
                href="https://drive.google.com/your-full-stack-certificate-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </li>
            <li>
              <strong>Regression Analysis | Infosys Springboard</strong>
              <a
                href="https://drive.google.com/file/d/1wA0gNiLaJ0Ge4InrlrjICqw5ON1tDrS1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </li>
            {/* Add more achievements and certifications */}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-projects">
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Projects</h1>
      <p>
        <strong>SENTIMENT ANALYSIS (MACHINE LEARNING) | 2024</strong><br />
        - Preprocessed and cleaned data, trained a logistic regression model, and evaluated performance.<br />
        - Built an automated pipeline with a Column Transformer for efficient preprocessing.<br />
      </p>
      <p>
        <strong>SPONSOR/INFLUENCER ENGAGEMENT (WEB DEVELOPMENT) | 2024</strong><br />
        - Created a platform linking sponsors and influencers with campaign analytics.<br />
        - Utilized Flask, HTML, CSS, JavaScript, SQLAlchemy, SQLite, and Matplotlib.<br />
      </p>
      <p>
        <strong>HOTEL MANAGEMENT SYSTEM (DBMS PROJECT)</strong><br />
        - Developed a hotel management system using SQL, HTML, CSS, Bootstrap, and PHP.<br />
        - Completed as part of a college curriculum in a team of two.<br />
      </p>
      <p>
        <strong>E-HELPING HANDS (Startup Idea)</strong><br />
        - Presented a startup idea at the Titan Design Event, focusing on community support.<br />
      </p>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
     
    </section>
  );
}

export default App;
