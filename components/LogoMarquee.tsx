import React from 'react';
import { Zap, Boxes, Clock, UserCheck } from 'lucide-react';

const LogoMarquee: React.FC = () => {
    const items = [
        { name: "Produção rápida — Dias, não semanas.", icon: Zap },
        { name: "Sem necessidade de molde", icon: Boxes },
        { name: "Ideal para peças descontinuadas ou urgentes", icon: Clock },
        { name: "Atendimento técnico personalizado", icon: UserCheck },
    ];

    return (
        <div className="w-full py-8 bg-white border-y border-slate-100 overflow-hidden relative">
            {/* Gradientes laterais para suavizar a entrada/saída */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex w-max animate-scroll">
                {/* Renderiza a lista várias vezes para criar o loop infinito */}
                {[...items, ...items, ...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 mx-16 opacity-70 hover:opacity-100 transition-opacity duration-300 group">
                        <item.icon size={24} className="text-brand-600 group-hover:scale-110 transition-transform" />
                        <span className="text-lg font-semibold text-slate-800 whitespace-nowrap">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoMarquee;