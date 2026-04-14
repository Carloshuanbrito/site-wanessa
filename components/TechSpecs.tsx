import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench, Shuffle, PackageCheck, Lightbulb, Box } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import printerOpImg from './fotos/3d_printer_operation.png';

const TechSpecs: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    { idx: 0, icon: Wrench, color: "text-blue-400", bg: "bg-blue-500/10" },
    { idx: 1, icon: PackageCheck, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { idx: 2, icon: Box, color: "text-purple-400", bg: "bg-purple-500/10" },
    { idx: 3, icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-500/10" },
    { idx: 4, icon: Settings, color: "text-orange-400", bg: "bg-orange-500/10" }
  ];

  return (
    <section id="aplicacoes" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-600/20 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700/50 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10"></div>
            <img 
               src={printerOpImg} 
               alt="Impressora 3D em Operação" 
               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
            <div className="absolute bottom-8 left-8 right-8 z-20">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-700 backdrop-blur-md mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Produção Ativa</span>
               </div>
               <h3 className="text-2xl font-bold text-white">Manufatura de Alto Desempenho</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <Shuffle className="text-brand-400" size={20} />
              <span className="text-brand-400 font-mono text-sm uppercase tracking-widest">{t('tech.badge')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t('tech.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">
                {t('tech.title_highlight')}
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              {t('tech.desc')}
            </p>

            <div className="grid gap-4">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all hover:bg-white/10 backdrop-blur-sm group">
                  <div className={`p-3 rounded-xl mr-5 transition-colors ${item.bg}`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-brand-300 transition-colors">
                      {t(`tech.items.${item.idx}.title`)}
                    </h4>
                    <p className="text-slate-400 text-sm">{t(`tech.items.${item.idx}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;