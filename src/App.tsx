import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

export default function App() {
  const [currentSection, setCurrentSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(sectionId);
  };

  return (
    <div className="app">
      {/* <Navigation scrollToSection={scrollToSection} currentSection={currentSection} /> */}
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}