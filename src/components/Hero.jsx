import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 relative z-10 px-6">
      <div className="text-center max-w-6xl">
        
        <p data-aos="fade-down" data-aos-delay="100" className="text-lg font-mono text-(--color-neon-blue) mb-6 tracking-[0.3em] uppercase">
          / Hello World
        </p>
        
        <h2 data-aos="zoom-in" data-aos-duration="1000" className="text-6xl md:text-[90px] font-bold tracking-tight leading-[1.1] mb-8">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-(--color-neon-purple) via-(--color-neon-blue) to-(--color-neon-purple) bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            Annisa Yusri
          </span>
        </h2>
        
        {/* Deskripsi Satu Kesatuan - Lebih Mengalir */}
        <div className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed font-medium min-h-[100px]">
          <Typewriter
            options={{
              delay: 15, // Speed ngebut tapi tetep elegan
              cursor: "▋",
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter
                // Kalimat Pertama
                .typeString('Passionate about turning data into <span class="text-neon-purple font-bold">insights</span> and building impactful <span class="text-neon-blue font-bold">solutions</span>.')
                // Jeda sebentar sebelum ngetik baris kedua
                .pauseFor(300) 
                // Pindah baris (Enter)
                .typeString('<br class="hidden md:block" />') 
                // Kalimat Kedua
                .typeString('Exploring the intersection of <span class="text-(--color-neon-purple)">Data</span>, <span class="text-(--color-neon-blue)">Machine Learning</span>, and Creativity.')
                .start();
            }}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up">
          <a 
            href="#projects" 
            className="group px-8 py-3.5 bg-(--color-neon-purple) text-white text-lg rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all text-center flex items-center gap-2"
          >
            My Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3.5 bg-transparent text-gray-700 dark:text-gray-300 text-lg rounded-2xl font-bold border border-gray-700/20 hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}