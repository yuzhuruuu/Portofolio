import React, { useEffect, useState } from 'react';
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

function TechBadgeIcon({ type }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'tech-icon-svg',
    'aria-hidden': true,
  };

  switch (type) {
    case 'python':
      return (
        <svg {...commonProps}>
          <path d="M9 3.5c-2.2 0-2.7 1.2-2.7 2.7v2.3H9v1.3H6.3c-2.5 0-3.8 1.5-3.8 3.7s1.3 3.7 3.8 3.7H9v2.8c0 1.5 1.3 2.7 2.8 2.7h1.1c1.5 0 2.8-1.2 2.8-2.7v-2.8h2.7c2.4 0 3.7-1.5 3.7-3.7s-1.3-3.7-3.7-3.7H15V6.2c0-1.5-1.3-2.7-2.8-2.7H11c-1.5 0-2.7 1.2-2.7 2.7v1.1H9V3.5Z" opacity="0.25" />
          <path d="M9 7.3h6.5c1.3 0 2.3 1 2.3 2.3v1.1H9V7.3Z" />
          <path d="M15 16.7H8.5c-1.3 0-2.3-1-2.3-2.3v-1.1H15v3.4Z" />
          <path d="M9 10.1h6.5M8.5 13.9H15" />
        </svg>
      );
    case 'js':
      return (
        <svg {...commonProps}>
          <path d="M8 5.5h8v13H8z" />
          <path d="M9 8.5h6M9 15.5h6M12 8.5v7" />
          <path d="M8 5.5 6 7l2 1.5M16 18.5l2-1.5-2-1.5" />
        </svg>
      );
    case 'ai':
      return (
        <svg {...commonProps}>
          <path d="M12 3.8v4.2M12 16v4.2M3.8 12h4.2M16 12h4.2" />
          <circle cx="12" cy="12" r="4.6" />
          <path d="M6.5 6.5 9 9M18.5 17.5 15 15M17.5 6.5 15 9M6.5 17.5 9 15" />
        </svg>
      );
    case 'db':
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="6.8" rx="7" ry="2.8" />
          <path d="M5 6.8v6.5c0 1.5 3.1 2.9 7 2.9s7-1.4 7-2.9V6.8" />
          <path d="M5 13.3v4.9c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-4.9" />
        </svg>
      );
    case 'react':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="2.4" />
          <path d="M3.8 12c1.8-3.4 5.1-5.5 8.2-5.5S18.4 8.6 20.2 12c-1.8 3.4-5.1 5.5-8.2 5.5S5.6 15.4 3.8 12Z" />
          <path d="M12 3.8c2.4 1.7 4 4.8 4 8.2s-1.6 6.5-4 8.2c-2.4-1.7-4-4.8-4-8.2s1.6-6.5 4-8.2Z" />
        </svg>
      );
    case 'node':
      return (
        <svg {...commonProps}>
          <path d="M12 3.4 4.8 7.2v9.6L12 20.6l7.2-3.8V7.2L12 3.4Z" />
          <path d="M12 7.8v8.4M8.5 9.6l3.5 2 3.5-2" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <path d="M12 3.6v16.8M3.6 12h16.8" />
        </svg>
      );
  }
}

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return window.localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    root.classList.toggle('dark', theme === 'dark');
    root.setAttribute('data-theme', theme);
    body.classList.toggle('bg-slate-50', theme !== 'dark');
    body.classList.toggle('bg-[#02020b]', theme === 'dark');
    body.classList.toggle('text-slate-900', theme !== 'dark');
    body.classList.toggle('text-white', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-700 font-sans ${theme === 'dark' ? 'bg-[#02020b] text-white' : 'bg-slate-50 text-slate-900'}`}
      style={{
        background: theme === 'dark'
          ? 'radial-gradient(circle at 18% 12%, rgba(168,85,247,0.14), transparent 18%), radial-gradient(circle at 80% 10%, rgba(59,130,246,0.12), transparent 12%), #02020b'
          : 'radial-gradient(circle at 18% 12%, rgba(168,85,247,0.16), transparent 18%), radial-gradient(circle at 80% 10%, rgba(59,130,246,0.12), transparent 12%), #f8fafc',
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

          {[
            { id: 1, left: '12%', top: '18%', delay: '0s', duration: '9s', type: 'ai', label: 'AI' },
            { id: 2, left: '74%', top: '16%', delay: '2s', duration: '10s', type: 'react', label: 'React' },
            { id: 3, left: '18%', top: '68%', delay: '1.5s', duration: '11s', type: 'js', label: 'JS' },
            { id: 4, left: '82%', top: '70%', delay: '3.5s', duration: '12s', type: 'db', label: 'DB' },
            { id: 5, left: '56%', top: '26%', delay: '1s', duration: '9.5s', type: 'python', label: 'Py' },
            { id: 6, left: '42%', top: '72%', delay: '4s', duration: '11.5s', type: 'node', label: 'Node' },
          ].map((tech) => (
            <span
              key={tech.id}
              className="tech-float"
              style={{
                left: tech.left,
                top: tech.top,
                animationDelay: tech.delay,
                animationDuration: tech.duration,
              }}
            >
              <TechBadgeIcon type={tech.type} />
              <span>{tech.label}</span>
            </span>
          ))}

          {[
            { id: 1, left: '18%', top: '28%', delay: '0s', duration: '4.2s' },
            { id: 2, left: '61%', top: '35%', delay: '1.3s', duration: '5s' },
            { id: 3, left: '76%', top: '58%', delay: '2.2s', duration: '4.8s' },
          ].map((meteor) => (
            <span
              key={meteor.id}
              className="meteor"
              style={{
                left: meteor.left,
                top: meteor.top,
                animationDelay: meteor.delay,
                animationDuration: meteor.duration,
              }}
            />
          ))}
        </div>
      </div>

      {/* RENDER COMPONENTS */}
      <Navbar />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      
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