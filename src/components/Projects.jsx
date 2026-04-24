import React from 'react';
import * as Icon from 'lucide-react';

const projectsData = [
  {
    title: 'Instan UTBK',
    desc: 'Platform e-learning interaktif untuk persiapan ujian masuk perguruan tinggi (UTBK).',
    tech: ['HTML/CSS', 'PHP', 'SQL'],
    // Tambahkan "Icon." di depan nama ikonnya
    icon: <Icon.Book className="w-8 h-8" />
  },
  {
    title: 'I-SECRET Official Website',
    desc: 'Sebagai Project Manager dalam pengembangan website organisasi Information Research and Creative Technology.',
    tech: ['Project Management', 'UI/UX'],
    icon: <Icon.Globe className="w-8 h-8" />
  },
  {
    title: 'Ambanes',
    desc: 'Aplikasi Antar Jemput-Jasa Titip khusus untuk mahasiswa UNNES berbasis AI.',
    tech: ['UI/UX', 'AI'],
    icon: <Icon.Plane className="w-8 h-8" />
  },
  {
    title: 'Segelas Kopi',
    desc: 'Website e-commerce untuk UMKM yang dihosting menggunakan Hostinger dan dilengkapi dengan fitur modern',
    tech: ['Wordpress', 'UI/UX', 'Business Strategy'],
    icon: <Icon.FolderGit2 className="w-8 h-8" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-6xl font-black tracking-tight mb-6">Featured <span className="text-(--color-neon-blue)">Works</span></h3>
          <div className="w-24 h-2 bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((proj, i) => (
            <div key={i} className="bg-white/[0.03] backdrop-blur-md p-10 rounded-3xl border border-white/5 hover:border-(--color-neon-purple)/50 transition-all group hover:scale-[1.03] cursor-pointer">
              <div className="flex justify-between items-center mb-8">
                  <h4 className="text-3xl font-bold group-hover:text-(--color-neon-purple) transition-colors">{proj.title}</h4>
                  {/* Gunakan div pembungkus agar ikonnya rapi dan warnanya matching */}
                  <div className="p-3 bg-white/5 rounded-2xl text-(--color-neon-blue) group-hover:text-(--color-neon-purple) transition-colors">
                    {proj.icon}
                  </div>
              </div>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">{proj.desc}</p>
              <div className="flex gap-4 flex-wrap">
                {proj.tech.map(t => (
                  <span key={t} className="px-4 py-2 text-sm bg-white/5 border border-white/10 text-gray-300 rounded-xl font-bold">
                    {t}
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