import React, { useState } from 'react';
import * as Icon from 'lucide-react';

const skillCategories = [
  {
    category: 'Machine Learning',
    icon: 'Cpu',
    focus: 'Model building & intelligent systems',
    accent: 'purple',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Scikit-Learn', 'Model Deployment'],
    description: 'Building predictive systems, classification models, and data-driven automation that learn from patterns.'
  },
  {
    category: 'Data Scientist',
    icon: 'BarChart3',
    focus: 'Analytics & decision making',
    accent: 'blue',
    skills: ['Python (Pandas/NumPy)', 'Data Visualization', 'SQL', 'Exploratory Data', 'Statistics'],
    description: 'Turning raw data into practical insights and measurable business decisions with clarity and precision.'
  },
  {
    category: 'Web Development',
    icon: 'Globe',
    focus: 'Front-end & product experience',
    accent: 'purple',
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'Tailwind CSS', 'MySQL', 'React', 'Bootstrap', 'Laravel'],
    description: 'Crafting clean, responsive, and interactive interfaces that feel modern, intuitive, and user-friendly.'
  },
  {
    category: 'Tools & Visualization',
    icon: 'Palette',
    focus: 'Design & storytelling',
    accent: 'blue',
    skills: ['Figma (UI/UX)', 'Git/GitHub', 'Power BI', 'Tableau'],
    description: 'Blending design aesthetics, collaboration workflows, and data storytelling to communicate ideas effectively.'
  },
];

