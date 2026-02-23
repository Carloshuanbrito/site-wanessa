import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, FileCheck, ShieldCheck, Printer, Layers, Scan, PenTool, Truck, Anchor } from 'lucide-react';

const WhyChooseUs: React.FC = () => {

    const advantages = [
        {
            title: "Redução de Leadtime",
            desc: "Fabricamos peças de reposição em plástico a partir das suas peças quebradas. Retome sua operação rapidamente sem depender de longos prazos de entrega.",
            icon: Clock
        },
        {
            title: "Redução de Custos",
            desc: "Elimine a necessidade e os altos custos logísticos de importação de peças de reposição internacionais.",
            icon: TrendingDown
        },
        {
            title: "Projetos Confiáveis",
            desc: "Desenvolvemos e entregamos arquivos de engenharia (projetos 3D) rápidos, precisos e totalmente confiáveis.",
            icon: FileCheck
        },
        {
            title: "Qualidade Comprovada",
            desc: "Peças testadas em condições reais de uso, sempre acompanhadas de estudos rigorosos para a escolha do material correto.",
            icon: ShieldCheck
        }
    ];

    const services = [
        {
            title: "Locação de Impressoras",
            desc: "Locação de impressoras de filamento 3D industriais diretamente para a sua planta ou operação.",
            icon: Printer
        },
        {
            title: "Impressão em Média Escala",
            desc: "Produção de dezenas ou centenas de peças seriadas, eliminando totalmente os custos de fabricação de moldes.",
            icon: Layers
        },
        {
            title: "Digitalização e Projetos",
            desc: "Serviço completo de escaneamento 3D e desenvolvimento de projetos de peças de engenharia.",
            icon: Scan
        },
        {
            title: "Prototipagem com Marcação",
            desc: "Prototipagem funcional com a possibilidade de gravação em baixo ou alto relevo da sua marca ou part number na peça.",
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
                        Vantagens e <span className="text-brand-600">Serviços</span>
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Capacidade de manufatura focada em resolver problemas reais da sua indústria, sem improvisos.
                    </p>
                </div>

                {/* Vantagens Competitivas */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-slate-800 mb-8 pl-4 border-l-4 border-brand-500">
                        Principais vantagens de trabalhar conosco
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
                        Nossos Serviços
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
                        <h3 className="text-2xl font-bold text-white mb-2">Cobertura Logística</h3>
                        <p className="text-brand-100 text-lg">
                            Entrega de peças em todo o Brasil com foco especial em <strong>atendimento rápido portuário</strong>.
                        </p>
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