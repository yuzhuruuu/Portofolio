import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`
        fixed top-24 right-6 z-[200] 
        w-12 h-12 md:w-14 md:h-14 rounded-full
        flex items-center justify-center
        transition-all duration-500 ease-in-out
        backdrop-blur-md border
        hover:scale-110 active:scale-95 shadow-xl
        ${theme === 'dark' 
          ? 'bg-white/10 border-white/20 text-yellow-400 shadow-yellow-500/10' 
          : 'bg-black/5 border-black/10 text-purple-600 shadow-purple-500/20'}
      `}
    >
      <div className={`transition-transform duration-500 ${theme === 'dark' ? 'rotate-0' : 'rotate-[360deg]'}`}>
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </div>

      <div className={`
        absolute inset-0 rounded-full blur-xl z-[-1] opacity-40
        ${theme === 'dark' ? 'bg-yellow-400/30' : 'bg-purple-600/30'}
      `}></div>
    </button>
  );
}