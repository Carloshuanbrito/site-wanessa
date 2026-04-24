import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const PlexusBackground: React.FC<{ opacity?: number }> = ({ opacity = 0.4 }) => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax shifts based on mouse
  const translateX = useTransform(springX, [-500, 500], [-30, 30]);
  const translateY = useTransform(springY, [-500, 500], [-30, 30]);

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Enhanced points with depth (Z-index simulation)
  const points = React.useMemo(() => [...Array(15)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 2, // 0 to 2 for depth
    size: Math.random() * 2 + 1,
    duration: 20 + Math.random() * 30,
    delay: Math.random() * -20,
  })), []);

  return (
    <motion.div 
      className="pointer-events-none absolute inset-0 overflow-hidden" 
      style={{ opacity, x: translateX, y: translateY, perspective: 1000 }}
    >
      <svg className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="line-3d" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Connection Lines with 3D feel */}
        {points.map((p, i) => {
          const nextP = points[(i + 1) % points.length];
          const depthScale = (p.z + nextP.z) / 2;
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${p.x}%`}
              y1={`${p.y}%`}
              x2={`${nextP.x}%`}
              y2={`${nextP.y}%`}
              stroke="url(#line-3d)"
              strokeWidth={0.5 * (1 + depthScale)}
              animate={{
                x1: [`${p.x}%`, `${p.x + (Math.random() - 0.5) * 8}%`, `${p.x}%`],
                y1: [`${p.y}%`, `${p.y + (Math.random() - 0.5) * 8}%`, `${p.y}%`],
                x2: [`${nextP.x}%`, `${nextP.x + (Math.random() - 0.5) * 8}%`, `${nextP.x}%`],
                y2: [`${nextP.y}%`, `${nextP.y + (Math.random() - 0.5) * 8}%`, `${nextP.y}%`],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Floating Nodes with Glow and Depth */}
        {points.map((p) => (
          <motion.g key={`node-group-${p.id}`}>
            <motion.circle
              cx={`${p.x}%`}
              cy={`${p.y}%`}
              r={p.size * 4 * (1 + p.z)}
              fill="url(#node-glow)"
              animate={{
                cx: [`${p.x}%`, `${p.x + (Math.random() - 0.5) * 12}%`, `${p.x}%`],
                cy: [`${p.y}%`, `${p.y + (Math.random() - 0.5) * 12}%`, `${p.y}%`],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx={`${p.x}%`}
              cy={`${p.y}%`}
              r={p.size * (1 + p.z)}
              fill="#00F0FF"
              animate={{
                cx: [`${p.x}%`, `${p.x + (Math.random() - 0.5) * 12}%`, `${p.x}%`],
                cy: [`${p.y}%`, `${p.y + (Math.random() - 0.5) * 12}%`, `${p.y}%`],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
};

export default PlexusBackground;
