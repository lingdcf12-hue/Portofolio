import React from 'react';
import { motion as Motion } from 'motion/react';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0A051A]">
      {/* Moving Gradients */}
      <Motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#7C4DFF]/15 blur-[80px]"
      />
      <Motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: "transform" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#2A0E61]/30 blur-[80px]"
      />
      <Motion.div
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: "transform" }}
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#7C4DFF]/10 blur-[70px]"
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#7C4DFF 1px, transparent 1px), linear-gradient(90deg, #7C4DFF 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
};
