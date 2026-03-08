import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { Background } from './components/background';
import { CustomCursor } from './components/custom-cursor';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Experience } from './components/experience';
import { Contact } from './components/contact';
import { IntroAnimation } from './components/intro-animation';
import { PolicyModal } from './components/policy-modal';

type PolicyType = 'privacy' | 'terms' | 'disclaimer' | 'sitemap' | null;

const Footer = ({ onOpenPolicy }: { onOpenPolicy: (type: PolicyType) => void }) => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0A051A]/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xl font-black tracking-tighter flex gap-2">
            <span className="text-white">BAGAS</span>
            <span className="text-[#7C4DFF]">PORTOFOLIO</span>
          </div>
          
          <div className="text-white/40 text-sm font-medium">
            © 2026 Bagas Portfolio. Designed with passion by Creative Minds.
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <button onClick={() => onOpenPolicy('privacy')} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#7C4DFF] transition-colors">Privacy Policy</button>
            <button onClick={() => onOpenPolicy('terms')} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#7C4DFF] transition-colors">Terms of Service</button>
            <button onClick={() => onOpenPolicy('disclaimer')} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#7C4DFF] transition-colors">Disclaimer</button>
            <button onClick={() => onOpenPolicy('sitemap')} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-[#7C4DFF] transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [policyType, setPolicyType] = useState<PolicyType>(null);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const openPolicy = (type: PolicyType) => {
    setPolicyType(type);
    setIsPolicyOpen(true);
  };

  return (
    <div className="relative min-h-screen text-white bg-[#0A051A] selection:bg-[#7C4DFF]/30 selection:text-white">
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroAnimation 
            key="intro" 
            onComplete={() => setShowIntro(false)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showIntro && (
          <Motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Background />
            <CustomCursor />
            <Navbar />

            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>

            <Footer onOpenPolicy={openPolicy} />

            <PolicyModal 
              isOpen={isPolicyOpen} 
              onClose={() => setIsPolicyOpen(false)} 
              type={policyType} 
            />
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
