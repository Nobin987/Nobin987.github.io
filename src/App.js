import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import performanceMonitor from './utils/performanceMonitor';

function App() {
  useEffect(() => {
    // Start performance monitoring
    performanceMonitor.startMonitoring();

    // Monitor FPS and adjust performance
    performanceMonitor.onFPSChange((fps) => {
      console.log(`Current FPS: ${fps}`);
      
      if (fps < 30) {
        console.warn('Low FPS detected, reducing animation complexity');
      }
    });

    // Cleanup on unmount
    return () => {
      performanceMonitor.stopMonitoring();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;