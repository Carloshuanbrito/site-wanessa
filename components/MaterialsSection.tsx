import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2, ExternalLink, XCircle, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import nozzleImg from './fotos/nozzle_precision.png';
import petgImg from './fotos/petg.png';
import nylonCfImg from './fotos/nylon_cf.png';
import peekImg from './fotos/peek.png';

const MaterialsSection: React.FC = () => {
  const { t } = useTranslation();
  const propertiesLink = '#contato';

  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityBg = useTransform(scrollYProgress, [0.3, 0.6], [0.02, 0.05]);
  const comparisonRows = [
    { label: t('materials.comparison.labels.0'), proto: t('materials.comparison.values.low'), eng: t('materials.comparison.values.high') },
    { label: t('materials.comparison.labels.1'), proto: t('materials.comparison.values.t_low'), eng: t('materials.comparison.values.t_high') },
    { label: t('materials.comparison.labels.2'), proto: t('materials.comparison.values.q_low'), eng: t('materials.comparison.values.q_high') },
    { label: t('materials.comparison.labels.3'), proto: false, eng: true },
    { label: t('materials.comparison.labels.4'), proto: false, eng: true },
  ];

  return (
    <section id="materiais" className="section-tint-materials relative overflow-hidden py-32">
      {/* Background Parallax */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="pointer-events-none absolute -left-10 top-20 select-none text-[12rem] font-black leading-none text-white"
      >
        SPEC
      </motion.div>
      <motion.div 
        style={{ y: yBg, opacity: 0.01 }}
        className="pointer-events-none absolute -right-10 bottom-20 select-none text-[10rem] font-black leading-none text-[#00F0FF]"
      >
        MATERIALS
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-7xl">
            {t('materials.header_title')} <span className="text-[#00F0FF]">{t('materials.header_highlight')}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            {t('materials.header_desc')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="overflow-hidden rounded-3xl border border-[#00F0FF]/15 bg-[#0A0A0A] shadow-[0_22px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-1/3 border-b border-[#00F0FF]/10 bg-[#111] p-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-[#00F0FF]">{t('materials.comparison.label_char')}</span>
                  </th>
                  <th className="relative w-1/3 border-b border-r border-[#00F0FF]/10 bg-[#111] p-6">
                    <div className="flex flex-col">
                      <span className="mb-1 text-2xl font-bold text-white">{t('materials.comparison.title_proto')}</span>
                      <span className="text-sm font-semibold text-[#00F0FF]">PETG</span>
                      <p className="mt-3 inline-block rounded-md bg-[#1A1A1A] px-3 py-1.5 text-xs font-bold text-slate-300">
                        {t('materials.general.desc')}
                      </p>
                    </div>
                  </th>
                  <th className="relative w-1/3 border-b border-[#00F0FF]/10 border-l-2 border-l-[#00F0FF] bg-[#111] p-6">
                    <div className="flex flex-col">
                      <span className="mb-1 text-2xl font-bold text-white">{t('materials.comparison.title_eng')}</span>
                      <span className="text-sm font-semibold text-[#00F0FF]">Nylon CF, PEEK, TPU</span>
                      <p className="mt-3 inline-block rounded-md bg-[#1A1A1A] px-3 py-1.5 text-xs font-bold text-slate-300">
                        {t('materials.engineering.desc')}
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#00F0FF]/10">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-[#111]">
                    <td className="p-6 font-semibold text-slate-200">{row.label}</td>
                    <td className="border-r border-[#00F0FF]/10 p-6">
                      {typeof row.proto === 'boolean' ? (
                        row.proto ? <CheckCircle2 className="text-[#00F0FF]" size={24} /> : <XCircle className="text-white/20" size={24} />
                      ) : (
                        <span className="font-semibold text-slate-300">{row.proto}</span>
                      )}
                    </td>
                    <td className="p-6 border-l-2 border-l-[#00F0FF]">
                      {typeof row.eng === 'boolean' ? (
                        row.eng ? <CheckCircle2 className="text-[#00F0FF]" size={24} /> : <XCircle className="text-white/20" size={24} />
                      ) : (
                        <span className="font-bold text-slate-200">{row.eng}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-[#00F0FF]/10 bg-[#0A0A0A] p-6 md:p-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <motion.article 
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-[#00F0FF]/10 bg-[#111] p-0 transition-all hover:border-[#00F0FF]/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={petgImg} alt="PETG Prototype" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{t('materials.items_desc.petg_title')}</h3>
                  <p className="text-sm leading-6 text-slate-300">
                    {t('materials.items_desc.petg_desc')}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#00F0FF] opacity-0 transition-opacity group-hover:opacity-100">
                    <Info size={14} /> {t('materials.items_desc.technical_details')}
                  </div>
                </div>
              </motion.article>

              <motion.article 
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-[#00F0FF]/10 bg-[#111] p-0 transition-all hover:border-[#00F0FF]/30"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={nylonCfImg} alt="Nylon CF Part" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{t('materials.items_desc.nylon_title')}</h3>
                  <p className="text-sm leading-6 text-slate-300">
                    {t('materials.items_desc.nylon_desc')}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#00F0FF] opacity-0 transition-opacity group-hover:opacity-100">
                    <Info size={14} /> {t('materials.items_desc.technical_details')}
                  </div>
                </div>
              </motion.article>

              <motion.article 
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-[#00F0FF]/10 bg-[#111] p-0 transition-all hover:border-[#00F0FF]/30 sm:col-span-2 lg:col-span-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={peekImg} alt="PEEK Aerospace Part" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{t('materials.items_desc.peek_title')}</h3>
                  <p className="text-sm leading-6 text-slate-300">
                    {t('materials.items_desc.peek_desc')}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#00F0FF] opacity-0 transition-opacity group-hover:opacity-100">
                    <Info size={14} /> {t('materials.items_desc.technical_details')}
                  </div>
                </div>
              </motion.article>
            </div>

            <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-[#00F0FF]/10 bg-[#111] p-8">
                <h3 className="mb-4 text-2xl font-bold text-white">{t('materials.intelligence.title')}</h3>
                <p className="text-lg leading-8 text-slate-300">
                  {t('materials.intelligence.desc')}
                </p>
                <ul className="mt-6 space-y-4">
                  {(t('materials.intelligence.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-200">
                      <div className="h-2 w-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[#00F0FF]/20"
              >
                <img
                  src={nozzleImg}
                  alt={t('materials.op_tech.badge')}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#00F0FF]">
                    {t('materials.op_tech.badge')}
                  </p>
                  <p className="text-lg font-bold text-white">
                    {t('materials.op_tech.desc')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-[#00F0FF]/10 bg-[#0A0A0A] p-6 px-8 md:flex-row">
            <p className="text-sm text-slate-400">
              {t('materials.footer_note')}
            </p>
            <a
              href={propertiesLink}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#FF5C00] px-8 py-3 font-bold text-white transition-colors hover:bg-[#e05200] shadow-[0_8px_20px_rgba(255,92,0,0.2)]"
            >
              {t('materials.footer_btn')} <ExternalLink size={18} /> <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialsSection;
