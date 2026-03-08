import React from 'react';
import { motion as Motion } from 'motion/react';
import { User, Code, Palette, Zap, LucideIcon, Film } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: <User size={24} />, label: 'Active Clients', val: '1', color: 'text-[#7C4DFF]' },
    { icon: <Code size={24} />, label: 'Projects Built', val: '4', color: 'text-blue-400' },
    { icon: <Palette size={24} />, label: 'Design Awards', val: '2', color: 'text-pink-400' },
    { icon: <Zap size={24} />, label: 'Fast Delivery', val: '100%', color: 'text-yellow-400' },
  ];

  type Skill = {
    title: string;
    progress: number;
    icon: LucideIcon;
    color: string;
    gradient: string;
  };

  const skills: Skill[] = [
    { title: "User Interface Design", progress: 95, icon: Palette, color: "text-pink-400", gradient: "from-pink-500 to-rose-400" },
    { title: "React & Frontend", progress: 92, icon: Code, color: "text-blue-400", gradient: "from-blue-500 to-cyan-400" },
    { title: "Backend & Node.js", progress: 85, icon: Zap, color: "text-yellow-400", gradient: "from-yellow-500 to-orange-400" },
    { title: "Motion Graphics", progress: 88, icon: Film, color: "text-purple-400", gradient: "from-purple-500 to-indigo-400" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#7C4DFF] font-bold text-sm tracking-widest uppercase mb-4 inline-block">
            Who I Am
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Designing the Future <br />
            <span className="text-white/40">One Pixel at a Time</span>
          </h2>

          <div className="w-20 h-1.5 bg-[#7C4DFF] mx-auto rounded-full" />
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C4DFF]/10 blur-3xl -z-10 transition-all group-hover:bg-[#7C4DFF]/20" />
              <h3 className="text-2xl font-bold text-white mb-4">Designing the Future</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                I'm a passionate Full-Stack Developer and UI/UX Designer based in Malang.
                Starting my journey in 2024, I focus on creating high-performance,
                interactive web applications that blend aesthetic beauty with functional excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col items-center text-center hover:border-[#7C4DFF]/50 transition-colors cursor-default"
                >
                  <div className={`${stat.color} mb-3 opacity-80 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black text-white mb-1">{stat.val}</div>
                  <div className="text-xs text-white/40 font-bold uppercase tracking-wider">{stat.label}</div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid gap-6">
              {skills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <div key={skill.title} className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl group hover:border-white/20 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <span className="flex items-center gap-3 font-bold text-white">
                        <span className={`${skill.color} group-hover:scale-110 transition-transform`}>
                          <Icon size={22} />
                        </span>
                        {skill.title}
                      </span>

                      <span className={`${skill.color} font-black`}>
                        {skill.progress}%
                      </span>
                    </div>

                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <Motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${skill.gradient}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};
