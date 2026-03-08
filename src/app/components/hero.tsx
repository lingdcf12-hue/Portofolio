import React, { useState, useEffect } from "react";
import { motion as Motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./ui/image-with-fallback";

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      const timer = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timer);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 75 : 150,
    );

    return () => clearTimeout(timer);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {texts[index].substring(0, subIndex)}
      <Motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[0.8em] bg-[#7C4DFF] ml-1 align-middle"
      />
    </span>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#7C4DFF]/10 text-[#7C4DFF] text-xs font-bold tracking-widest uppercase mb-6 border border-[#7C4DFF]/30">
                Bagas Portfolio
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Crafting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C4DFF] to-[#A288FF]">
                  <Typewriter texts={["Digital", "Creative", "Future"]} />
                </span>{" "}
                <br />
                Masterpieces
              </h1>

              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Specializing in high-end web development and futuristic UI
                design. I turn complex ideas into elegant, interactive digital
                experiences that captivate users.
              </Motion.div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-[#7C4DFF] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_20px_40px_-15px_rgba(124,77,255,0.4)]"
                >
                  Explore Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Motion.button>
                <Motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-white/10 text-white rounded-xl font-bold backdrop-blur-sm"
                >
                  Contact Me
                </Motion.button>
              </div>
            </Motion.div>

            {/* Stats Reveal */}
            <div className="flex gap-10 mt-16 justify-center lg:justify-start">
              {[
                { label: "Experience", val: "4+" },
                { label: "Projects", val: "4+" },
                { label: "Clients", val: "1" },
              ].map((stat, i) => (
                <Motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <div className="text-3xl font-black text-white">
                    {stat.val}
                  </div>
                  <div className="text-xs text-white/40 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="flex-1 relative">
            <Motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
            >
              {/* Profile Image Container */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-[#7C4DFF]/30 shadow-2xl">
                {/* 
                  CATATAN: Pastikan file gambar ada di folder public/images/
                  Cara tambah: Simpan file .jpg di public/images/ dan panggil path-nya di sini (/images/namafile.jpg)
                */}
                <ImageWithFallback
                  src="/images/Hero.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Glowing Backgrounds */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#7C4DFF]/20 rounded-full blur-[100px] -z-10" />
              <Motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border-2 border-dashed border-[#7C4DFF]/20 rounded-full -z-10"
              />

              {/* Floating Cards */}
              <Motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-10 z-20 bg-[#0A051A]/80 backdrop-blur-xl border border-[#7C4DFF]/30 p-4 rounded-2xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7C4DFF]/20 rounded-full flex items-center justify-center text-[#7C4DFF]">
                    ★
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Top Rated
                    </div>
                    <div className="text-[10px] text-white/50">
                      UI/UX Specialist
                    </div>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </div>

      <Motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown size={32} />
      </Motion.div>
    </section>
  );
};