const marqueeSkills = [
  'Scikit-Learn', 'Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'SQL', 'Python',
  'React', 'Tailwind CSS', 'PHP', 'Figma', 'Power BI', 'Tableau', 'GitHub', 'Data Visualization',
  'Statistics', 'Machine Learning', 'Web Development', 'UI/UX', 'Model Deployment', 'Exploratory Data'
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = skillCategories[activeIndex];

  const prevCategory = () => {
    setActiveIndex((prev) => (prev === 0 ? skillCategories.length - 1 : prev - 1));
  };

  const nextCategory = () => {
    setActiveIndex((prev) => (prev === skillCategories.length - 1 ? 0 : prev + 1));
  };

  const renderIcon = (iconName) => {
    const LucideIcon = Icon[iconName] || Icon.Code;
    return <LucideIcon className="w-8 h-8" strokeWidth={1.7} />;
  };

  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-5xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
            Technical <span style={{ color: 'var(--color-neon-blue)' }}>Skills</span>
          </h3>
          <div className="w-24 h-2 bg-gradient-to-r from-[var(--color-neon-purple)] to-[var(--color-neon-blue)] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="hidden md:block">
          <div className="mb-12 overflow-hidden rounded-full border border-slate-200/80 bg-slate-100/80 shadow-[0_0_30px_rgba(59,130,246,0.10)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-[0_0_30px_rgba(59,130,246,0.15)]" data-aos="fade-up">
            <div className="marquee-track py-4">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="marquee-group">
                  {marqueeSkills.map((skill, index) => (
                    <span
                      key={`${groupIndex}-${index}`}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-slate-700 dark:border-white/10 dark:bg-slate-900/20 dark:text-slate-200"
                    >
                      <span className="mr-2 text-[var(--color-neon-purple)]">✦</span>
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center gap-3 md:gap-5" data-aos="fade-up">
            <button
              type="button"
              aria-label="Previous skill category"
              onClick={prevCategory}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-white shadow-[0_0_24px_rgba(168,85,247,0.2)] transition hover:-translate-x-1 hover:border-[var(--color-neon-purple)] hover:text-[var(--color-neon-purple)]"
            >
              <Icon.ChevronLeft className="h-6 w-6" />
            </button>

            <div className="w-full max-w-5xl overflow-hidden rounded-[30px] border border-slate-200/80 bg-slate-50/90 p-2 shadow-[0_0_30px_rgba(59,130,246,0.05)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40 dark:shadow-[0_0_40px_rgba(59,130,246,0.12)]">
              <div
                className="rounded-[24px] border border-slate-200/70 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 md:p-8 dark:border-white/5 dark:from-slate-950/80 dark:via-slate-900/70 dark:to-slate-950/80"
                style={{
                  boxShadow: activeCategory.accent === 'purple'
                    ? 'inset 0 0 0 1px rgba(168,85,247,0.12), 0 0 14px rgba(168,85,247,0.06)'
                    : 'inset 0 0 0 1px rgba(59,130,246,0.12), 0 0 14px rgba(59,130,246,0.06)'
                }}
              >
                <div className="mb-6 rounded-[22px] border border-slate-200/80 bg-white/80 p-6 dark:border-white/10 dark:bg-white/[0.02]">
                  <div
                    className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-white"
                    style={{
                      color: activeCategory.accent === 'purple' ? 'var(--color-neon-purple)' : 'var(--color-neon-blue)',
                      boxShadow: activeCategory.accent === 'purple'
                        ? '0 0 14px rgba(168,85,247,0.12)'
                        : '0 0 14px rgba(59,130,246,0.12)'
                    }}
                  >
                    {renderIcon(activeCategory.icon)}
                  </div>

                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-slate-500 dark:text-slate-400">
                    {activeCategory.focus}
                  </p>

                  <h4 className="text-3xl font-black tracking-tight text-slate-700 md:text-4xl dark:text-white">
                    {activeCategory.category}
                  </h4>

                  <p className="mt-6 text-sm leading-7 text-slate-600 md:text-base dark:text-slate-300">
                    {activeCategory.description}
                  </p>
                </div>

                <div className="rounded-[22px] border border-slate-200/80 bg-slate-100/80 p-5 md:p-6 dark:border-white/10 dark:bg-slate-950/60">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                      Core stack
                    </p>
                    <span
                      className="rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]"
                      style={{
                        color: activeCategory.accent === 'purple' ? 'var(--color-neon-purple)' : 'var(--color-neon-blue)',
                        borderColor: activeCategory.accent === 'purple' ? 'rgba(168,85,247,0.22)' : 'rgba(59,130,246,0.22)',
                        backgroundColor: activeCategory.accent === 'purple' ? 'rgba(168,85,247,0.06)' : 'rgba(59,130,246,0.06)'
                      }}
                    >
                      {activeCategory.skills.length} items
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {activeCategory.skills.map((skill, index) => (
                      <span
                        key={skill}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-800 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
                        style={{
                          animationDelay: `${index * 80}ms`,
                          boxShadow: activeCategory.accent === 'purple'
                            ? '0 0 10px rgba(168,85,247,0.04)'
                            : '0 0 10px rgba(59,130,246,0.04)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Next skill category"
              onClick={nextCategory}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-white shadow-[0_0_24px_rgba(59,130,246,0.2)] transition hover:translate-x-1 hover:border-[var(--color-neon-blue)] hover:text-[var(--color-neon-blue)]"
            >
              <Icon.ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-3" data-aos="fade-up">
            {skillCategories.map((category, index) => (
              <button
                key={category.category}
                type="button"
                aria-label={`Show ${category.category}`}
                onClick={() => setActiveIndex(index)}
                className="h-3 rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === index ? '40px' : '12px',
                  background: activeIndex === index
                    ? category.accent === 'purple'
                      ? 'linear-gradient(90deg, var(--color-neon-purple), var(--color-neon-blue))'
                      : 'linear-gradient(90deg, var(--color-neon-blue), var(--color-neon-purple))'
                    : 'rgba(148, 163, 184, 0.5)'
                }}
              />
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <div className="mb-6 overflow-hidden rounded-full border border-slate-200/80 bg-slate-100/80 shadow-[0_0_20px_rgba(59,130,246,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-[0_0_20px_rgba(59,130,246,0.12)]" data-aos="fade-up">
            <div className="marquee-track py-3">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="marquee-group">
                  {marqueeSkills.map((skill, index) => (
                    <span
                      key={`${groupIndex}-${index}`}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:bg-slate-900/20 dark:text-slate-200"
                    >
                      <span className="mr-1.5 text-[var(--color-neon-purple)]">✦</span>
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center gap-2" data-aos="fade-up">
            <button
              type="button"
              aria-label="Previous skill category"
              onClick={prevCategory}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <Icon.ChevronLeft className="h-4 w-4" />
            </button>

            <div className="w-full overflow-hidden rounded-[26px] border border-slate-200/80 bg-slate-50/90 p-2 shadow-[0_0_18px_rgba(59,130,246,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/40 dark:shadow-[0_0_26px_rgba(59,130,246,0.12)]">
              <div
                className="rounded-[20px] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 dark:border-white/5 dark:from-slate-950/80 dark:via-slate-900/70 dark:to-slate-950/80"
                style={{
                  boxShadow: activeCategory.accent === 'purple'
                    ? 'inset 0 0 0 1px rgba(168,85,247,0.12), 0 0 12px rgba(168,85,247,0.06)'
                    : 'inset 0 0 0 1px rgba(59,130,246,0.12), 0 0 12px rgba(59,130,246,0.06)'
                }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-slate-800/80 dark:text-white"
                    style={{
                      color: activeCategory.accent === 'purple' ? 'var(--color-neon-purple)' : 'var(--color-neon-blue)',
                      boxShadow: activeCategory.accent === 'purple'
                        ? '0 0 12px rgba(168,85,247,0.12)'
                        : '0 0 12px rgba(59,130,246,0.12)'
                    }}
                  >
                    {renderIcon(activeCategory.icon)}
                  </div>

                  <span
                    className="rounded-full border px-2 py-1 text-[8px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: activeCategory.accent === 'purple' ? 'var(--color-neon-purple)' : 'var(--color-neon-blue)',
                      borderColor: activeCategory.accent === 'purple' ? 'rgba(168,85,247,0.22)' : 'rgba(59,130,246,0.22)',
                      backgroundColor: activeCategory.accent === 'purple' ? 'rgba(168,85,247,0.06)' : 'rgba(59,130,246,0.06)'
                    }}
                  >
                    {activeCategory.skills.length}
                  </span>
                </div>

                <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  {activeCategory.focus}
                </p>

                <h4 className="text-xl font-black tracking-tight text-slate-700 dark:text-white">
                  {activeCategory.category}
                </h4>

                <p className="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-300">
                  {activeCategory.description}
                </p>

                <div className="mt-4 rounded-[18px] border border-slate-200/80 bg-slate-100/80 p-3 dark:border-white/10 dark:bg-slate-950/60">
                  <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Core stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {activeCategory.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Next skill category"
              onClick={nextCategory}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Icon.ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2" data-aos="fade-up">
            {skillCategories.map((category, index) => (
              <button
                key={category.category}
                type="button"
                aria-label={`Show ${category.category}`}
                onClick={() => setActiveIndex(index)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: activeIndex === index ? '24px' : '8px',
                  background: activeIndex === index
                    ? category.accent === 'purple'
                      ? 'linear-gradient(90deg, var(--color-neon-purple), var(--color-neon-blue))'
                      : 'linear-gradient(90deg, var(--color-neon-blue), var(--color-neon-purple))'
                    : 'rgba(148, 163, 184, 0.5)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
