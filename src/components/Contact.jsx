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
            viewBox="0 0 16 16"
            className="block w-7 h-7"
            aria-label="LinkedIn icon"
            role="img"
            fill={color}
            style={{ display: 'block' }}
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
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
                  <span className="inline-flex items-center justify-center w-7 h-7 text-slate-700 dark:text-white group-hover:text-sky-500 transition-colors duration-300">
                    {renderBrandIcon('linkedin', 'currentColor')}
                  </span>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com/ysr.rchmh" target="_blank" rel="noreferrer" 
                  className="w-16 h-16 p-4.5 bg-slate-100 dark:bg-white/3 border border-black/5 dark:border-white/5 rounded-2xl flex items-center justify-center group hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="inline-flex items-center justify-center w-7 h-7 text-slate-700 dark:text-white group-hover:text-sky-500 transition-colors duration-300">
                    {renderBrandIcon('instagram', 'currentColor')}
                  </span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/yuzhuruuu" target="_blank" rel="noreferrer" 
                  className="w-16 h-16 p-4.5 bg-slate-100 dark:bg-white/3 border border-black/5 dark:border-white/5 rounded-2xl flex items-center justify-center group hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="inline-flex items-center justify-center w-7 h-7 text-slate-700 dark:text-white group-hover:text-sky-500 transition-colors duration-300">
                    {renderBrandIcon('github', 'currentColor')}
                  </span>
                </a>

                {/* TikTok */}
                <a href="https://tiktok.com/@https.bewhysr" target="_blank" rel="noreferrer" 
                  className="w-16 h-16 p-4.5 bg-slate-100 dark:bg-white/3 border border-black/5 dark:border-white/5 rounded-2xl flex items-center justify-center group hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="inline-flex items-center justify-center w-7 h-7 text-slate-700 dark:text-white group-hover:text-sky-500 transition-colors duration-300">
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
                className="contact-form-field w-full rounded-2xl px-6 py-4 outline-none transition-all focus:border-(--color-neon-purple)"
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Write your E-mail here..."
                required
                className="contact-form-field w-full rounded-2xl px-6 py-4 outline-none transition-all focus:border-(--color-neon-blue)"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your idea!"
                required
                className="contact-form-field w-full rounded-2xl px-6 py-4 outline-none transition-all resize-none focus:border-(--color-neon-purple)"
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