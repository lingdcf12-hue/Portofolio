import React from 'react';
import { motion as Motion } from 'motion/react';

const experiences = [
  {
    year: "2027 - Present",
    role: "Senior Fullstack Developer",
    company: "LuxeTech Solutions",
    desc: "Architecting robust end-to-end ecosystems, integrating high-concurrency backend services with fluid Next.js interfaces while maintaining cloud-scale infrastructure.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    year: "2026",
    role: "Senior Frontend Developer",
    company: "Nexus Labs",
    desc: "Orchestrating complex frontend architectures, focusing on state management efficiency, Framer Motion animations, and peak performance optimization.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"]
  },
  {
    year: "2025",
    role: "UI/UX Specialist",
    company: "Creative Flow Digital",
    desc: "Defining brand identities through pixel-perfect UI systems and user-centric research, ensuring a seamless harmony between visual storytelling and usability.",
    tags: ["Figma", "Design Systems", "UI Design", "User Research"]
  },
  {
    year: "2024",
    role: "Junior Web Developer",
    company: "InnoStart",
    desc: "Laying the groundwork of modern web standards, delivering responsive layouts and reusable components while mastering the nuances of the React ecosystem.",
    tags: ["HTML/CSS", "JavaScript", "React", "Git"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0A051A]/30">
      <div className="container mx-auto px-6 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#7C4DFF] font-bold text-sm tracking-widest uppercase mb-4 inline-block">
            Designing the Future
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            One Pixel <span className="text-white/40">at a Time</span>
          </h2>
        </Motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7C4DFF] via-[#2A0E61] to-transparent md:-translate-x-1/2 opacity-20" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8 md:gap-0`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-[#7C4DFF]/30 transition-all group">
                    <span className="text-[#7C4DFF] font-black text-sm mb-2 block">{exp.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#7C4DFF] transition-colors">{exp.role}</h3>
                    <div className="text-white/40 font-medium mb-4">{exp.company}</div>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {exp.desc}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/40 py-1 px-3 border border-white/10 rounded-full bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Node Point */}
                <div className="absolute left-[20px] md:left-1/2 w-10 h-10 bg-[#0A051A] border-4 border-[#7C4DFF] rounded-full -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(124,77,255,0.6)] z-20">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                </div>

                <div className="hidden md:block w-[10%]" />
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
