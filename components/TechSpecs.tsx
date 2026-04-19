import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import printerOpImg from './fotos/3d_printer_operation.png';

const TechSpecs: React.FC = () => {
  const items = [
    {
      title: 'Reposição de peças quebradas',
      desc: 'Produção de componentes de reposição para reduzir paradas e retomar a operação.',
    },
    {
      title: 'Peças descontinuadas',
      desc: 'Alternativa para itens fora de linha ou com baixa disponibilidade no mercado.',
    },
    {
      title: 'Protótipos funcionais',
      desc: 'Validação rápida de geometrias e desempenho antes da produção final.',
    },
    {
      title: 'Adaptações e melhorias',
      desc: 'Ajustes em peças existentes para adequação, reforço ou ganho funcional.',
    },
    {
      title: 'Ferramentas e suportes personalizados',
      desc: 'Soluções sob medida para uso interno, montagem, apoio e operação.',
    },
  ];

  return (
    <section id="aplicacoes" className="section-tint-apps relative overflow-hidden py-24 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-6 flex items-center gap-2">
              <div className="h-px w-12 bg-slate-400/60" />
              <span className="text-sm font-bold uppercase tracking-[0.24em] text-slate-300">Múltiplas Aplicações</span>
            </div>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              <span className="text-white">Aplicações</span>
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-300">
              Soluções voltadas para reposição, continuidade operacional e desenvolvimento rápido de peças sob demanda.
            </p>

            <div className="grid gap-4">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-shell mt-0.5 rounded-2xl bg-white/10 p-2.5 text-white">
                      <CheckCircle2 size={20} strokeWidth={2.4} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-200 transition-colors hover:text-white"
            >
              Solicitar avaliação do projeto <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-[520px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-slate-950/30">
              <img
                src={printerOpImg}
                alt="Impressora 3D em operação"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              <div className="absolute left-6 right-6 top-6">
                <div className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 backdrop-blur-md">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-100">
                    <span className="h-2 w-2 rounded-full bg-white" />
                    Aplicações reais
                  </span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="rounded-3xl border border-white/10 bg-slate-950/72 p-6 backdrop-blur-md">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-200">Impressão 3D industrial</p>
                  <p className="mt-3 text-2xl font-bold text-white">
                    Peças sob demanda para reposição, adaptação e prototipagem funcional.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
