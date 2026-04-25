import { useState, useEffect } from 'react'; // Tambahkan useEffect

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State untuk deteksi scroll
  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  // Fungsi untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
      {/* Container utama header 
         - Padding mengecil dari py-8 ke py-4 saat di-scroll
         - Blur makin kuat saat di-scroll
      */}
      <div className={`
        w-full mx-auto px-8 flex justify-between items-center transition-all duration-500 border-b
        ${scrolled 
          ? 'py-4 bg-black/60 backdrop-blur-xl border-white/[0.1] shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
          : 'py-8 bg-transparent border-white/0'}
      `}>
        
        {/* Logo - Ikut mengecil sedikit biar estetik */}
        <h1 className={`font-bold tracking-tight transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
          <span className="bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) bg-clip-text text-transparent font-black">Yusri</span>
          <span className="text-white font-medium">'s Portofolio</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 text-[13px] font-medium uppercase tracking-[0.15em] text-gray-300">
          {navLinks.map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="transition-all duration-300 opacity-80 hover:opacity-100 hover:text-(--color-neon-purple) hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 focus:outline-none"
        >
          <div className={`h-[2px] transition-all duration-300 rounded-full ${isOpen ? 'w-8 rotate-45 translate-y-[8px] bg-(--color-neon-purple)' : 'w-8 bg-white'}`}></div>
          <div className={`h-[2px] bg-white transition-all duration-300 rounded-full ${isOpen ? 'opacity-0' : 'w-6'}`}></div>
          <div className={`h-[2px] transition-all duration-300 rounded-full ${isOpen ? 'w-8 -rotate-45 -translate-y-[8px] bg-(--color-neon-purple)' : 'w-4'}`}></div>
        </button>
      </div>

      {/* Full-Screen Mobile Menu Tetap Sama */}
      <div className={`
        fixed inset-0 z-[110] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      `}>
        <div className="absolute inset-0 bg-(--color-dark-bg)/80 backdrop-blur-[40px]"></div>
        <div className="relative z-10 flex flex-col items-center gap-10 text-3xl font-light tracking-[0.2em] text-gray-200">
          {navLinks.map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="hover:text-(--color-neon-purple) hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all active:scale-90"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}