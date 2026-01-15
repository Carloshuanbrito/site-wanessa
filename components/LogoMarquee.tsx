import React from 'react';
import { Hexagon, Triangle, Circle, Box, Aperture, Command } from 'lucide-react';

const LogoMarquee: React.FC = () => {
    // Logos fictícios para preencher visualmente (pode trocar por imagens reais depois)
    const logos = [
        { name: "TechMech", icon: Hexagon },
        { name: "AeroDynamics", icon: Triangle },
        { name: "Global Systems", icon: Circle },
        { name: "Cube Corp", icon: Box },
        { name: "Visionary", icon: Aperture },
        { name: "Cmd Space", icon: Command },
    ];

    return (
        <div className="w-full py-10 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
            {/* Gradientes laterais para suavizar a entrada/saída */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

            <div className="flex w-max animate-scroll">
                {/* Renderiza a lista duas vezes para criar o loop infinito */}
                {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                    <div key={idx} className="flex items-center space-x-2 mx-12 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
                        <logo.icon size={32} className="text-slate-800 group-hover:text-brand-600" />
                        <span className="text-xl font-bold text-slate-700 font-mono tracking-tighter group-hover:text-slate-900">{logo.name.toUpperCase()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoMarquee;