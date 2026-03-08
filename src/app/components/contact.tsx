import React from 'react';
import { motion as Motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#7C4DFF] font-bold text-sm tracking-widest uppercase mb-4 inline-block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Let's Build <br /> 
              <span className="text-white/40">Something Epic</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to new opportunities and creative collaborations.
            </p>

            <div className="space-y-8 mb-16">
              {[
                { icon: <Mail />, title: 'Email Me', value: 'lingdcf12@gmail.com' },
                { icon: <Phone />, title: 'Call Me', value: '+62 877-3538-3031' },
                { icon: <MapPin />, title: 'Location', value: 'Malang, Indonesia' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#7C4DFF] group-hover:bg-[#7C4DFF]/20 group-hover:border-[#7C4DFF]/30 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{item.title}</div>
                    <div className="text-lg font-bold text-white group-hover:text-[#7C4DFF] transition-colors">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: <Github />, link: 'https://github.com/lingdcf12-hue' },
                { icon: <Linkedin />, link: 'https://linkedin.com/in/yourusername' },
                { icon: <Twitter />, link: 'https://twitter.com/yourusername' },
                { icon: <Instagram />, link: 'https://instagram.com/orions969' }
              ].map((item, i) => (
                <Motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/50 hover:text-white hover:border-[#7C4DFF] transition-all"
                >
                  {item.icon}
                </Motion.a>
              ))}
            </div>
          </Motion.div>

          {/* Form Side */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] relative"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C4DFF]/10 blur-[100px] -z-10" />
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Bagas Eka"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#7C4DFF] focus:bg-[#7C4DFF]/5 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Bagas@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#7C4DFF] focus:bg-[#7C4DFF]/5 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#7C4DFF] focus:bg-[#7C4DFF]/5 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 px-1">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#7C4DFF] focus:bg-[#7C4DFF]/5 transition-all resize-none"
                />
              </div>
              <Motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#7C4DFF] text-white rounded-2xl font-black flex items-center justify-center gap-3 shadow-[0_20px_40px_-15px_rgba(124,77,255,0.4)] group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Motion.button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};
