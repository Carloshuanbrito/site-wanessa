import React from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, PackageCheck, Printer, ScanSearch, UploadCloud } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import chemicalValveCase from './fotos/chemical_valve_case.png';

const getSteps = (t: any) => [
  { id: 1, title: t('process.steps.0.title'), desc: t('process.steps.0.desc'), icon: UploadCloud, tooltip: t('process.steps.0.tooltip') },
  { id: 2, title: t('process.steps.1.title'), desc: t('process.steps.1.desc'), icon: ScanSearch, tooltip: t('process.steps.1.tooltip') },
  { id: 3, title: t('process.steps.2.title'), desc: t('process.steps.2.desc'), icon: Printer, tooltip: t('process.steps.2.tooltip') },
  { id: 4, title: t('process.steps.3.title'), desc: t('process.steps.3.desc'), icon: PackageCheck, tooltip: t('process.steps.3.tooltip') },
];

const ProcessTimeline: React.FC = () => {
  const { t } = useTranslation();
  const stepsData = getSteps(t);

  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  // 3D Hover effects for the case study image
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 25 });

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
    <section className="relative overflow-hidden bg-slate-950 px-4 py-32 sm:px-6 lg:px-8">
      {/* Background Parallax Text */}
      <motion.div 
        style={{ y: yBg }}
        className="pointer-events-none absolute -right-10 top-40 select-none text-[18rem] font-black leading-none text-white/[0.01]"
      >
        STEPS
      </motion.div>

      <div className="absolute inset-0 opacity-[0.06] overflow-hidden">
        <div className="animate-pan-grid h-full w-full bg-[linear-gradient(rgba(0,240,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="float-soft absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#00F0FF]/12 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <div className="pulse-glow mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#00F0FF]" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#00F0FF]">{t('process.badge')}</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black tracking-[-0.04em] text-white md:text-8xl"
          >
            {t('process.title')} <br />
            <span className="bg-gradient-to-r from-[#00F0FF] via-white to-white bg-clip-text text-transparent">{t('process.title_highlight')}</span>
          </motion.h2>
        </div>

        <div className="relative mb-24">
          <div className="draw-line absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent lg:block" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stepsData.map((step, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-[1.9rem] border border-[#00F0FF]/15 bg-[#0A0A0A]/60 p-6 shadow-[0_24px_60px_rgba(2,6,23,0.3)] backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent opacity-80" />
                <div className="mb-10 flex items-center justify-between">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    title={step.tooltip}
                    className="icon-shell pulse-glow animate-float-soft flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00F0FF]/20 bg-gradient-to-br from-[#00F0FF] to-[#0066ff] text-white shadow-[0_0_24px_rgba(0,240,255,0.3)]"
                  >
                    <step.icon size={24} strokeWidth={2.4} />
                  </motion.div>
                  <span className="text-5xl font-black tracking-[-0.08em] text-[#00F0FF]/15">0{step.id}</span>
                </div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#00F0FF]">Passo 0{step.id}</p>
                <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-slate-200">{step.desc}</p>

                {idx !== stepsData.length - 1 && (
                  <div className="mt-6 flex text-[#00F0FF] lg:absolute lg:-right-4 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
                    <ArrowRight size={22} className="drop-shadow-[0_0_8px_#00F0FF]" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-[#00F0FF]/15 bg-gradient-to-br from-[#0A0A0A] via-[#111] to-[#0A0A0A] p-8 shadow-[0_30px_80px_rgba(2,6,23,0.32)]"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00F0FF]/35 bg-[#00F0FF]/14 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#00F0FF]">
                <CheckCircle size={14} /> {t('process.case.badge')}
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('process.case.title')}</h3>
              <p className="mb-6 max-w-2xl leading-8 text-slate-200">{t('process.case.desc')}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-300">{t('process.case.prob_label')}</p>
                  <p className="font-medium text-white">{t('process.case.prob_val')}</p>
                </div>
                <div className="rounded-[1.6rem] border border-[#00F0FF]/20 bg-[#00F0FF]/8 p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#00F0FF]">{t('process.case.res_label')}</p>
                  <p className="flex items-center gap-2 font-medium text-white">
                    <Clock size={16} className="text-[#00F0FF]" />
                    {t('process.case.res_val')}
                  </p>
                </div>
              </div>
            </div>

            <motion.div 
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900"
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="h-full w-full"
              >
                <img src={chemicalValveCase} alt={t('process.case.title')} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 animate-build-3d" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ transform: "translateZ(30px)" }}>
                  <div className="rounded-[1.3rem] border border-white/10 bg-black/55 p-4 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-200">{t('process.case.time_label')}</span>
                      <span className="text-xl font-bold text-white">{t('process.case.time_val')}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
