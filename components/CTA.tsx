import React from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

// =====================================================================
// CORREÇÃO DO IMPORT DA IMAGEM
// Verifique se o arquivo "pexels-diva-34925022.jpg" existe mesmo na pasta fundo
// =====================================================================
import bgCta from './fotos/fundo/pexels-diva-34925022.jpg';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 px-4">
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
              Seu projeto merece <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">
                materialização profissional.
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light">
              Envie seu arquivo STL ou STEP agora. Nossa engenharia analisa a viabilidade e retorna com o orçamento e sugestão de material ideal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" className="w-full sm:w-auto py-4 px-8 text-lg shadow-brand-500/25 shadow-lg group">
                <span className="flex items-center justify-center gap-2">
                  Solicitar Cotação <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm">
                <MessageSquare size={20} />
                WhatsApp
              </button>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Resposta garantida em até 24h úteis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;