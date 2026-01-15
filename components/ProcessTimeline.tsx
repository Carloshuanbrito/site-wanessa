import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { UploadCloud, ScanSearch, Printer, PackageCheck, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Upload Inteligente",
        desc: "Envie seu STL/STEP. Nossa IA analisa a geometria instantaneamente.",
        icon: UploadCloud,
        color: "blue",
        glow: "shadow-blue-500/20",
        border: "group-hover:border-blue-500/50"
    },
    {
        id: 2,
        title: "Validação Técnica",
        desc: "Engenheiros verificam tolerâncias e orientam o melhor material.",
        icon: ScanSearch,
        color: "emerald",
        glow: "shadow-emerald-500/20",
        border: "group-hover:border-emerald-500/50"
    },
    {
        id: 3,
        title: "Manufatura Industrial",
        desc: "Impressão em câmara aquecida (350°C) com controle de qualidade.",
        icon: Printer,
        color: "amber",
        glow: "shadow-amber-500/20",
        border: "group-hover:border-amber-500/50"
    },
    {
        id: 4,
        title: "Entrega Certificada",
        desc: "Post-processing, limpeza química e envio com relatório dimensional.",
        icon: PackageCheck,
        color: "purple",
        glow: "shadow-purple-500/20",
        border: "group-hover:border-purple-500/50"
    }
];

const TiltCard = ({ step, index }: { step: any, index: number }) => {
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
            {/* Conector Mobile (Linha vertical entre cards) */}
            {index !== steps.length - 1 && (
                <div className="md:hidden absolute bottom-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-slate-700 to-transparent transform translate-y-full -translate-x-1/2 z-0"></div>
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
                    {/* Ícone com brilho colorido */}
                    <div className={`w-14 h-14 rounded-xl bg-${step.color}-500/10 flex items-center justify-center mb-6 border border-${step.color}-500/20 group-hover:scale-110 transition-transform duration-500`}>
                        <step.icon size={28} className={`text-${step.color}-400`} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                        {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-700 pl-4 group-hover:border-${step.color}-500/50 transition-colors">
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
                        <span className="text-slate-400 text-xs font-mono uppercase tracking-widest">Workflow Industrial H2D</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Do Arquivo Digital à <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">Peça Física Certificada</span>
                    </h2>
                </div>

                {/* LINHA DE CONEXÃO (PIPELINE) - Visível apenas em Desktop */}
                <div className="hidden md:block absolute top-[60%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0 opacity-30"></div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, idx) => (
                        <React.Fragment key={idx}>
                            <TiltCard step={step} index={idx} />

                            {/* Seta de Conexão (Entre cards) - Desktop only */}
                            {idx !== steps.length - 1 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-4 text-slate-700 transform -translate-y-1/2 z-0 translate-x-[50%]">
                                    <ArrowRight size={24} className="opacity-20" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProcessTimeline;