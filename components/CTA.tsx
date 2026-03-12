import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import bgCta from './fotos/fundo/pexels-diva-34925022.jpg';

const CTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contato" className="py-20 bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2.5rem] bg-slate-900 overflow-hidden relative px-6 py-16 md:px-16 md:py-24 text-center shadow-2xl shadow-slate-900/20"
        >
          {/* Fundo com Imagem */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-900"></div>
            <img
              src={bgCta}
              alt="Background Texture"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay blur-sm scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/90"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t('cta.title')} <br className="hidden md:block" />
              <span className="text-brand-400">
                {t('cta.title_highlight')}
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              {t('cta.desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={() => window.location.href='mailto:contato@aditivemaintenance.com.br'} variant="primary" className="w-full sm:w-auto py-4 px-8 text-lg shadow-brand-500/25 shadow-lg group">
                <span className="flex items-center justify-center gap-2">
                  {t('cta.btn_quote')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <a href="https://wa.me/5585997629938" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium hover:bg-green-600 transition-colors border border-green-500/50 backdrop-blur-sm bg-green-500/20">
                <MessageSquare size={20} />
                {t('cta.btn_wpp')}
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              {t('cta.guarantee')}
            </p>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="mt-12 rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-80 relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127755.99!2d-38.5434!3d-3.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74899a069be4d%3A0x790caf2f9f7b5d2f!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1" 
            width="100%" 
            height="400" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={t('cta.map_title')}
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;