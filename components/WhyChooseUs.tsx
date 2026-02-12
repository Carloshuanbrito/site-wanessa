import React from 'react';
import { motion } from 'framer-motion';
import { ThermometerSun, Layers, ShieldCheck, Clock, Printer, Scan, FileCode2, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs: React.FC = () => {
    const { t } = useTranslation();

    // Mapping icons to keys for Advantages
    const advIcons = [Clock, ShieldCheck, FileCode2, RotateCcw];
    const advantages = [0, 1, 2, 3].map(idx => ({
        title: t(`why.advantages.${idx}.title`),
        desc: t(`why.advantages.${idx}.desc`),
        icon: advIcons[idx]
    }));

    // Mapping icons to keys for Services
    const srvIcons = [Printer, Layers, Scan, Layers]; // Using similar icons for now
    const services = [0, 1, 2, 3].map(idx => ({
        title: t(`why.services.${idx}.title`),
        desc: t(`why.services.${idx}.desc`),
        icon: srvIcons[idx]
    }));

    return (
        <section id="servicos" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        {t('why.title')} <span className="text-brand-600">{t('why.title_highlight')}</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {t('why.subtitle')}
                    </p>
                </div>

                {/* Vantagens */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-brand-500">
                        Vantagens Competitivas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4 text-brand-600">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Serviços */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-purple-500">
                        Serviços Especializados
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-800 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-purple-500/20 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-purple-400">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;