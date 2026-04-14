import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { UploadCloud, ScanSearch, Printer, PackageCheck, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import chemicalValveCase from './fotos/chemical_valve_case.png';

const getSteps = (t: any) => [
    {
        id: 1,
        title: t('process.steps.0.title'),
        desc: t('process.steps.0.desc'),
        icon: UploadCloud,
        colorClasses: "bg-blue-500/10 border-blue-500/20 text-blue-400",
        glow: "shadow-blue-500/50",
        border: "group-hover:border-blue-500/60",
        tooltip: t('process.steps.0.tooltip')
    },
    {
        id: 2,
        title: t('process.steps.1.title'),
        desc: t('process.steps.1.desc'),
        icon: ScanSearch,
        colorClasses: "bg-blue-500/10 border-blue-500/20 text-blue-400",
        glow: "shadow-blue-500/50",
        border: "group-hover:border-blue-500/60",
        tooltip: t('process.steps.1.tooltip')
    },
    {
        id: 3,
        title: t('process.steps.2.title'),
        desc: t('process.steps.2.desc'),
        icon: Printer,
        colorClasses: "bg-blue-500/10 border-blue-500/20 text-blue-400",
        glow: "shadow-blue-500/50",
        border: "group-hover:border-blue-500/60",
        tooltip: t('process.steps.2.tooltip')
    },
    {
        id: 4,
        title: t('process.steps.3.title'),
        desc: t('process.steps.3.desc'),
        icon: PackageCheck,
        colorClasses: "bg-blue-500/10 border-blue-500/20 text-blue-400",
        glow: "shadow-blue-500/50",
        border: "group-hover:border-blue-500/60",
        tooltip: t('process.steps.3.tooltip')
    }
];

const TiltCard = ({ step, index, total }: { step: any, index: number, total: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useMotionTemplate`${mouseY.get() * -20}deg`;
    const rotateY = useMotionTemplate`${mouseX.get() * 20}deg`;

    return (
        <div className="relative group perspective-1000">
            {/* Conector Mobile (Seta para baixo entre cards) */}
            {index !== total - 1 && (
                <div className="md:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-brand-500">
                    <ArrowRight size={28} className="opacity-80 rotate-90" />
                </div>
            )}

            <motion.div
                ref={ref}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
                className={`relative h-80 w-full rounded-2xl bg-slate-800/40 backdrop-blur-md p-8 border border-slate-700/50 ${step.border} ${step.glow} hover:shadow-2xl transition-all duration-500 ease-out z-10 flex flex-col justify-between`}
            >
                {/* Luz de Spot (Glare Effect) */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                    style={{
                        background: `radial-gradient(600px circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, rgba(255,255,255,0.06), transparent 40%)`
                    }}
                />

                {/* Header do Card */}
                <div style={{ transform: "translateZ(30px)" }}>
                    {/* Ícone com brilho colorido e Tooltip */}
                    <div title={step.tooltip} className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 border group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-500 cursor-help ${step.colorClasses.split(' ').filter(c => !c.startsWith('text-')).join(' ')}`}>
                        <step.icon size={28} className={step.colorClasses.split(' ').find(c => c.startsWith('text-'))} />
                    </div>

                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-slate-800 border border-slate-700 rounded-md mb-3">
                        <span className="text-xs font-bold text-brand-400">PASSO 0{step.id}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                        {step.title}
                    </h3>
                    <p className={`text-white/90 text-sm leading-relaxed border-l-2 border-slate-600 pl-4 transition-colors ${step.border}`}>
                        {step.desc}
                    </p>
                </div>

                {/* Footer do Card (Número Gigante) */}
                <div style={{ transform: "translateZ(20px)" }} className="flex justify-end items-end">
                    <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-700/20 to-slate-800/0 stroke-2 select-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
                        0{step.id}
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

const ProcessTimeline: React.FC = () => {
    const { t } = useTranslation();
    const stepsData = getSteps(t);

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">

            {/* Background Grid Tecnológico */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}>
            </div>

            {/* Luz de fundo ambiental (Glow central) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Cabeçalho da Seção */}
                <div className="mb-20 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-slate-800 rounded-full bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse mr-2"></span>
                        <span className="text-slate-400 text-xs font-mono uppercase tracking-widest">{t('process.badge')}</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        {t('process.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">{t('process.title_highlight')}</span>
                    </h2>
                </div>

                {/* LINHA DE CONEXÃO (PIPELINE) - Visível apenas em Desktop */}
                <div className="hidden md:block absolute top-[60%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0 opacity-30"></div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mb-24">
                    {stepsData.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="relative"
                        >
                            <TiltCard step={step} index={idx} total={stepsData.length} />

                            {/* Seta de Conexão (Entre cards) - Desktop only */}
                            {idx !== stepsData.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-none">
                                    <ArrowRight size={36} className="text-brand-400 opacity-90 drop-shadow-[0_0_8px_rgba(56,189,248,1)]" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CASE STUDY / APLICAÇÃO REAL */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-brand-900/20 to-slate-900 border border-brand-500/20 rounded-3xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-32 bg-brand-500/10 blur-3xl rounded-full translate-x-12 -translate-y-12"></div>

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-500/40 border border-brand-300/60 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(14,165,233,0.5)]">
                                <CheckCircle size={14} className="text-brand-300" /> {t('process.case.badge')}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {t('process.case.title')}
                            </h3>
                            <p className="text-white/90 mb-6 leading-relaxed">
                                {t('process.case.desc')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                    <p className="text-slate-500 text-xs uppercase font-bold mb-1">{t('process.case.prob_label')}</p>
                                    <p className="text-white font-medium">{t('process.case.prob_val')}</p>
                                </div>
                                <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                    <p className="text-green-400 text-xs uppercase font-bold mb-1">{t('process.case.res_label')}</p>
                                    <p className="text-white font-medium flex items-center gap-2">
                                        <Clock size={16} className="text-green-400" />
                                        {t('process.case.res_val')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 aspect-video bg-slate-800 rounded-xl overflow-hidden relative group">
                            {/* Imagem Real do Case */}
                            <img src={chemicalValveCase} alt="Válvula Especial Impressa 3D" className="w-full h-full object-cover transform opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent pointer-events-none"></div>
                            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-lg border border-white/20">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-100 uppercase font-semibold">{t('process.case.time_label')}</span>
                                    <span className="text-white font-mono font-bold text-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">{t('process.case.time_val')}</span>
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