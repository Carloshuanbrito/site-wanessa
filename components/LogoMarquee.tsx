import React from 'react';
import { Boxes, Clock, UserCheck, Zap, Scan, Layers, Factory, Microscope } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LogoMarquee: React.FC = () => {
  const { t } = useTranslation();
  const items = [
    { name: t('why.advantages.0.title'), icon: Zap },
    { name: t('why.advantages.1.title'), icon: Boxes },
    { name: t('why.advantages.2.title'), icon: Clock },
    { name: t('why.advantages.3.title'), icon: UserCheck },
    { name: t('why.advantages.4.title'), icon: Scan },
    { name: t('why.advantages.5.title'), icon: Layers },
    { name: t('why.advantages.6.title'), icon: Factory },
    { name: t('why.advantages.7.title'), icon: Microscope },
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#00F0FF]/10 bg-[#0A0A0A] py-10">
      {/* Background Tech Details */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#00F0FF_1px,transparent_1px)] bg-[size:25px_25px]" />
      </div>

      <div className="absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />

      <div className="animate-scroll flex w-max items-center">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="group mx-8 flex flex-col items-start gap-2 transition-all duration-500 hover:scale-105"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#00F0FF]/20 bg-[#00F0FF]/5 text-[#00F0FF] transition-all duration-500 group-hover:border-[#00F0FF]/60 group-hover:bg-[#00F0FF]/15">
                <item.icon size={16} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#00F0FF]/40">
                  REF-{1024 + (idx % 8)}
                </span>
                <span className="whitespace-nowrap text-sm font-black tracking-tight text-white/90 sm:text-base">
                  {item.name}
                </span>
              </div>
            </div>
            {/* Technical Detail Line */}
            <div className="h-[1px] w-0 bg-[#00F0FF]/60 transition-all duration-700 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
