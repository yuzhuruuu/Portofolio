import React from 'react';
import { BrainCircuit, Database, Palette } from 'lucide-react';

export default function About() {
  const services = [
    {
      title: "Data Scientist",
      desc: "Transforming raw datasets into actionable insights using Python and SQL.",
      icon: <Database className="w-8 h-8" />,
      color: "var(--color-neon-purple)"
    },
    {
      title: "UI/UX Design",
      desc: "Designing intuitive user interfaces and seamless experiences with Figma.",
      icon: <Palette className="w-8 h-8" />,
      color: "var(--color-neon-blue)"
    },
    {
      title: "Machine Learning",
      desc: "Developing intelligent systems that can learn and improve from experience.",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "#00f2fe"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Judul Section - Muncul dari bawah */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h3 className="text-5xl font-black tracking-tight">
            About <span className="text-(--color-neon-purple)">Me</span>
          </h3>
          <div className="w-20 h-1.5 bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Sisi Kiri: Muncul dari Kiri */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="100" data-aos-duration="600">
            <h4 className="text-4xl font-bold leading-tight">
              A Passionate <span className="text-(--color-neon-blue)">Data Enthusiast</span> & Machine Learning.
            </h4>
            
            <div className="text-xl text-gray-400 leading-relaxed space-y-6">
              <p>
                As an Information Systems student at <span className="text-white">Universitas Negeri Semarang</span>, I’m passionate about turning ideas into meaningful digital solutions. I enjoy working at the intersection of data, technology, and design.
              </p>
              <p>
                My focus lies in Data Analysis and <span className="text-white">Machine Learning</span>, where I explore how data can solve real-world problems while applying UI/UX principles.
              </p>
            </div>
          </div>

          {/* Sisi Kanan: Service Cards - Muncul dari Kanan */}
          <div className="space-y-6" data-aos="fade-left" data-aos-delay="100" data-aos-duration="600">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
              >
                {/* Efek Cahaya saat Hover */}
                <div 
                  className="absolute -inset-1 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: service.color }}
                ></div>

                <div className="flex gap-6 items-start relative z-10">
                  <div className="text-4xl p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div>
                    <h5 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors" style={{ color: service.color }}>
                      {service.title}
                    </h5>
                    <p className="text-gray-400 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}