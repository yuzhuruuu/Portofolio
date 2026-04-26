import React, { useRef, useState } from 'react';
import * as Icon from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const renderBrandIcon = (brandName, color = "currentColor") => {
    const cdnUrl = `https://cdn.simpleicons.org/${brandName}/${color.replace('#', '')}`;
    return (
      <img 
        src={cdnUrl} 
        alt={`${brandName} icon`} 
        className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity" 
        style={{ filter: color === "currentColor" ? 'brightness(0) invert(1)' : 'none' }}
      />
    );
  }; // Fixed: Tag penutup fungsi ini sebelumnya salah

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
          <h3 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Let's <span className="text-(--color-neon-purple)">Talk</span>
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
              <h4 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Contact Information</h4>
              <div className="space-y-8">
                
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-3.5 group-hover:bg-(--color-neon-blue)/20 transition-all text-(--color-neon-blue)">
                    {renderLucideIcon(Icon.Mail, "📧")}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Email</p>
                    <p className="text-lg text-slate-700 dark:text-gray-200">annisayusri59@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-3.5 group-hover:bg-(--color-neon-blue)/20 transition-all text-(--color-neon-blue)">
                    {renderLucideIcon(Icon.Phone, "📞")}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Phone</p>
                    <p className="text-lg text-slate-700 dark:text-gray-200">+62 896 3587 6114</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-3.5 group-hover:bg-(--color-neon-blue)/20 transition-all text-(--color-neon-blue)">
                    {renderLucideIcon(Icon.MapPin, "📍")}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold">Location</p>
                    <p className="text-lg text-slate-700 dark:text-gray-200">Semarang, Jawa Tengah, Indonesia</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="pt-10 border-t border-black/10 dark:border-white/5 text-center lg:text-left">
              <p className="text-xl font-bold mb-10 text-slate-600 dark:text-gray-400 uppercase tracking-[0.25em] lg:pl-50 block w-full">
                Connect With Me
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center lg:pl-10">
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/annisayusri-nurrochmah" target="_blank" rel="noreferrer" 
                  className="w-16 h-16 bg-slate-100 dark:bg-white/3 border border-black/5 dark:border-white/5 rounded-2xl flex items-center justify-center group hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-slate-700 dark:fill-white group-hover:fill-sky-500 transition-colors" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.778-.773 1.778-1.729V1.729C24 .774 23.205 0 22.225 0z"/>
                  </svg>
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
          <div className="bg-white/5 dark:bg-white/[0.03] backdrop-blur-xl p-10 rounded-[40px] border border-black/5 dark:border-white/5 shadow-2xl" data-aos="fade-left" data-aos-duration="600">
            <h4 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">Send a Message</h4>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <input type="text" name="from_name" placeholder="What's your name?" required className="w-full bg-slate-100 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-(--color-neon-purple) transition-all placeholder:text-slate-400" />
              <input type="email" name="reply_to" placeholder="Write your E-mail here..." required className="w-full bg-slate-100 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-(--color-neon-blue) transition-all placeholder:text-slate-400" />
              <textarea name="message" rows="4" placeholder="Tell me about your idea!" required className="w-full bg-slate-100 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-(--color-neon-purple) transition-all resize-none placeholder:text-slate-400"></textarea>
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

        </div> {/* Tutup Grid */}
      </div> {/* Tutup Max-w-7xl */}
    </section>
  );
}