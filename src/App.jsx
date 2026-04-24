import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-(--color-dark-bg) text-gray-100 font-sans">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-(--color-neon-purple)/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-(--color-neon-blue)/20 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1.5px, transparent 1.5px)',
             backgroundSize: '60px 60px'
           }}
      ></div>

      {/* RENDER COMPONENTS */}
      <Navbar />
      
      <main>
        <Hero />
        <Statistics />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
      
    </div>
  );
}

export default App;