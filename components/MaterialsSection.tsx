import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MaterialsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="materiais" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl mix-blend-multiply -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Catálogo de <span className="text-brand-600">Materiais</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Compare nossas linhas de materiais para encontrar a solução ideal para a sua aplicação.
          </p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 bg-slate-50 border-b border-slate-200 w-1/3">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Característica</span>
                  </th>
                  <th className="p-6 bg-blue-50/50 border-b border-blue-200 w-1/3 relative border-r border-slate-100">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-slate-900 mb-1">Prototipagem Rápida</span>
                      <span className="text-sm text-slate-500 font-normal">PETG</span>
                      <p className="text-xs text-blue-700 mt-3 font-medium bg-blue-100/80 inline-block px-3 py-1.5 rounded-md">
                         {t('materials.general.desc')}
                      </p>
                    </div>
                  </th>
                  <th className="p-6 bg-emerald-50/50 border-b border-emerald-200 w-1/3 relative">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-slate-900 mb-1">Grau de Engenharia</span>
                      <span className="text-sm text-slate-500 font-normal">Nylon CF, PEEK, TPU</span>
                      <p className="text-xs text-emerald-700 mt-3 font-medium bg-emerald-100/80 inline-block px-3 py-1.5 rounded-md">
                         Alta performance estrutural e térmica.
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { label: "Resistência Mecânica", proto: "Média", eng: "Muito Alta a Extrema" },
                  { label: "Resistência Térmica", proto: "Até 80°C", eng: "120°C a 250°C" },
                  { label: "Resistência Química", proto: "Moderada", eng: "Alta a Extrema" },
                  { label: "Reforço com Fibras (CF/GF)", proto: false, eng: true },
                  { label: "Substituição de Metais", proto: false, eng: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 text-slate-700 font-semibold">{row.label}</td>
                    <td className="p-6 border-r border-slate-100">
                       {typeof row.proto === 'boolean' 
                         ? (row.proto ? <CheckCircle2 className="text-green-500" size={24} /> : <XCircle className="text-slate-300" size={24} />)
                         : <span className="text-slate-600 font-medium">{row.proto}</span>
                       }
                    </td>
                    <td className="p-6">
                       {typeof row.eng === 'boolean' 
                         ? (row.eng ? <CheckCircle2 className="text-green-500" size={24} /> : <XCircle className="text-slate-300" size={24} />)
                         : <span className="text-emerald-700 font-bold">{row.eng}</span>
                       }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-slate-50 p-6 px-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-slate-500">
              * As propriedades exatas dependem do polímero específico escolhido (ex: PEEK vs Nylon CF).
            </p>
            <a href="#" className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20 whitespace-nowrap">
               Ver tabela de propriedades <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialsSection;