import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

interface PerspectiveSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const PerspectiveSection: React.FC<PerspectiveSectionProps> = ({ children, className, id }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Deeper 3D Tilt and Perspective
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [15, 0, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [8, 0, 0, 8]);
  const filter = useMotionTemplate`blur(${blur}px)`;
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{
        rotateX,
        scale,
        opacity,
        filter,
        translateY,
        perspective: 2000,
        transformStyle: 'preserve-3d'
      }}
      className={`relative py-20 ${className}`}
    >
      {/* 3D Depth Layer */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.05), transparent 70%)',
          transform: 'translateZ(-50px)',
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2])
        }}
      />
      
      <div style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </motion.section>
  );
};

export default PerspectiveSection;
