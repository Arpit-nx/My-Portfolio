// import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import DSASkills from './components/DSASkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ContactCorner from './components/ContactCorner';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certifications />
      <Skills />
      <DSASkills />
      <Projects />
      <Contact />
      <ContactCorner />
    </div>
  );
}

export default App;