export default function Skills() {
  const skillCategories = [
    {
      category: "Machine Learning",
      icon: "🤖",
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Scikit-Learn", "Model Deployment"],
      color: "var(--color-neon-purple)"
    },
    {
      category: "Data Analysis",
      icon: "📊",
      skills: ["Python (Pandas/NumPy)", "Data Visualization", "SQL", "Exploratory Data Analysis", "Statistics"],
      color: "var(--color-neon-blue)"
    },
    {
      category: "Web Development",
      icon: "🌐",
      skills: ["HTML/CSS", "JavaScript", "PHP", "Tailwind CSS", "MySQL"],
      color: "#00f2fe"
    },
    {
      category: "Design & Tools",
      icon: "🎨",
      skills: ["Figma (UI/UX)", "Adobe Illustrator", "Git/GitHub", "Canva"],
      color: "#f472b6"
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h3 className="text-5xl font-black tracking-tight">
            Technical <span className="text-(--color-neon-blue)">Skills</span>
          </h3>
          <div className="w-24 h-2 bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid berubah jadi 2 kolom di tablet, 4 kolom di layar lebar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-6 p-4 bg-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                {cat.icon}
              </div>
              
              <h4 className="text-xl font-bold mb-6 text-white tracking-tight" style={{ color: cat.color }}>
                {cat.category}
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-400 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}