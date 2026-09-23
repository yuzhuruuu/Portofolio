import React, { useRef, useState } from 'react';
import * as Icon from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const renderBrandIcon = (brandName, color = "currentColor") => {
    if (brandName === 'linkedin') {
      return (
        <svg
          viewBox="0 0 24 24"
          className="block w-7 h-7"
          aria-label="LinkedIn icon"
          role="img"
          fill="currentColor"
          style={{ color: 'var(--text-main)', display: 'block' }}
        >
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.74h2.88v8.76H5.5V9.74Zm4.53 0h2.76v1.2h.04c.38-.73 1.32-1.5 2.72-1.5 2.91 0 3.45 1.92 3.45 4.4v6.66h-2.88v-6.23c0-1.49-.03-3.41-2.08-3.41-2.08 0-2.4 1.63-2.4 3.3v6.34H10.03V9.74Z" />
        </svg>
      );
    }

    const hex = '1e293b';
    const cdnUrl = `https://cdn.simpleicons.org/${brandName}/${hex}`;
    return (
      <img
        src={cdnUrl}
        alt={`${brandName} icon`}
        className="w-full h-full opacity-100 group-hover:opacity-100 transition-opacity brand-icon"
        style={{ display: 'block' }}
      />
    );
  }; 

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_u5a68zi',   
      'template_k2wyfkj',  
      form.current,
      'yHXUdQ4lldt9-g9S-'    
    )
    .then((result) => {
        console.log("SUKSES:", result.text);
        setStatus('Success! Message sent.'); 
        form.current.reset(); 
    }, (error) => {
        setStatus('Failed to send. Please try again.');
        console.log(error.text);
    });
  };

  const renderLucideIcon = (IconComponent, fallback) => {
    return IconComponent ? <IconComponent className="w-full h-full" strokeWidth={1.5} /> : <span>{fallback}</span>;
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Judul Section */}
        <div className="text-center mb-28" data-aos="fade-up" data-aos-duration="600">
          <h3 className="text-5xl font-black tracking-tight" style={{ color: 'var(--text-main)' }}>
            Let's <span style={{ color: 'var(--color-neon-purple)' }}>Talk</span>
          </h3>
          <p className="text-slate-600 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Got a project, idea, or even just a concept you want to explore? 
            I’m always open to collaboration and meaningful conversations. 
            Feel free to reach out, let’s bring ideas to life together.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Sisi Kiri */}
          <div className="space-y-12" data-aos="fade-right" data-aos-duration="600">
            <div>
              <h4 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-main)' }}>Contact Information</h4>
              <div className="space-y-8">
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-3.5 group-hover:bg-(--color-neon-blue)/20 transition-all text-(--color-neon-blue)">
                    {renderLucideIcon(Icon.Mail, "📧")}
                  </div>
                  <div>
                    <p className="text-sm uppercase font-bold" style={{ color: 'var(--text-muted)' }}>Email</p>
                    <p className="text-lg" style={{ color: 'var(--text-main)' }}>annisayusri59@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-3.5 group-hover:bg-(--color-neon-blue)/20 transition-all text-(--color-neon-blue)">
                    {renderLucideIcon(Icon.Phone, "📞")}
                  </div>
                  <div>
                    <p className="text-sm uppercase font-bold" style={{ color: 'var(--text-muted)' }}>Phone</p>
                    <p className="text-lg" style={{ color: 'var(--text-main)' }}>+62 896 3587 6114</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-3.5 group-hover:bg-(--color-neon-blue)/20 transition-all text-(--color-neon-blue)">
                    {renderLucideIcon(Icon.MapPin, "📍")}
                  </div>
                  <div>
                    <p className="text-sm uppercase font-bold" style={{ color: 'var(--text-muted)' }}>Location</p>
                    <p className="text-lg" style={{ color: 'var(--text-main)' }}>Semarang, Jawa Tengah, Indonesia</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-10 border-t border-black/10 dark:border-white/5 text-center lg:text-left">
              <p className="text-xl font-bold mb-10 uppercase tracking-[0.25em] lg:pl-45 block w-full" style={{ color: 'var(--text-muted)' }}>
                Connect With Me
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center lg:pl-10">
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/annisayusri-nurrochmah" target="_blank" rel="noreferrer" 
                  className="w-16 h-16 p-4.5 bg-slate-100 dark:bg-white/3 border border-black/5 dark:border-white/5 rounded-2xl flex items-center justify-center group hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="inline-flex items-center justify-center w-7 h-7 text-slate-700 dark:text-white group-hover:text-sky-500 transition-colors" style={{ color: 'var(--text-main)' }}>
                    {renderBrandIcon('linkedin', 'currentColor')}
                  </span>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/ysr.rchmh" target="_blank" rel="noreferrer" 
                  className="w-16 h-16 p-4.5 bg-slate-100 dark:bg-white/3 border border-black/5 dark:border-white/5 rounded-2xl flex items-center justify-center group hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="text-slate-700 dark:text-white group-hover:text-sky-500 transition-colors">
                    {renderBrandIcon('instagram', 'currentColor')}
                  </span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/yuzhuruuu" target="_blank" rel="noreferrer" 
                  className="w-16 h-16 p-4.5 bg-slate-100 dark:bg-white/3 border border-black/5 dark:border-white/5 rounded-2xl flex items-center justify-center group hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="text-slate-700 dark:text-white group-hover:text-sky-500 transition-colors">
                    {renderBrandIcon('github', 'currentColor')}
                  </span>
                </a>

                {/* TikTok */}
                <a href="https://tiktok.com/@https.bewhysr" target="_blank" rel="noreferrer" 
                  className="w-16 h-16 p-4.5 bg-slate-100 dark:bg-white/3 border border-black/5 dark:border-white/5 rounded-2xl flex items-center justify-center group hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="text-slate-700 dark:text-white group-hover:text-sky-500 transition-colors">
                    {renderBrandIcon('tiktok', 'currentColor')}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Sisi Kanan */}
          <div className="bg-[#f8fafc] dark:bg-white/[0.03] backdrop-blur-xl p-10 rounded-[40px] border border-slate-200 dark:border-white/5 shadow-2xl" data-aos="fade-left" data-aos-duration="600">
            <h4 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--text-main)' }}>Send a Message</h4>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input
                type="text"
                name="from_name"
                placeholder="What's your name?"
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-(--color-neon-purple) dark:border-white/10 dark:bg-[#111827] dark:text-slate-100 dark:placeholder:text-slate-400"
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Write your E-mail here..."
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-(--color-neon-blue) dark:border-white/10 dark:bg-[#111827] dark:text-slate-100 dark:placeholder:text-slate-400"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your idea!"
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-slate-900 outline-none transition-all resize-none placeholder:text-slate-400 focus:border-(--color-neon-purple) dark:border-white/10 dark:bg-[#111827] dark:text-slate-100 dark:placeholder:text-slate-400"
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-5 bg-gradient-to-r from-(--color-neon-purple) to-(--color-neon-blue) text-white font-black text-lg rounded-2xl hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center justify-center gap-2"
              >
                {status === 'Sending...' ? 'Processing...' : 'Send Message'} {Icon.Send && <Icon.Send className="w-5 h-5" />}
              </button>
              {status && (
                <p className={`text-center mt-4 font-bold ${status.includes('Success') ? 'text-green-500' : 'text-red-500'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}