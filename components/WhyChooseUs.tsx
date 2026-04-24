import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Anchor, ArrowRight, ShieldCheck, Zap, Boxes, Clock, UserCheck, Activity, FileCheck, Microscope, Truck, TrendingDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import engineeringDeskImg from './fotos/engineering_desk.png';
import industrialConceptImg from './fotos/industrial_concept.jpg';
import PlexusBackground from './PlexusBackground';
import SpotlightCard from './SpotlightCard';

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const advantages = [
    { title: t('why.advantages.0.title'), desc: t('why.advantages.0.desc'), icon: Clock },
    { title: t('why.advantages.1.title'), desc: t('why.advantages.1.desc'), icon: TrendingDown },
    { title: t('why.advantages.2.title'), desc: t('why.advantages.2.desc'), icon: FileCheck },
    { title: t('why.advantages.3.title'), desc: t('why.advantages.3.desc'), icon: ShieldCheck },
  ];

  const services = [
    { title: t('why.services.0.title'), desc: t('why.services.0.desc'), icon: Activity },
    { title: t('why.services.1.title'), desc: t('why.services.1.desc'), icon: UserCheck },
    { title: t('why.services.2.title'), desc: t('why.services.2.desc'), icon: TrendingDown },
    { title: t('why.services.3.title'), desc: t('why.services.3.desc'), icon: Microscope },
  ];

  return (
    <section id="servicos" className="section-tint-services relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
      {/* Parallax Background Text */}
      <motion.div 
        style={{ y: y1 }}
        className="pointer-events-none absolute -right-20 top-20 select-none text-[20rem] font-black leading-none text-white/[0.02]"
      >
        WHY
      </motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="pointer-events-none absolute -left-20 bottom-40 select-none text-[15rem] font-black leading-none text-[#00F0FF]/[0.01]"
      >
        PRO
      </motion.div>

      {/* Live Plexus Background */}
      <PlexusBackground opacity={0.25} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#00F0FF]">{t('why.header_badge')}</p>
          <h2 className="text-4xl font-black tracking-[-0.03em] text-white md:text-6xl">
            {t('why.header_title')} <span className="text-[#00F0FF]">{t('why.header_highlight')}</span>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {t('why.header_desc')}
          </p>
        </motion.div>

        <div className="mb-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="dark-panel group relative overflow-hidden rounded-[2.5rem] border border-[#00F0FF]/20 shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
          >
            <div className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent" />
            <div 
              className="relative h-[420px] w-full overflow-hidden"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <motion.img 
                src={industrialConceptImg} 
                alt="Industrial Ecosystem" 
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                style={{ transform: 'translateZ(0px)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
              
              {/* Overlay Badge with Z-depth */}
              <div className="absolute left-8 top-8 z-30" style={{ transform: 'translateZ(60px)' }}>
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-md">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Digital Factory 4.0</span>
                </div>
              </div>
            </div>
            <div className="relative z-30 -mt-20 p-10 pt-0">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00F0FF]">
                  {t('why.adv_title')}
                </p>
                <h3 className="mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
                  {t('why.adv_subtitle')}
                </h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  {t('why.commercial_arg')}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {advantages.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                className="group relative"
              >
                <SpotlightCard className="glass-panel h-full rounded-[1.8rem] p-6 transition-all hover:border-[#00F0FF]/30">
                  <div className="border-glow-trace" />
                  <div className="icon-shell animate-float-soft mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <item.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-sm leading-7 text-slate-300">{item.desc}</p>
                </SpotlightCard>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#00F0FF]">{t('why.serv_title')}</p>
            <h3 className="text-3xl font-bold tracking-[-0.02em] text-white">
              {t('why.services_title')}
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02, boxShadow: '0 0 30px rgba(0,240,255,0.25)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
                className="rounded-[1.9rem] border border-[#00F0FF]/12 bg-[#0A0A0A] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.2)] group hover:border-[#00F0FF]/30 transition-colors"
              >
                <div className="icon-shell mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#00F0FF] transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:bg-[#00F0FF] group-hover:text-black">
                  <item.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h4 className="mb-3 text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm leading-7 text-slate-300">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel rounded-[2rem] p-8 md:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#00F0FF]">
                {t('why.logistics_badge')}
              </p>
              <h3 className="mb-3 text-3xl font-bold tracking-[-0.02em] text-white">{t('why.logistics.title')}</h3>
              <p className="max-w-2xl text-lg leading-8 text-slate-300" dangerouslySetInnerHTML={{ __html: t('why.logistics.desc') }} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.7rem] border border-[#00F0FF]/20 bg-[#0A0A0A] p-6">
                <div className="icon-shell mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#00F0FF]">
                  <Truck className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <p className="text-sm font-semibold text-white">Entrega nacional com foco em agilidade e previsibilidade.</p>
              </div>
              <div className="rounded-[1.7rem] border border-[#00F0FF]/20 bg-[#0A0A0A] p-6">
                <div className="icon-shell mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#00F0FF]">
                  <Anchor className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <p className="text-sm font-semibold text-white">
                  {t('why.logistics_detail')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
