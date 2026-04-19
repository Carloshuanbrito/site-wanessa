import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Anchor, Clock, FileCheck, Microscope, ShieldCheck, TrendingDown, Truck, UserCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

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
    <section id="servicos" className="section-tint-services relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-slate-500">Estrutura comercial e técnica</p>
          <h2 className="text-4xl font-black tracking-[-0.03em] text-slate-950 md:text-5xl">
            Um site mais forte quando cada seção transmite confiança operacional.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Reorganizamos os blocos para destacar rapidez, suporte técnico e clareza comercial sem perder a linguagem industrial da marca.
          </p>
        </div>

        <div className="mb-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="dark-panel rounded-[2rem] p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-300">{t('why.adv_title')}</p>
            <h3 className="max-w-sm text-3xl font-bold text-white">
              Proposta de valor apresentada com mais contraste e hierarquia.
            </h3>
            <p className="mt-4 max-w-md leading-7 text-slate-300">
              Cada cartão agora funciona como argumento comercial: fácil de escanear, mais nítido e com presença visual consistente.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-panel rounded-[1.8rem] p-6"
              >
                <div className="icon-shell mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <item.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h4 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="mb-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-500">{t('why.serv_title')}</p>
            <h3 className="text-3xl font-bold tracking-[-0.02em] text-slate-950">Serviços organizados como portfólio premium</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.9rem] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)]"
              >
                <div className="icon-shell mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <item.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h4 className="mb-3 text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm leading-7 text-slate-600">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[2rem] p-8 md:p-10"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-500">Cobertura logística</p>
              <h3 className="mb-3 text-3xl font-bold tracking-[-0.02em] text-slate-950">{t('why.logistics.title')}</h3>
              <p className="max-w-2xl text-lg leading-8 text-slate-600" dangerouslySetInnerHTML={{ __html: t('why.logistics.desc') }} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.7rem] border border-slate-200 bg-slate-50 p-6">
                <div className="icon-shell mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <Truck className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <p className="text-sm font-semibold text-slate-900">Entrega nacional com foco em agilidade e previsibilidade.</p>
              </div>
              <div className="rounded-[1.7rem] border border-slate-200 bg-white p-6">
                <div className="icon-shell mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-white">
                  <Anchor className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <p className="text-sm font-semibold text-slate-900">Atendimento sensível a demandas portuárias e operação crítica.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
