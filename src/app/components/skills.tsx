import React from 'react';
import { motion as Motion } from 'motion/react';

const skillGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "Three.js"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Redis", "GraphQL"]
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Spline 3D", "After Effects", "Blender", "Canva"]
  },
  {
    category: "Others",
    items: ["Git", "Docker", "AWS", "Vercel", "Agile", "SEO"]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A051A]/50">
      <div className="container mx-auto px-6 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-[#7C4DFF] font-bold text-sm tracking-widest uppercase mb-4 inline-block">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Tech Stack & <span className="text-white/40">Tools</span>
            </h2>
          </div>
          <p className="max-w-md text-white/50 text-lg leading-relaxed">
            I use the latest technologies to build high-performance applications that are secure, scalable, and beautiful.
          </p>
        </Motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <Motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-[#7C4DFF]/30 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#7C4DFF] rounded-full" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <Motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(124, 77, 255, 0.2)', color: '#fff' }}
                    className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium text-white/60 border border-white/5 cursor-default transition-all"
                  >
                    {skill}
                  </Motion.span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
