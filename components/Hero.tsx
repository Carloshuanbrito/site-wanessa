import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Layers, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import heroPartsImg from './fotos/hero_parts_bench.png';
import PlexusBackground from './PlexusBackground';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityPlexus = useTransform(scrollY, [0, 400], [0.4, 0]);

  // Parallax effects
  const blob1Y = useTransform(scrollY, [0, 800], [0, 200]);
  const blob2Y = useTransform(scrollY, [0, 800], [0, -150]);

  // 3D Hover effects for the image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

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

  return (
    <section className="section-tint-hero relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      {/* Live Plexus Background */}
      <PlexusBackground opacity={0.6} />

      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-grid-3d animate-grid-3d absolute inset-x-0 -top-24 h-[120%] origin-top perspective-1000" />
        <div className="scanline absolute top-0 z-20" />
        <motion.div style={{ y: blob1Y }} className="float-soft absolute left-[5%] top-[5%] h-96 w-96 rounded-full bg-[#00F0FF]/15 blur-[140px] pointer-events-none" />
        <motion.div style={{ y: blob2Y }} className="float-soft absolute right-[5%] top-[10%] h-80 w-80 rounded-full bg-[#FF5C00]/10 blur-[120px] pointer-events-none [animation-delay:1.5s]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="liquid-glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <Sparkles size={14} className="text-[#00F0FF]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#00F0FF]">{t('hero.badge')}</span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
            {t('hero.title_main')} <br />
            <span className="bg-gradient-to-r from-[#00F0FF] via-white to-[#00F0FF] bg-clip-text text-transparent">{t('hero.title_gradient')}</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            {t('hero.description')}
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <motion.div whileHover={{ y: -4 }} className="glass-panel border-[#00F0FF]/20 shadow-[0_0_20px_rgba(0,240,255,0.08)] rounded-[1.75rem] p-5">
              <div className="icon-shell mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#00F0FF]">
                <Layers size={20} strokeWidth={2.2} />
              </div>
              <p className="text-sm font-semibold leading-7 text-white">
                {t('hero.feature_1')}
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="glass-panel border-[#00F0FF]/20 shadow-[0_0_20px_rgba(0,240,255,0.08)] rounded-[1.75rem] p-5">
              <div className="icon-shell mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#00F0FF]">
                <ShieldCheck size={20} strokeWidth={2.2} />
              </div>
              <p className="text-sm font-semibold leading-7 text-white">
                {t('hero.feature_2')}
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              variant="primary"
              className="group min-w-[220px]"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                {t('hero.cta_primary')}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Button>
            <Button
              variant="outline"
              className="min-w-[220px]"
              onClick={() => document.getElementById('materiais')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta_secondary')}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
            className="liquid-glass absolute -left-5 top-8 z-20 rounded-[1.6rem] p-4 sm:-left-8"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="icon-shell flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#00F0FF]">
                <Layers size={18} strokeWidth={2.3} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00F0FF]">{t('hero.float_card_label')}</p>
                <p className="text-sm font-bold text-white">{t('hero.float_card_value')}</p>
              </div>
            </div>
            <div className="h-2 w-full rounded-full bg-[#1A1A1A]">
              <div className="h-2 w-[86%] rounded-full bg-[#00F0FF]" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -right-2 z-20 rounded-[1.6rem] p-4 sm:-right-6 bg-[#0A0A0A]/90 border border-[#00F0FF]/20 backdrop-blur"
          >
            <div className="mb-2 flex items-center gap-2">
              <Zap size={14} className="text-[#00F0FF]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00F0FF]">{t('hero.img_label')}</p>
            </div>
            <p className="max-w-[220px] text-sm leading-6 text-white">{t('hero.img_desc')}</p>
          </motion.div>

          <motion.div
            className="group surface-strong relative overflow-hidden rounded-[2.25rem] p-3"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="relative overflow-hidden rounded-[1.8rem]"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#0A0A0A]/70 via-transparent to-[#00F0FF]/5 pointer-events-none" />
              <div className="nozzle-glow top-0 left-0" />
              <img
                src={heroPartsImg}
                alt={t('hero.brand')}
                className="h-[540px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 animate-build-3d"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8" style={{ transform: "translateZ(30px)" }}>
                <div className="rounded-[1.6rem] border border-[#00F0FF]/20 bg-[#0A0A0A]/72 p-5 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.15)]">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#00F0FF]">Advanced polymer workflow</p>
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    {t('hero.img_footer_desc')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
