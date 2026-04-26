import React from 'react';
import * as Icon from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      category: "Machine Learning",
      icon: "Cpu", // Pakai nama ikon Lucide
      skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Scikit-Learn", "Model Deployment"],
      color: "var(--color-neon-purple)"
    },
    {
      category: "Data Scientist",
      icon: "BarChart3",
      skills: ["Python (Pandas/NumPy)", "Data Visualization", "SQL", "Exploratory Data", "Statistics"],
      color: "var(--color-neon-blue)"
    },
    {
      category: "Web Development",
      icon: "Globe",
      skills: ["HTML/CSS", "JavaScript", "PHP", "Tailwind CSS", "MySQL", "React"],
      color: "var(--color-neon-blue)" // Disamakan biar konsisten neon blue
    },
    {
      category: "Tools & Vi",
      icon: "Palette",
      skills: ["Figma (UI/UX)", "Git/GitHub", "Power BI", "Tableau"],
      color: "var(--color-neon-purple)" // Disamakan biar selang-seling purple-blue
    }
  ];

  // Fungsi helper untuk render ikon Lucide biar gak undefined
  const renderIcon = (iconName, color) => {
    const LucideIcon = Icon[iconName] || Icon.Code;
    return <LucideIcon className="w-8 h-8 transition-all duration-500" strokeWidth={1.5} />;
  };

  return (
    <section id="skills" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20" data-aos="fade-up">
          <h3 className="text-5xl font-black tracking-tight">
            Technical <span className="text-(--color-neon-blue)">Skills</span>
          </h3>
          <div className="w-24 h-2 bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
          {skillCategories.map((cat, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay="100"
              data-aos-duration="600"
              className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 group flex flex-col items-center text-center hover:bg-white/[0.04]"
            >
              {/* Icon Container: Awalnya abu-abu, hover jadi warna neon */}
              <div 
                className="mb-6 p-5 bg-white/5 rounded-2xl transition-all duration-500 group-hover:scale-110 text-gray-500"
                style={{ '--hover-color': cat.color }}
              >
                <div className="group-hover:text-[var(--hover-color)] group-hover:drop-shadow-[0_0_10px_var(--hover-color)]">
                  {renderIcon(cat.icon)}
                </div>
              </div>
              
              {/* Judul: Default putih, hover nyala */}
              <h4 className="text-xl font-bold mb-6 text-white tracking-tight group-hover:text-[var(--hover-color)] transition-colors duration-500" style={{ '--hover-color': cat.color }}>
                {cat.category}
              </h4>

              <div className="flex flex-wrap justify-center gap-2">
                {cat.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-200 group-hover:border-white/20 transition-all duration-500"
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