import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import heroImage from './fotos/hero_parts_bench.png';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section-tint-hero relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="float-soft absolute left-[10%] top-[10%] h-64 w-64 rounded-full bg-slate-200/45 blur-3xl" />
        <div className="float-soft absolute right-[10%] top-[16%] h-72 w-72 rounded-full bg-slate-300/30 blur-3xl [animation-delay:1.2s]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="liquid-glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <Sparkles size={14} className="text-brand-700" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-700">{t('hero.badge')}</span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 md:text-7xl">
            {t('hero.title_main')} <br />
            <span className="text-brand-700">{t('hero.title_gradient')}</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {t('hero.description')}
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <motion.div whileHover={{ y: -4 }} className="glass-panel rounded-[1.75rem] p-5">
              <div className="icon-shell mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <Layers size={20} strokeWidth={2.2} />
              </div>
              <p className="text-sm font-semibold leading-7 text-slate-900">
                Produzimos peças técnicas sob demanda a partir de modelo 3D, desenho ou peça física.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="glass-panel rounded-[1.75rem] p-5">
              <div className="icon-shell mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-white">
                <ShieldCheck size={20} strokeWidth={2.2} />
              </div>
              <p className="text-sm font-semibold leading-7 text-slate-900">
                Atendemos desde protótipos até reposição funcional para uso real e continuidade operacional.
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
              <div className="icon-shell flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <Layers size={18} strokeWidth={2.3} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600">{t('hero.float_card_label')}</p>
                <p className="text-sm font-bold text-slate-900">{t('hero.float_card_value')}</p>
              </div>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200">
              <div className="h-2 w-[86%] rounded-full bg-slate-800" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="dark-panel absolute -bottom-6 -right-2 z-20 rounded-[1.6rem] p-4 sm:-right-6"
          >
            <div className="mb-2 flex items-center gap-2">
              <Zap size={14} className="text-slate-200" />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-200">{t('hero.img_label')}</p>
            </div>
            <p className="max-w-[220px] text-sm leading-6 text-white">{t('hero.img_desc')}</p>
          </motion.div>

          <div className="surface-strong relative overflow-hidden rounded-[2.25rem] p-3">
            <div className="relative overflow-hidden rounded-[1.8rem]">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-slate-950/65 via-transparent to-slate-500/8" />
              <img
                src={heroImage}
                alt="Peça Manutenção Aditiva"
                className="h-[540px] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/72 p-5 backdrop-blur-md">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-200">Advanced polymer workflow</p>
                  <p className="text-lg font-semibold text-white sm:text-xl">
                    Soluções para manutenção, reposição e desenvolvimento com acabamento visual de alto padrão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
