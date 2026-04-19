import React from 'react';
import { Boxes, Clock, UserCheck, Zap } from 'lucide-react';

const LogoMarquee: React.FC = () => {
  const items = [
    { name: 'Produção rápida — dias, não semanas.', icon: Zap },
    { name: 'Sem necessidade de molde', icon: Boxes },
    { name: 'Ideal para peças descontinuadas ou urgentes', icon: Clock },
    { name: 'Atendimento técnico personalizado', icon: UserCheck },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-scroll flex w-max py-6">
          {[...items, ...items, ...items, ...items].map((item, idx) => (
            <div
              key={idx}
              className="mx-10 flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 transition-all duration-300 hover:bg-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                <item.icon size={18} />
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-slate-800 sm:text-base">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
