import React, { useEffect, useState } from 'react';
import { motion as Motion, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    
    // Select all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .clickable');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mousePosition.x - 16, springConfig);
  const cursorY = useSpring(mousePosition.y - 16, springConfig);

  return (
    <>
      {/* Main Cursor Dot */}
      <Motion.div
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(124, 77, 255, 0.5)' : '#fff',
        }}
      />
      {/* Outer Glow Ring */}
      <Motion.div
        style={{ 
          x: mousePosition.x - 150, 
          y: mousePosition.y - 150 
        }}
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[9998] opacity-15 blur-[60px] bg-[#7C4DFF] hidden md:block"
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
      />
    </>
  );
};
