import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import bgCta from './fotos/fundo/pexels-diva-34925022.jpg';

const CTA: React.FC = () => {
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0.8, 1], [-100, 100]);
  const glowScale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1.2]);

  return (
    <section id="contato" className="section-tint-contact relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
      {/* Dynamic Background Glows */}
      <motion.div 
        style={{ y: glowY, scale: glowScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F0FF]/10 blur-[160px]"
      />
      <motion.div 
        style={{ y: glowY, scale: glowScale }}
        className="pointer-events-none absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-[#FF5C00]/5 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[3rem] border border-[#00F0FF]/20 bg-[#0A0A0A]/80 px-6 py-16 text-center shadow-[0_40px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl md:px-16 md:py-24"
        >
          <div className="absolute inset-0 z-0">
            <img src={bgCta} alt="Background Texture" className="h-full w-full object-cover opacity-20 mix-blend-overlay blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0A0A0A]/90 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-slate-300">Contato comercial</p>
            <h2 className="mb-6 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
              {t('cta.title')} <br className="hidden md:block" />
              <span className="text-[#00F0FF]">{t('cta.title_highlight')}</span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
              {t('cta.desc')}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contato@aditivemaintenance.com.br';
                }}
                variant="primary"
                className="group w-full justify-center px-10 py-5 text-lg sm:w-auto"
              >
                <span className="flex items-center gap-2">
                  {t('cta.btn_quote')}
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              <a
                href="https://wa.me/5585997629938"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 rounded-[1.4rem] border border-[#00F0FF]/20 bg-[#111]/60 px-8 py-5 text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-[#00F0FF]/10 hover:border-[#00F0FF]/40 sm:max-w-[320px]"
              >
                <div className="icon-shell flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1A1A1A] text-[#00F0FF] shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                  <MessageSquare size={20} strokeWidth={2.4} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">WhatsApp</div>
                  <div className="text-xs text-slate-400">{t('cta.fast_response')}</div>
                </div>
              </a>
            </div>

            <p className="mt-8 text-sm font-medium text-slate-400">{t('cta.guarantee')}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-[2rem] border border-[#00F0FF]/15 bg-[#0A0A0A] shadow-[0_18px_44px_rgba(0,0,0,0.3)]"
        >
          <div className="border-b border-[#00F0FF]/15 px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#00F0FF]">{t('cta.map_title')}</p>
          </div>
          <div className="h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127755.99!2d-38.5434!3d-3.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74899a069be4d%3A0x790caf2f9f7b5d2f!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('cta.map_title')}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
