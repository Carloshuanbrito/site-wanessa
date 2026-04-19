import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ExternalLink, XCircle } from 'lucide-react';
import printerOpImg from './fotos/3d_printer_operation.png';

const MaterialsSection: React.FC = () => {
  const propertiesLink = '#contato';
  const comparisonRows = [
    { label: 'Resistência mecânica', proto: 'Média', eng: 'Muito alta a extrema' },
    { label: 'Resistência térmica', proto: 'Até 80°C', eng: '120°C a 250°C' },
    { label: 'Resistência química', proto: 'Moderada', eng: 'Alta a extrema' },
    { label: 'Reforço com fibras (CF/GF)', proto: false, eng: true },
    { label: 'Substituição de metais', proto: false, eng: true },
  ];

  return (
    <section id="materiais" className="section-tint-materials relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Catálogo de <span className="text-brand-700">Materiais Avançados.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Compare os dois modelos e visualize a linha mais adequada para a sua aplicação.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-1/3 border-b border-slate-200 bg-slate-50 p-6">
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Característica</span>
                  </th>
                  <th className="relative w-1/3 border-b border-r border-slate-100 bg-slate-50 p-6">
                    <div className="flex flex-col">
                      <span className="mb-1 text-2xl font-bold text-slate-900">Prototipagem Rápida</span>
                      <span className="text-sm font-semibold text-slate-500">PETG</span>
                      <p className="mt-3 inline-block rounded-md bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                        Ideal para usos não críticos sem exigências mecânicas.
                      </p>
                    </div>
                  </th>
                  <th className="relative w-1/3 border-b border-slate-200 bg-slate-50 p-6">
                    <div className="flex flex-col">
                      <span className="mb-1 text-2xl font-bold text-slate-900">Grau de Engenharia</span>
                      <span className="text-sm font-semibold text-slate-500">Nylon CF, PEEK, TPU</span>
                      <p className="mt-3 inline-block rounded-md bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                        Alta performance estrutural e térmica.
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-slate-50/60">
                    <td className="p-6 font-semibold text-slate-800">{row.label}</td>
                    <td className="border-r border-slate-100 p-6">
                      {typeof row.proto === 'boolean' ? (
                        row.proto ? <CheckCircle2 className="text-slate-800" size={24} /> : <XCircle className="text-slate-300" size={24} />
                      ) : (
                        <span className="font-semibold text-slate-700">{row.proto}</span>
                      )}
                    </td>
                    <td className="p-6">
                      {typeof row.eng === 'boolean' ? (
                        row.eng ? <CheckCircle2 className="text-slate-800" size={24} /> : <XCircle className="text-slate-300" size={24} />
                      ) : (
                        <span className="font-bold text-slate-800">{row.eng}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-slate-200 bg-slate-50 p-6 md:p-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900">PETG</h3>
                <p className="text-sm leading-6 text-slate-600">
                  Ideal para usos não críticos sem exigências mecânicas.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900">Aplicação visual e validação</h3>
                <p className="text-sm leading-6 text-slate-600">
                  Bom custo-benefício para maquetes, validação de forma e peças de apresentação.
                </p>
              </article>
            </div>

            <div className="relative min-h-[240px] overflow-hidden rounded-2xl">
              <img
                src={printerOpImg}
                alt="Impressora 3D produzindo uma peça técnica"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-200">
                  Produção visual
                </p>
                <p className="max-w-sm text-sm text-white">
                  Comparação rápida para orientar a escolha inicial do material antes da definição técnica final.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 bg-white p-6 px-8 md:flex-row">
            <p className="text-sm text-slate-500">
              * As propriedades exatas dependem do polímero específico escolhido.
            </p>
            <a
              href={propertiesLink}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-slate-900 px-8 py-3 font-bold text-white transition-colors hover:bg-slate-800"
            >
              Ver tabela de propriedades <ExternalLink size={18} /> <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MaterialsSection;
