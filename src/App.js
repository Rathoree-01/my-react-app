import React from 'react';
import './App.css';  // Importing the App-specific CSS
import heroImage from './assets/WhatsApp Image 2024-10-11 at 17.02.53_7c22b021.jpg'; 

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SectionsContainer />  {/* Add this below the HeroSection */}
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
        <p className="title">currently pursuing a Bachelor's degree in Computer Science and Engineering at Acharya Institute of Technology.</p>
        
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Isha Rathore" />
      </div>
    </section>
  );
}

function SectionsContainer() {
  return (
    <div className="sections-container">  {/* Flex container for About and Projects */}
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-about">
      <h1>About</h1>
      <p> I am Isha Rathore, a final-year Computer Science student at Acharya Institute of Technology with strong skills in technologies like HTML, CSS, and Java. Beyond academics, I serve as the Web Development Team Lead at the NGO Sanskar, where I enhance my technical expertise while fostering team collaboration and communication skills.
      </p>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-projects">
      <h1>Projects</h1>
      <p>SPONSER/INFLUENCER ENGAGEMENT (WEB DEVELOPMENT) | 2024
-Built a platform connecting sponsors with influencers for easy campaign creation and participation.
- Implemented analytics to track campaign performance, improving collaboration and decision-making.
 -Used Flask ,Html ,CSS ,JavaScript , SQLAlchemy , SQLite, and Matplotlib to develop and manage the platform.</p>
    </section>
  );
}

export default App;
