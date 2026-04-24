import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-transparent">
      {/* Container utama header */}
      <div className="w-full mx-auto px-8 py-6 flex justify-between items-center bg-white/[0.02] backdrop-blur-md border-b border-white/[0.05] relative z-[120]">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) bg-clip-text text-transparent font-black">Yusri</span>
          <span className="text-white font-medium">'s Portofolio</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 text-[13px] font-medium uppercase tracking-[0.15em] text-gray-300">
          {navLinks.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-all relative group opacity-80 hover:opacity-100">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Button - Dibuat Lebih Ramping & Estetik */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 focus:outline-none"
        >
          {/* Garis atas */}
          <div className={`h-[2px] bg-white transition-all duration-300 rounded-full ${isOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'}`}></div>
          {/* Garis tengah */}
          <div className={`h-[2px] bg-white transition-all duration-300 rounded-full ${isOpen ? 'opacity-0' : 'w-6'}`}></div>
          {/* Garis bawah */}
          <div className={`h-[2px] bg-white transition-all duration-300 rounded-full ${isOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-4'}`}></div>
        </button>
      </div>

      {/* Full-Screen Mobile Menu dengan Blur Maksimal */}
      <div className={`
        fixed inset-0 z-[110] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      `}>
        {/* Latar Belakang Blur */}
        <div className="absolute inset-0 bg-(--color-dark-bg)/80 backdrop-blur-[40px]"></div>

        {/* Link Menu - Menggunakan flex-col agar semua item kelihatan */}
        <div className="relative z-10 flex flex-col items-center gap-10 text-3xl font-light tracking-[0.2em] text-gray-200">
          {navLinks.map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="hover:text-(--color-neon-purple) transition-all active:scale-90"
              style={{ transitionDelay: `${index * 50}ms` }} // Efek muncul satu-satu
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}