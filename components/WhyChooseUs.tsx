import React from 'react';
import { motion } from 'framer-motion';
import { ThermometerSun, Layers, ShieldCheck, Zap, Globe, Clock, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
    // Bento Grid Items
    const items = [
        {
            title: "Câmara Aquecida 80°C",
            desc: "Ambiente controlado que elimina empenamento (warping) em peças grandes de ABS e ASA.",
            icon: ThermometerSun,
            colSpan: "md:col-span-2",
            bg: "bg-slate-900 text-white",
            iconColor: "text-brand-400"
        },
        {
            title: "Orçamento em 24h",
            desc: "Receba análise técnica e preço rapidamente.",
            icon: Clock,
            colSpan: "md:col-span-1",
            bg: "bg-white border border-slate-200",
            iconColor: "text-brand-600"
        },
        {
            title: "Isotropia Z-Axis",
            desc: "Fusão química de camadas superior, garantindo resistência mecânica em todas as direções.",
            icon: Layers,
            colSpan: "md:col-span-1",
            bg: "bg-brand-50 border border-brand-100",
            iconColor: "text-brand-600"
        },
        {
            title: "Materiais Reais",
            desc: "Processamos PEEK, Carbon Fiber e Nylon sem tensões internas.",
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
                        Engenharia Aditiva <span className="text-brand-600">de Precisão</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Superamos as limitações da impressão 3D convencional com hardware industrial e controle de processo rigoroso.
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

                            {/* Efeito decorativo no hover */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-current opacity-5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;