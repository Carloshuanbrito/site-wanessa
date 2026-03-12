import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, FileCheck, ShieldCheck, Printer, Layers, Scan, PenTool, Truck, Anchor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs: React.FC = () => {
    const { t } = useTranslation();

    const advantages = [
        {
            title: t('why.advantages.0.title'),
            desc: t('why.advantages.0.desc'),
            icon: Clock
        },
        {
            title: t('why.advantages.1.title'),
            desc: t('why.advantages.1.desc'),
            icon: TrendingDown
        },
        {
            title: t('why.advantages.2.title'),
            desc: t('why.advantages.2.desc'),
            icon: FileCheck
        },
        {
            title: t('why.advantages.3.title'),
            desc: t('why.advantages.3.desc'),
            icon: ShieldCheck
        }
    ];

    const services = [
        {
            title: t('why.services.0.title'),
            desc: t('why.services.0.desc'),
            icon: Printer
        },
        {
            title: t('why.services.1.title'),
            desc: t('why.services.1.desc'),
            icon: Layers
        },
        {
            title: t('why.services.2.title'),
            desc: t('why.services.2.desc'),
            icon: Scan
        },
        {
            title: t('why.services.3.title'),
            desc: t('why.services.3.desc'),
            icon: PenTool
        }
    ];

    return (
        <section id="servicos" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Cabeçalho Direto e Prático */}
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

                {/* Vantagens Competitivas */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-brand-500">
                        {t('why.adv_title')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-200"
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

                {/* Serviços Especializados */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-slate-800">
                        {t('why.serv_title')}
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
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-700/20 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-slate-700/40 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-slate-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Banner de Logística (O Atendimento Portuário e Nacional) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-brand-600 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-xl shadow-brand-600/20"
                >
                    <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                        <h3 className="text-2xl font-bold text-white mb-2">{t('why.logistics.title')}</h3>
                        <p className="text-brand-100 text-lg" dangerouslySetInnerHTML={{ __html: t('why.logistics.desc') }} />
                    </div>
                    <div className="flex gap-4">
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <Truck className="text-white w-8 h-8" />
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                            <Anchor className="text-white w-8 h-8" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhyChooseUs;