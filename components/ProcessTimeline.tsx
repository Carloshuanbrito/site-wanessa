import React from 'react';
import { motion } from 'framer-motion';
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

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <div className="float-soft absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <div className="pulse-glow mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brand-400" />
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-slate-200">{t('process.badge')}</span>
          </div>
          <h2 className="text-5xl font-black tracking-[-0.04em] text-white md:text-7xl">
            {t('process.title')} <br />
            <span className="bg-gradient-to-r from-brand-300 via-cyan-200 to-white bg-clip-text text-transparent">{t('process.title_highlight')}</span>
          </h2>
        </div>

        <div className="relative mb-24">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stepsData.map((step, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-[1.9rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_24px_60px_rgba(2,6,23,0.3)] backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent opacity-80" />
                <div className="mb-10 flex items-center justify-between">
                  <div
                    title={step.tooltip}
                    className="icon-shell pulse-glow flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-300/25 bg-gradient-to-br from-brand-600 to-cyan-400 text-white shadow-[0_18px_36px_rgba(14,165,233,0.28)]"
                  >
                    <step.icon size={24} strokeWidth={2.4} />
                  </div>
                  <span className="text-5xl font-black tracking-[-0.08em] text-white/12">0{step.id}</span>
                </div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-200">Passo 0{step.id}</p>
                <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-sm leading-7 text-slate-200">{step.desc}</p>

                {idx !== stepsData.length - 1 && (
                  <div className="mt-6 flex text-brand-200 lg:absolute lg:-right-4 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2">
                    <ArrowRight size={22} className="drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
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
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-900/18 via-slate-900 to-slate-950 p-8 shadow-[0_30px_80px_rgba(2,6,23,0.32)]"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-300/35 bg-brand-500/14 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-100">
                <CheckCircle size={14} /> {t('process.case.badge')}
              </div>
              <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t('process.case.title')}</h3>
              <p className="mb-6 max-w-2xl leading-8 text-slate-200">{t('process.case.desc')}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-300">{t('process.case.prob_label')}</p>
                  <p className="font-medium text-white">{t('process.case.prob_val')}</p>
                </div>
                <div className="rounded-[1.6rem] border border-emerald-400/20 bg-emerald-500/10 p-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">{t('process.case.res_label')}</p>
                  <p className="flex items-center gap-2 font-medium text-white">
                    <Clock size={16} className="text-emerald-200" />
                    {t('process.case.res_val')}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900">
              <img src={chemicalValveCase} alt="Válvula Especial Impressa 3D" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-[1.3rem] border border-white/10 bg-black/55 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-200">{t('process.case.time_label')}</span>
                    <span className="text-xl font-bold text-white">{t('process.case.time_val')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
