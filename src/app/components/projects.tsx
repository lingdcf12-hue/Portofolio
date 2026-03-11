import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ChevronRight, Eye } from "lucide-react";
import { ImageWithFallback } from "./ui/image-with-fallback";
import { Lightbox } from "./ui/lightbox";

// CATATAN: Pastikan file gambar ada di folder public/images/
// Cara tambah: Simpan file .jpg di public/images/ dan panggil path-nya di sini (/images/namafile.jpg)
const projects = [
  {
    id: 1,
    title: "Lucky And Power",
    category: "Web",
    image: "/images/1.png",
    tags: ["React", "Tailwind", "Mysql", "Laravel"],
    desc: "A high-performance financial analytics dashboard with real-time data streaming and futuristic visualizations.",
    liveUrl: "https://web-app-rouge-eta.vercel.app",
    githubUrl: "https://github.com/lingdcf12-hue/Web-App",
  },
  {
    id: 2,
    title: "Simple Discussion Forum App",
    category: "App",
    image: "/images/2.png",
    tags: ["React", "Firebase"],
    desc: "Cutting-edge NFT marketplace with smooth 3D interactions and seamless blockchain integration.",
    liveUrl: "https://simple-discussion-forum-app-6ys2-p18vq5a4s.vercel.app/",
    githubUrl: "https://github.com/lingdcf12-hue/Simple-Discussion-Forum-App.git",
  },
  {
    id: 3,
    title: "Karina",
    category: "Web",
    image: "/images/3.png",
    tags: ["React", "Vite", "Supabase", ],
    desc: "A comprehensive, accessible design system focused on dark mode and neon aesthetic for enterprise apps.",
    liveUrl: "https://karina-seven-xi.vercel.app/",
    githubUrl: "https://github.com/lingdcf12-hue/karina.git",
  },
  {
    id: 4,
    title: "Vortex Video Player",
    category: "Application",
    image: "/images/4.jpg",
    tags: ["Electron", "Node.js", "WebRTC"],
    desc: "Modern video playback solution with ultra-low latency streaming and gesture-based controls.",
    liveUrl: "#",
    githubUrl: "https://github.com/username/project-4",
  },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const filters = [
    "All",
    "Web App",
    "E-Commerce",
    "Design System",
    "Application",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <Lightbox 
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.src || ""}
        altText={selectedImage?.alt}
        onClose={() => setSelectedImage(null)}
      />

      <div className="container mx-auto px-6 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#7C4DFF] font-bold text-sm tracking-widest uppercase mb-4 inline-block">
            Showcase
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10">
            Selected <span className="text-white/40">Projects</span>
          </h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeFilter === filter
                    ? "bg-[#7C4DFF] text-white shadow-[0_0_20px_rgba(124,77,255,0.4)]"
                    : "bg-white/5 text-white/50 hover:bg-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Motion.div>

        <Motion.div layout className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <Motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-[#0A051A]/80 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#7C4DFF]/50 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A051A] via-transparent to-transparent opacity-60" />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/20">
                    <button 
                      onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
                      className="w-14 h-14 bg-white text-[#0A051A] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Eye size={24} />
                    </button>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-[#7C4DFF] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(124,77,255,0.4)]"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#7C4DFF] mb-2 inline-block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-black text-white">
                        {project.title}
                      </h3>
                    </div>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#7C4DFF]/10 transition-colors"
                    >
                      <ChevronRight className="text-white/40 group-hover:text-[#7C4DFF] transition-colors" />
                    </a>
                  </div>
                  <p className="text-white/50 mb-8 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-white/40 uppercase tracking-tighter group-hover:text-white/70 group-hover:border-white/20 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>

        <div className="mt-20 text-center">
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-transparent border-2 border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all"
          >
            View All Projects
          </Motion.button>
        </div>
      </div>
    </section>
  );
};
