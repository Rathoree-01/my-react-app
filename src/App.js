import React from 'react';
import './App.css';  // Importing the App-specific CSS
import heroImage from './assets/WhatsApp Image 2024-10-11 at 17.02.53_7c22b021.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SectionsContainer /> {/* Add this below the HeroSection */}
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

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hello,</h2>
        <h1>I'm Isha Rathore</h1>
        <p className="title">
        I am Isha Rathore, a Computer Science student and Web Development Team Lead at the NGO Sanskar, skilled in HTML, CSS, and Java.
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
    <div className="sections-container"> {/* Flex container for About and Projects */}
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-about">
      <h1>About</h1>
      <p>
        I am Isha Rathore, a final-year Computer Science student at Acharya Institute of Technology with strong skills in 
        technologies like HTML, CSS, and Java. Beyond academics, I serve as the Web Development Team Lead at the NGO Sanskar, 
        where I enhance my technical expertise while fostering team collaboration and communication skills.
      </p>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-projects">
      <h1>Projects</h1>
      <p>
        <strong>SPONSER/INFLUENCER ENGAGEMENT (WEB DEVELOPMENT) | 2024</strong><br />
        - Built a platform connecting sponsors with influencers for easy campaign creation and participation.<br />
        - Implemented analytics to track campaign performance, improving collaboration and decision-making.<br />
        - Used Flask, HTML, CSS, JavaScript, SQLAlchemy, SQLite, and Matplotlib to develop and manage the platform.
      </p>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-contact">
      <h1>Contact</h1>
      <p>Feel free to reach out to me for collaboration or inquiries.</p>
      <div className="quick-links">
        <a href="mailto:isharathore36@gmail.com" className="contact-link">Email</a>
        <a href="https://www.linkedin.com/in/isha-rathore-18b1b4280" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        <a href="https://github.com/Rathoree-01" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
      </div>
    </section>
  );
}

export default App;
