import React, { useEffect, useRef } from 'react';
import { motion as Motion } from 'motion/react';

export const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      size: number;
      life: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.color = color;
        this.size = Math.random() * 2 + 1;
        this.life = Math.random() * 0.01 + 0.005;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.life;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const colors = ['#7C4DFF', '#A288FF', '#FFFFFF', '#4D2BBE'];
    
    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 40; i++) {
        particles.push(new Particle(x, y, color));
      }
    };

    let lastFirework = 0;
    const animate = (time: number) => {
      ctx.fillStyle = 'rgba(10, 5, 26, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (time - lastFirework > 1200) {
        createFirework();
        lastFirework = time;
      }

      particles = particles.filter(p => p.alpha > 0);
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animationFrameId = requestAnimationFrame(animate);

    const timer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[10000] bg-[#0A051A] flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden mb-4">
          <Motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.5 }}
            className="text-4xl md:text-6xl font-black tracking-[0.2em] text-white flex gap-2"
          >
            <span>BAGAS</span>
            <span className="text-[#7C4DFF]">PORTOFOLIO</span>
          </Motion.div>
        </div>
        
        <Motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#7C4DFF] to-transparent mb-6"
        />

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-white/30 text-xs font-bold uppercase tracking-[0.5em]"
        >
          Presenting Digital Excellence
        </Motion.div>
      </div>

      {/* Decorative Light Rays */}
      <Motion.div 
        animate={{ 
          opacity: [0, 0.5, 0],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 90]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#7C4DFF22_0%,_transparent_70%)] pointer-events-none"
      />
    </Motion.div>
  );
};
