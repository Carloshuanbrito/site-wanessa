import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import bgCta from './fotos/fundo/pexels-diva-34925022.jpg';

const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contato" className="section-tint-contact px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.4rem] border border-slate-200 bg-slate-900 px-6 py-16 text-center shadow-[0_24px_70px_rgba(15,23,42,0.16)] md:px-16 md:py-24"
        >
          <div className="absolute inset-0 z-0">
            <img src={bgCta} alt="Background Texture" className="h-full w-full object-cover opacity-18 mix-blend-screen blur-[1px]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(30,41,59,0.88))]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-slate-300">Contato comercial</p>
            <h2 className="mb-6 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
              {t('cta.title')} <br className="hidden md:block" />
              <span className="text-brand-300">{t('cta.title_highlight')}</span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
              {t('cta.desc')}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:items-stretch xl:flex-row xl:justify-center">
              <Button
                onClick={() => {
                  window.location.href = 'mailto:contato@aditivemaintenance.com.br';
                }}
                variant="primary"
                className="group w-full justify-center px-8 py-4 text-base xl:w-auto"
              >
                <span className="flex items-center gap-2">
                  {t('cta.btn_quote')}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>

              <a
                href="https://wa.me/5585999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/8 px-6 py-4 text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/12"
              >
                <div className="icon-shell flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <MessageSquare size={18} strokeWidth={2.2} />
                </div>
                <div className="text-left">
                  <div className="font-bold">WhatsApp</div>
                  <div className="text-xs text-slate-300">Resposta rápida em horário comercial</div>
                </div>
              </a>

              <a
                href="tel:+5585999999999"
                className="flex flex-1 items-center justify-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/8 px-6 py-4 text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/12"
              >
                <div className="icon-shell flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
                </div>
                <div className="text-left">
                  <div className="font-bold">+55 (85) 99999-9999</div>
                  <div className="text-xs text-slate-300">Contato direto por ligação</div>
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
          className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.06)]"
        >
          <div className="border-b border-slate-200 px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">{t('cta.map_title')}</p>
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
