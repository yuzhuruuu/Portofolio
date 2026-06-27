import React from 'react';
import { 
  GraduationCap, 
  Smartphone, 
  ShieldAlert, 
  TrendingUp, 
  Layout, 
  UserPlus, 
  Shirt,
  DatabaseZap
} from 'lucide-react';

const projectsData = [
  {
    title: 'Washly',
    desc: 'A web-based laundry service management system for tracking orders, services, and customer activity efficiently.',
    tech: ['HTML/CSS', 'Laravel', 'PHP', 'MySQL'],
    icon: <Shirt className="w-5 h-5" />,
    image: '/projects/Washly.png',
    link: 'http://washly.lovestoblog.com'
  },
  {
    title: 'Sentiment Analysis of Public Opinion on Shopee',
    desc: 'A machine learning project focusing on tracking and analyzing public sentiment on social media platforms regarding the massive adaptation of Artificial Intelligence and Large Language Models (LLMs).',
    tech: ["Python", "Jupyter", "Scikit-Learn", "NLP"],
    icon: <DatabaseZap className="w-5 h-5" />,
    image: '/projects/ABSA Shopee.png',
    link: 'https://huggingface.co/spaces/yusri22/ABSA-Shopee-Kel-3'
  },
  {
    title: 'DSS Priority Handling of Stunting',
    desc: 'A web-based Decision Support System using Fuzzy-TOPSIS algorithms to optimize and prioritize urgent nutritional interventions for toddlers, reducing diagnostic subjectivity for healthcare centers.',
    tech: ["PHP Native", "MySQL", "JavaScript", "Chart.js"],
    icon: <ShieldAlert className="w-5 h-5" />,
    image: '/projects/Stunting Engine.png',
    link: 'https://stunting-engine.kesug.com/'
  },
  {
    title: 'Registration of New Prospective Students',
    desc: 'Management information system for new student admissions, featuring exam cards, selection schedules, and bank payment integration.',
    tech: ['Web System', 'Database', 'UI Design'],
    icon: <UserPlus className="w-5 h-5" />,
    image: '/projects/Pendaftaran Camaba.png',
    link: null
  },
  {
    title: 'Ambanes App',
    desc: 'AI-powered pickup and delivery service application (Antar Jemput & Jasa Titip) specifically designed for UNNES students.',
    tech: ['FIGMA', 'UI/UX', 'Mobile Design'],
    icon: <Smartphone className="w-5 h-5" />,
    image: '/projects/Ambanes.png',
    link: 'https://www.figma.com/proto/5yxPhYB2YJrOE2NDICqVzh/WF-AMBANESS?node-id=188-337&t=ZjtU8CY6OreOdE4A-1'
  },
  {
    title: 'Instan UTBK',
    desc: 'Interactive e-learning platform designed to help students prepare for university entrance exams (UTBK).',
    tech: ['HTML/CSS', 'PHP', 'SQL'],
    icon: <GraduationCap className="w-5 h-5" />,
    image: '/projects/Instan UTBK.png',
    link: 'http://instanutbk.lovestoblog.com/pages/about.php'
  },
  {
    title: 'Economic Data Analysis',
    desc: 'Visualization of labor force participation and unemployment trends across different regions using time series analysis for economic insights.',
    tech: ['Python', 'Matplotlib', 'Analysis'],
    icon: <TrendingUp className="w-5 h-5" />,
    image: '/projects/Analisis Data Ekonomi.png',
    link: null
  },
  {
    title: 'Cyberbullying Analysis',
    desc: 'Sentiment analysis on tweet data for classifying cyberbullying categories (gender, religion, age, ethnicity) using WordCloud visualization.',
    tech: ['Python', 'NLP', 'Data Science'],
    icon: <ShieldAlert className="w-5 h-5" />,
    image: '/projects/Tweet Bullying.png',
    link: null
  },
  {
    title: 'Instagram Engagement',
    desc: 'Instagram content performance dashboard based on post types to measure reach and engagement effectiveness.',
    tech: ['Data Analysis', 'Excel', 'Marketing'],
    icon: <Layout className="w-5 h-5" />,
    image: '/projects/Instagram Analisis.png',
    link: null
  },
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
          {projectsData.map((proj, i) => {
            // Element kontainer gambar asli tanpa perubahan styling
            const ImageElement = (
              <div className="relative h-52 overflow-hidden border-b border-white/5">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
              </div>
            );

            return (
              <div 
                key={i} 
                data-aos="zoom-in"
                data-aos-duration="600"
                className="bg-white/[0.03] backdrop-blur-md rounded-[32px] border border-white/5 hover:border-(--color-neon-purple)/50 transition-all group overflow-hidden flex flex-col h-full"
              >
                {/* Gambar jadi link jika punya URL demo */}
                {proj.link ? (
                  <a href={proj.link} target="_blank" rel="noreferrer" className="block cursor-pointer">
                    {ImageElement}
                  </a>
                ) : (
                  ImageElement
                )}

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-5">
                    <h4 className="text-2xl font-bold group-hover:text-(--color-neon-purple) transition-colors font-mono tracking-tight">
                      {/* Judul jadi link jika punya URL demo */}
                      {proj.link ? (
                        <a href={proj.link} target="_blank" rel="noreferrer" className="hover:underline cursor-pointer">
                          {proj.title}
                        </a>
                      ) : (
                        proj.title
                      )}
                    </h4> 
                    <div className="p-2.5 bg-white/5 rounded-xl text-(--color-neon-blue) group-hover:text-(--color-neon-purple) transition-colors border border-white/10">
                      {proj.icon}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}