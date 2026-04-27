import React from 'react';
import { 
  GraduationCap, 
  Smartphone, 
  ShieldAlert, 
  TrendingUp, 
  Layout, 
  PieChart, 
  UserPlus, 
  Coffee,
  DatabaseZap,
  Code
} from 'lucide-react';

const projectsData = [
  {
    title: 'Instan UTBK',
    desc: 'Ineractive e-learning platform designed to help students prepare for university entrance exams (UTBK).',
    tech: ['HTML/CSS', 'PHP', 'SQL'],
    icon: <GraduationCap className="w-5 h-5" />,
    image: '/projects/Instan UTBK.png'
  },
  {
    title: 'Ambanes App',
    desc: 'AI-powered pickup and delivery service application (Antar Jemput & Jasa Titip) specifically designed for UNNES students.',
    tech: ['FIGMA', 'UI/UX', 'Mobile Design'],
    icon: <Smartphone className="w-5 h-5" />,
    image: '/projects/Ambanes.png'
  },
  {
    title: 'Cyberbullying Analysis',
    desc: 'Sentiment analysis on tweet data for classifying cyberbullying categories (gender, religion, age, ethnicity) using WordCloud visualization.',
    tech: ['Python', 'NLP', 'Data Science'],
    icon: <ShieldAlert className="w-5 h-5" />,
    image: '/projects/Tweet Bullying.png'
  },
  {
    title: 'Economic Data Analysis',
    desc: 'Visualization of labor force participation and unemployment trends across different regions using time series analysis for economic insights.',
    tech: ['Python', 'Matplotlib', 'Analysis'],
    icon: <TrendingUp className="w-5 h-5" />,
    image: '/projects/Analisis Data Ekonomi.png'
  },
  {
    title: 'Instagram Engagement',
    desc: 'Instagram content performance dashboard based on post types to measure reach and engagement effectiveness.',
    tech: ['Data Analysis', 'Excel', 'Marketing'],
    icon: <Layout className="w-5 h-5" />,
    image: '/projects/Instagram Analisis.png'
  },
  {
    title: 'Bike Purchase Analysis',
    desc: 'Customer demographic analysis based on profession, region, and income to predict bicycle purchase behavior using a BI dashboard.',
    tech: ['Statistics', 'Data Visualization'],
    icon: <PieChart className="w-5 h-5" />,
    image: '/projects/Pembelian Sepeda.png'
  },
  {
    title: 'Pendaftaran Camaba',
    desc: 'Management information system for new student admissions, featuring exam cards, selection schedules, and bank payment integration.',
    tech: ['Web System', 'Database', 'UI Design'],
    icon: <UserPlus className="w-5 h-5" />,
    image: '/projects/Pendaftaran Camaba.png'
  },
  {
    title: 'Segelas Kopi UMKM',
    desc: 'E-commerce website for a local coffee business with product catalog, store locations, and a modern customer contact form.',
    tech: ['WordPress', 'Web Design', 'Hosting'],
    icon: <Coffee className="w-5 h-5" />,
    image: '/projects/Segelas Kopi.png'
  },
  {
    title: 'Data Professional Survey',
    desc: 'Comprehensive analysis of global data professional surveys to map salary trends, job satisfaction, and programming language preferences (Python/R).',
    tech: ['Data Analysis', 'Python', 'Pandas', 'Power BI'],
    icon: <DatabaseZap className="w-5 h-5" />,
    image: '/projects/Survei Profesional Data.png' 
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20" data-aos="fade-up">
          <h3 className="text-6xl font-black tracking-tight mb-6">
            Featured <span className="text-(--color-neon-blue)">Works</span>
          </h3>
          <div className="w-24 h-2 bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((proj, i) => (
            <div 
              key={i} 
              data-aos="zoom-in"
              data-aos-duration="600"
              className="bg-white/[0.03] backdrop-blur-md rounded-[32px] border border-white/5 hover:border-(--color-neon-purple)/50 transition-all group overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-52 overflow-hidden border-b border-white/5">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-5">
                  <h4 className="text-2xl font-bold group-hover:text-(--color-neon-purple) transition-colors font-mono tracking-tight">
                    {proj.title}
                  </h4> 
                  <div className="p-2.5 bg-white/5 rounded-xl text-(--color-neon-blue) group-hover:text-(--color-neon-purple) transition-colors border border-white/10">
                    {proj.icon || <Icon.Code className="w-5 h-5" />}
                  </div>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                  {proj.desc}
                </p>
                
                <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-white/5">
                  {proj.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 text-[10px] bg-white/5 border border-white/10 text-gray-400 rounded-lg font-extrabold uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}