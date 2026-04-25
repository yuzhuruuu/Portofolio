export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 relative z-10 px-6">
      <div className="text-center max-w-6xl">
        <p className="text-lg font-mono text-(--color-neon-blue) mb-6 tracking-[0.3em] uppercase">/ Hello World</p>
        
        <h2 className="text-6xl md:text-[90px] font-bold tracking-tight leading-[1.1] mb-8">
          Hi, I'm <br />
          <span className="bg-gradient-to-r from-(--color-neon-purple) via-(--color-neon-blue) to-(--color-neon-purple) bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            Annisa Yusri
          </span>
        </h2>
        
        <div className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium space-y-1">
          <p>Passionate about turning data into insights and building impactful, <span className="text-white font-bold">solutions</span>.</p>
          <p>Exploring the intersection of <span className="text-(--color-neon-purple)">Data</span>, <span className="text-(--color-neon-blue)">Machine Learning</span>, and Creativity.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href="#projects" 
            className="px-8 py-3.5 bg-(--color-neon-purple) text-white text-lg rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all text-center"
          >
            My Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3.5 bg-transparent text-white text-lg rounded-2xl font-bold border border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}