export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/20 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Logo Lagi di Bawah */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) bg-clip-text text-transparent">
              Yusri
            </span>
            <span className="text-white">'s Portofolio</span>
          </h2>
          <p className="text-gray-500 mt-2 font-medium tracking-widest text-xs uppercase">
            Crafting Insights • Designing Experiences
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-bold text-gray-400 uppercase tracking-widest">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider Tipis */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Copyright & Info */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-gray-500 text-sm font-medium gap-4">
          <p>© {currentYear} Yusri. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-default">Semarang, ID</span>
          </div>
        </div>

      </div>
    </footer>
  );
}