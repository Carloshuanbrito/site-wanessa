import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Layers, Zap, ArrowRight, Sparkles, Thermometer, ShieldCheck, Activity, CheckCircle2, X, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import imgGeneral1 from './fotos/pexels-cottonbro-6763944.jpg';
import imgEng1 from './fotos/pexels-thisisengineering-3861437.jpg';
import imgEng2 from './fotos/pexels-tomfisk-5470453.jpg';
import imgAdv1 from './fotos/pexels-jakubzerdzicki-30720497.jpg';

type CategoryId = 'GENERAL' | 'ENGINEERING' | 'ADVANCED';

interface MaterialItem {
  name: string;
  desc: string;
  image: string;
  properties: string[];
  applications: string[];
  featured?: boolean;
}

const MaterialsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<CategoryId>('ENGINEERING');
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);

  const categories = {
    GENERAL: {
      title: t('materials.general.title'),
      description: t('materials.general.desc'),
      icon: Box,
      colorName: "blue",
      gradientOverlay: "from-blue-900/90 via-blue-900/50 to-transparent",
      items: [
        { 
          name: t('materials.general.items.0.name'), 
          desc: t('materials.general.items.0.desc'), 
          image: imgGeneral1,
          properties: t('materials.general.items.0.properties', { returnObjects: true }) as string[],
          applications: t('materials.general.items.0.applications', { returnObjects: true }) as string[],
          featured: true
        }
      ]
    },
    ENGINEERING: {
      title: t('materials.engineering.title'),
      description: t('materials.engineering.desc'),
      icon: Layers,
      colorName: "emerald",
      gradientOverlay: "from-emerald-900/90 via-emerald-900/50 to-transparent",
      items: [
        { 
          name: t('materials.engineering.items.0.name'), 
          desc: t('materials.engineering.items.0.desc'), 
          image: imgEng1,
          properties: t('materials.engineering.items.0.properties', { returnObjects: true }) as string[],
          applications: t('materials.engineering.items.0.applications', { returnObjects: true }) as string[]
        },
        { 
          name: t('materials.engineering.items.1.name'), 
          desc: t('materials.engineering.items.1.desc'), 
          image: imgEng2,
          properties: t('materials.engineering.items.1.properties', { returnObjects: true }) as string[],
          applications: t('materials.engineering.items.1.applications', { returnObjects: true }) as string[]
        }
      ]
    },
    ADVANCED: {
      title: t('materials.advanced.title'),
      description: t('materials.advanced.desc'),
      icon: Zap,
      colorName: "purple",
      gradientOverlay: "from-purple-900/90 via-purple-950/60 to-transparent",
      items: [
        { 
          name: t('materials.advanced.items.0.name'), 
          desc: t('materials.advanced.items.0.desc'), 
          image: imgAdv1,
          properties: t('materials.advanced.items.0.properties', { returnObjects: true }) as string[],
          applications: t('materials.advanced.items.0.applications', { returnObjects: true }) as string[],
          featured: true
        }
      ]
    }
  };

  const activeCategoryData = categories[activeTab];
  const ActiveIcon = activeCategoryData.icon;

  return (
    <section id="materiais" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl mix-blend-multiply -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t('materials.header_title')} <span className="text-brand-600">{t('materials.header_highlight')}</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('materials.header_desc')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categories).map(([key, cat]) => {
            if (cat.items.length === 0) return null;
            const isActive = activeTab === key;
            const Icon = cat.icon;
            let btnClass = "";
            if (isActive) {
              if (key === 'GENERAL') btnClass = "bg-blue-600 text-white shadow-blue-500/30";
              else if (key === 'ENGINEERING') btnClass = "bg-emerald-600 text-white shadow-emerald-500/30";
              else btnClass = "bg-purple-600 text-white shadow-purple-500/30";
              btnClass += " shadow-lg scale-105";
            } else {
              btnClass = "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50";
            }
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key as CategoryId)}
                className={`relative flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium ${btnClass}`}
              >
                <Icon className={`w-5 h-5 mr-2 ${isActive ? 'text-white' : ''}`} />
                {cat.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 flex flex-col justify-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm h-full relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 -mr-10 -mt-10 bg-${activeCategoryData.colorName}-500`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-100 text-slate-900`}>
                    <ActiveIcon size={32} className={`text-${activeCategoryData.colorName}-600`} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{activeCategoryData.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {activeCategoryData.description}
                  </p>
                  <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center font-bold transition-colors group text-slate-900 hover:text-brand-600">
                    {t('materials.btn_datasheet')}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeCategoryData.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedMaterial(item)}
                    className="group relative h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-slate-900"
                  >
                    <div className="absolute inset-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${activeCategoryData.gradientOverlay} opacity-90 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                      {item.featured && (
                        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase rounded-full shadow-lg">
                          <Sparkles size={12} /> {t('materials.recommended')}
                        </div>
                      )}
                      <h4 className="text-2xl font-bold text-white mb-2 translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                        {item.name}
                      </h4>
                      <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                        <p className="text-white/90 text-sm leading-relaxed font-medium border-l-2 border-white/40 pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {item.desc}
                        </p>
                        <div className="mt-4 flex items-center text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          <span>Clique para detalhes</span>
                          <ArrowRight size={14} className="ml-2" />
                        </div>
                      </div>
                      <p className="text-white/60 text-sm mt-1 group-hover:hidden transition-opacity">
                        {item.desc.substring(0, 40)}...
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal de Detalhes do Material */}
      <AnimatePresence>
        {selectedMaterial && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMaterial(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedMaterial(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300 border border-white/30"
              >
                <X size={20} />
              </button>

              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img src={selectedMaterial.image} alt={selectedMaterial.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${activeCategoryData.gradientOverlay} opacity-60`}></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <ActiveIcon size={20} className="text-white/80" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">{activeCategoryData.title}</span>
                  </div>
                  <h3 className="text-3xl font-bold leading-tight">{selectedMaterial.name}</h3>
                </div>
              </div>

              <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {selectedMaterial.desc}
                </p>

                <div className="grid grid-cols-1 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                      <ShieldCheck size={18} className="text-brand-500" />
                      Propriedades Principais
                    </h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedMaterial.properties.map((prop, i) => (
                        <li key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-md transition-all duration-300">
                          {prop.includes('⭐⭐') ? (
                            <Activity size={18} className="text-brand-600 mt-1 shrink-0" />
                          ) : prop.includes('°C') ? (
                            <Thermometer size={18} className="text-brand-600 mt-1 shrink-0" />
                          ) : (
                            <CheckCircle2 size={18} className="text-brand-600 mt-1 shrink-0" />
                          )}
                          <span className="text-slate-700 font-medium">{prop}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                      <Box size={18} className="text-brand-500" />
                      Aplicações Sugeridas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMaterial.applications.map((app, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full shadow-sm hover:scale-105 transition-transform duration-300 cursor-default">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex items-center justify-between p-6 bg-brand-50 rounded-[2rem] border border-brand-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center text-white shadow-brand-500/20 shadow-lg">
                      <Zap size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-900 uppercase tracking-wider">Interessado neste material?</p>
                      <p className="text-sm text-brand-700">Solicite um orçamento hoje mesmo.</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedMaterial(null);
                      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-brand-700 transition-all duration-300 shadow-lg shadow-brand-600/20"
                  >
                    Cotar
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MaterialsSection;