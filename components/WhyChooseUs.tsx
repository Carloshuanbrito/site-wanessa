import React from 'react';
import { motion } from 'framer-motion';
import { ThermometerSun, Layers, ShieldCheck, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <--- Importante

const WhyChooseUs: React.FC = () => {
    const { t } = useTranslation(); // <--- Hook

    const items = [
        {
            title: t('why.items.0.title'),
            desc: t('why.items.0.desc'),
            icon: ThermometerSun,
            colSpan: "md:col-span-2",
            bg: "bg-slate-900 text-white",
            iconColor: "text-brand-400"
        },
        {
            title: t('why.items.1.title'),
            desc: t('why.items.1.desc'),
            icon: Clock,
            colSpan: "md:col-span-1",
            bg: "bg-white border border-slate-200",
            iconColor: "text-brand-600"
        },
        {
            title: t('why.items.2.title'),
            desc: t('why.items.2.desc'),
            icon: Layers,
            colSpan: "md:col-span-1",
            bg: "bg-brand-50 border border-brand-100",
            iconColor: "text-brand-600"
        },
        {
            title: t('why.items.3.title'),
            desc: t('why.items.3.desc'),
            icon: ShieldCheck,
            colSpan: "md:col-span-2",
            bg: "bg-white border border-slate-200",
            iconColor: "text-slate-900"
        }
    ];

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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`${item.colSpan} ${item.bg} p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                        >
                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-opacity-20 ${item.bg.includes('slate-900') ? 'bg-white/10' : 'bg-brand-100'}`}>
                                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className={`leading-relaxed text-sm ${item.bg.includes('slate-900') ? 'text-slate-400' : 'text-slate-600'}`}>
                                    {item.desc}
                                </p>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-current opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;