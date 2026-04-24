import React from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, Gauge, Layers, ShieldCheck, Thermometer } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import realMaintenanceImg from './fotos/real_maintenance.png';
import PlexusBackground from './PlexusBackground';

const TechSpecs: React.FC = () => {
  const { t } = useTranslation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const items = t('tech.items', { returnObjects: true }) as Array<{ title: string; desc: string }>;

  return (
    <section id="aplicacoes" className="section-tint-apps relative overflow-hidden py-32 text-white">
      {/* Live Plexus Background */}
      <PlexusBackground opacity={0.3} />

      {/* Background Decor */}
      <motion.div 
        style={{ y: yBg }}
        className="pointer-events-none absolute -left-20 top-40 select-none text-[15rem] font-black leading-none text-white/[0.015]"
      >
        APPS
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="float-particle absolute h-1 w-1 rounded-full bg-[#00F0FF]/30"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6 flex items-center gap-2">
              <div className="h-px w-12 bg-[#00F0FF]/50" />
              <span className="text-sm font-bold uppercase tracking-[0.24em] text-[#00F0FF]">{t('tech.badge')}</span>
            </div>

            <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-7xl">
              <span className="text-white">{t('tech.title')}</span>
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-300">
              {t('tech.desc')}
            </p>

            <div className="grid gap-4">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-[#00F0FF]/15 bg-[#111] p-5 backdrop-blur-sm transition-colors hover:border-[#00F0FF]/30"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="icon-shell mt-0.5 rounded-2xl bg-[#1A1A1A] p-2.5 text-[#00F0FF] transition-all duration-300 hover:bg-[#00F0FF] hover:text-black"
                    >
                      <CheckCircle2 size={20} strokeWidth={2.4} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="group mt-8 flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#00F0FF]"
            >
              {t('tech.cta_eval')} <ArrowRight size={16} className="text-[#00F0FF]" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group order-1 lg:order-2"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              className="relative h-[520px] overflow-hidden rounded-[2rem] border border-[#00F0FF]/15 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              <img
                src={realMaintenanceImg}
                alt={t('tech.real_apps')}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/25 to-transparent" />
              <div className="absolute left-6 right-6 top-6">
                <div className="rounded-full border border-[#00F0FF]/25 bg-[#0A0A0A]/60 px-4 py-2 backdrop-blur-md">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#00F0FF]">
                    <span className="h-2 w-2 rounded-full bg-[#00F0FF]" />
                    {t('tech.real_apps')}
                  </span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8" style={{ transform: "translateZ(20px)" }}>
                <div className="rounded-3xl border border-[#00F0FF]/15 bg-[#0A0A0A]/80 p-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.1)]">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#00F0FF]">{t('tech.industrial_3d')}</p>
                  <p className="mt-3 text-2xl font-bold text-white">
                    {t('tech.industrial_3d_desc')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
