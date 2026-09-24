import React, { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, ChevronLeft, ChevronRight } from 'lucide-react';

const experiences = [
  {
    period: '2026 — Present',
    company: 'Dicoding Academy',
    role: 'AWS AI Academy Cohort 2026',
    type: 'AI • Machine Learning • Learning journey',
    summary:
      'Joined AWS AI Academy by Dicoding to strengthen my AI and machine learning foundations through structured technical learning, hands-on exploration, and practical understanding of modern AI workflows.',
    highlights: ['AWS AI', 'ML foundations', 'Hands-on learning', 'Machine Learning', 'AI Workflows'],
    badge: 'AI Academy',
    images: [
      '/experience/aws-ai-academy-1.jpg',
      '/experience/aws-ai-academy-2.jpg',
      '/experience/aws-ai-academy-3.jpg',
    ],
  },
  {
    period: '2026 — Present',
    company: 'GenBI UNNES',
    role: 'Staff Creative Design',
    type: 'Visual design • Communication • Branding',
    summary:
      'Supporting GenBI UNNES with creative communication, visual materials, and campaign design so every program, message, and event can be delivered in a more engaging and impactful way.',
    highlights: ['Design communication', 'Campaign visuals', 'Brand storytelling', 'Leadership'],
    badge: 'GenBI',
    images: [
      '/experience/genbi-1.jpg',
      '/experience/genbi-2.jpg',
      '/experience/genbi-3.jpg',
    ],
  },
  {
    period: '2026 — Present',
    company: 'Generation.girl + GDG Semarang',
    role: 'TECH Community',
    type: 'STEM • Tech • Community growth',
    summary:
      'Actively involved in STEM and tech communities to keep learning, building networks, and expanding my exposure to innovation, collaboration, and real-world technology culture.',
    highlights: ['STEM community', 'Tech networking', 'Learning culture', 'Cloud', 'AI'],
    badge: 'Community',
    images: [
      '/experience/community-1.jpg',
      '/experience/community-2.jpg',
      '/experience/community-3.jpg',
    ],
  },
  {
    period: '2025',
    company: 'I-SECRET ILKOM UNNES',
    role: 'Secretary & Website Enhancement Coordinator',
    type: 'Documentation • Coordination • UI/UX',
    summary:
      'Handled organizational documentation and supported website enhancement initiatives with a focus on improving the user experience and maintaining a more polished digital presence.',
    highlights: ['Administration', 'Documentation', 'Website enhancement', 'UI/UX coordination'],
    badge: 'I-SECRET',
    images: [
      '/experience/isecret-1.jpg',
      '/experience/isecret-2.jpg',
      '/experience/isecret-3.jpg',
    ],
  },
  {
    period: '2025',
    company: 'UKM Karate UNNES',
    role: 'Staff Media & Information',
    type: 'Media • Information • Event support',
    summary:
      'Managed media and information flow for karate organization activities, helping communicate programs, announcements, and event activities to the wider student community.',
    highlights: ['Media content', 'Info distribution', 'Event support'],
    badge: 'Karate',
    images: [
      '/experience/karate-1.jpg',
      '/experience/karate-2.jpg',
      '/experience/karate-3.jpg',
    ],
  },
];

export default function Experience() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const prevExperience = () => {
    setMobileIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const nextExperience = () => {
    setMobileIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="experience" className="experience-section py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <p className="experience-kicker">Experience</p>
          <h3 className="text-5xl font-black tracking-tight leading-none">
            Building <span className="text-(--color-neon-blue)">solutions</span> with impact.
          </h3>
          <div className="w-20 h-1.5 bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="hidden md:block">
          <div className="experience-list">
            {experiences.map((experience, index) => {
              const reversed = index % 2 === 1;

              return (
                <article
                  key={experience.role}
                  className={`experience-card ${reversed ? 'reversed' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="experience-copy">
                    <div className="experience-meta">
                      <span className="experience-pill">{experience.period}</span>
                      <span className="experience-divider" />
                      <span>{experience.company}</span>
                    </div>

                    <div className="experience-heading">
                      <span className="experience-icon">
                        <BriefcaseBusiness className="w-5 h-5" />
                      </span>
                      <h4>{experience.role}</h4>
                    </div>

                    <p className="experience-type">{experience.type}</p>
                    <p className="experience-summary">{experience.summary}</p>

                    <div className="experience-highlights">
                      {experience.highlights.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="experience-link">
                      <span>Selected scope</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="experience-visual">
                    <div className="photo-collage">
                      <img
                        src={experience.images[0]}
                        alt={experience.role}
                        className="photo-card photo-main"
                      />
                      <img
                        src={experience.images[1]}
                        alt={`${experience.role} detail`}
                        className="photo-card photo-side photo-side-one"
                      />
                      <img
                        src={experience.images[2]}
                        alt={`${experience.role} detail 2`}
                        className="photo-card photo-side photo-side-two"
                      />
                      <div className="photo-badge">{experience.badge}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="block md:hidden">
          <div className="experience-mobile-shell">
            <button
              type="button"
              aria-label="Previous experience"
              onClick={prevExperience}
              className="experience-mobile-nav experience-mobile-nav-left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="experience-mobile-viewport">
              <div
                className="experience-mobile-track"
                style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
              >
                {experiences.map((experience) => (
                  <article key={experience.role} className="experience-mobile-card">
                    <div className="experience-mobile-header">
                      <span className="experience-pill">{experience.period}</span>
                      <span className="experience-mobile-company">{experience.company}</span>
                    </div>

                    <div className="experience-heading">
                      <span className="experience-icon">
                        <BriefcaseBusiness className="w-5 h-5" />
                      </span>
                      <h4>{experience.role}</h4>
                    </div>

                    <p className="experience-type">{experience.type}</p>

                    <div className="experience-mobile-badge-wrap">
                      <span className="photo-badge experience-mobile-badge">{experience.badge}</span>
                    </div>

                    <div className="experience-visual experience-mobile-visual">
                      <div className="photo-collage experience-mobile-collage">
                        <img
                          src={experience.images[0]}
                          alt={experience.role}
                          className="photo-card photo-main"
                        />
                        <img
                          src={experience.images[1]}
                          alt={`${experience.role} detail`}
                          className="photo-card photo-side photo-side-one"
                        />
                        <img
                          src={experience.images[2]}
                          alt={`${experience.role} detail 2`}
                          className="photo-card photo-side photo-side-two"
                        />
                      </div>
                    </div>

                    <p className="experience-summary">{experience.summary}</p>

                    <div className="experience-highlights">
                      {experience.highlights.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="experience-link">
                      <span>Selected scope</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              aria-label="Next experience"
              onClick={nextExperience}
              className="experience-mobile-nav experience-mobile-nav-right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
