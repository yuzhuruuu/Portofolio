import React, { useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

function App() {
  const starField = Array.from({ length: 220 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 0.8}px`,
    opacity: `${Math.random() * 0.8 + 0.2}`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 3 + 1.8}s`,
  }));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      offset: 100,
      startEvent: 'DOMContentLoaded',
    });

    const handleHashChange = () => {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden transition-colors duration-700 font-sans bg-[#02020b] text-white"
      style={{
        background: 'radial-gradient(circle at 18% 12%, rgba(168,85,247,0.14), transparent 18%), radial-gradient(circle at 80% 10%, rgba(59,130,246,0.12), transparent 12%), #02020b',
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="hidden dark:block absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[160px]"></div>
        <div className="hidden dark:block absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-[160px]"></div>

        <div
          className="absolute inset-0 opacity-10 dark:opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(120,120,120,0.3) 1.5px, transparent 1.5px)',
            backgroundSize: '60px 60px',
          }}
        ></div>

        <div className="absolute inset-0 star-background" aria-hidden="true">
          <div className="star-layer layer-1" />
          <div className="star-layer layer-2" />
          <div className="star-layer layer-3" />
          <div className="star-layer layer-lines" />

          {starField.map((star) => (
            <svg
              key={star.id}
              className="star"
              viewBox="0 0 24 24"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: star.delay,
                animationDuration: star.duration,
              }}
              aria-hidden="true"
            >
              <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.6L19.336 24 12 20.202 4.664 24l1.586-8.65L.5 9.75l7.832-1.732L12 .587z" fill="currentColor" />
            </svg>
          ))}
        </div>
      </div>

      {/* RENDER COMPONENTS */}
      <Navbar />
      <ThemeToggle />
      
      <main className="relative z-10"> {/* Tambahkan relative z-10 biar teks nggak ketutup background */}
        <Hero/>
        <Statistics/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>

      <AIAssistant/>
      <Footer/>
    </div>
  );
}

export default App;