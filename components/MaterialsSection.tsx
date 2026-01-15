import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Layers, Zap, ArrowRight, Sparkles } from 'lucide-react';

// =================================================================
// ÁREA DE IMPORTAÇÃO DAS IMAGENS (NOMES REAIS DO SEU PROJETO)
// Caminho ajustado para: ./fotos/nome-do-arquivo.jpg
// =================================================================

// Categoria: Prototipagem (General)
import imgGeneral1 from './fotos/pexels-cottonbro-6763944.jpg';
import imgGeneral2 from './fotos/pexels-thirdman-7181111.jpg';
import imgGeneral3 from './fotos/pexels-jakubzerdzicki-19149826.jpg';

// Categoria: Engenharia
import imgEng1 from './fotos/pexels-thisisengineering-3861437.jpg';
import imgEng2 from './fotos/pexels-tomfisk-5470453.jpg';
import imgEng3 from './fotos/pexels-fox-58267-35595049.jpg';
import imgEng4 from './fotos/pexels-jakubzerdzicki-20341728.jpg';

// Categoria: Avançado
// Obs: Usei imagens repetidas/variadas onde o nome estava cortado no print para evitar erro
import imgAdv1 from './fotos/pexels-jakubzerdzicki-30720497.jpg';
import imgAdv2 from './fotos/pexels-tomfisk-10396416.jpg';
import imgAdv3 from './fotos/pexels-thisisengineering-3861437.jpg'; // Reutilizei uma de engenharia aqui temporariamente

// =================================================================

type CategoryId = 'GENERAL' | 'ENGINEERING' | 'ADVANCED';

const MaterialsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryId>('ENGINEERING');

  const categories = {
    GENERAL: {
      title: "Prototipagem Rápida",
      description: "Materiais de excelente custo-benefício e acabamento visual para validação de forma e maquetes.",
      icon: Box,
      colorName: "blue", // Usado para classes dinâmicas
      gradientOverlay: "from-blue-900/90 via-blue-900/50 to-transparent",
      items: [
        { name: "PLA Premium", desc: "Ótimo acabamento superficial para modelos visuais. Fácil impressão.", image: imgGeneral1 },
        { name: "PETG Translúcido", desc: "Boa resistência mecânica e leve flexibilidade. Ideal para recipientes.", image: imgGeneral2 },
        { name: "TPU (Flex A95)", desc: "Elastômero com propriedades de borracha. Para vedações e amortecedores.", image: imgGeneral3 }
      ]
    },
    ENGINEERING: {
      title: "Grau de Engenharia",
      description: "Polímeros técnicos robustos para substituir peças finais, suportando calor, impacto e atrito.",
      icon: Layers,
      colorName: "emerald",
      gradientOverlay: "from-emerald-900/90 via-emerald-900/50 to-transparent",
      items: [
        { name: "ABS Industrial", desc: "Padrão para peças duráveis. Boa resistência térmica (até 85°C).", image: imgEng1 },
        { name: "ASA UV-Resist", desc: "O 'ABS para área externa'. Não degrada nem amarela sob o sol.", image: imgEng2 },
        { name: "PC (Policarbonato)", desc: "Extrema resistência a impacto e alta temperatura (110°C+).", image: imgEng3 },
        { name: "Nylon PA12/PA6", desc: "Tenacidade excepcional, baixo atrito e resistência química.", image: imgEng4 }
      ]
    },
    ADVANCED: {
      title: "Alta Performance",
      description: "O ápice da manufatura aditiva. Compósitos reforçados e superpolímeros para ambientes extremos.",
      icon: Zap,
      colorName: "purple",
      gradientOverlay: "from-purple-900/90 via-purple-950/60 to-transparent",
      items: [
        { name: "Carbon Fiber (PA-CF)", desc: "Nylon reforçado com fibra de carbono. Rigidez estrutural máxima.", image: imgAdv1, featured: true },
        { name: "Glass Fiber (PA-GF)", desc: "Estabilidade dimensional superior e isolamento elétrico/térmico.", image: imgAdv2 },
        { name: "PEEK / PPS", desc: "Substituição de metal. Resiste a químicos agressivos, fogo e 200°C+.", image: imgAdv3 }
      ]
    }
  };

  const activeCategoryData = categories[activeTab];
  const ActiveIcon = activeCategoryData.icon;

  return (
    <section id="materiais" className="relative py-24 bg-slate-50 overflow-hidden">

      {/* Elementos de fundo decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl mix-blend-multiply -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Catálogo de <span className="text-brand-600">Materiais Avançados.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Selecione a categoria e visualize as opções disponíveis para sua aplicação.
          </p>
        </div>

        {/* Navegação por Abas (Tabs) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categories).map(([key, cat]) => {
            const isActive = activeTab === key;
            const Icon = cat.icon;

            // Lógica simples para cores dos botões
            let btnClass = "";
            if (isActive) {
              if (key === 'GENERAL') btnClass = "bg-blue-600 text-white shadow-blue-500/30";
              else if (key === 'ENGINEERING') btnClass = "bg-emerald-600 text-white shadow-emerald-500/30";
              else btnClass = "bg-purple-600 text-white shadow-purple-500/30";
              btnClass += " shadow-lg scale-105";
            } else {
              btnClass = "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50";
            }

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key as CategoryId)}
                className={`relative flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium ${btnClass}`}
              >
                <Icon className={`w-5 h-5 mr-2 ${isActive ? 'text-white' : ''}`} />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Conteúdo Principal */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Painel Esquerdo: Detalhes da Categoria */}
              <div className="lg:col-span-4 flex flex-col justify-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm h-full relative overflow-hidden">
                {/* Cor de fundo sutil baseada na categoria */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 -mr-10 -mt-10 bg-${activeCategoryData.colorName}-500`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-100 text-slate-900`}>
                    <ActiveIcon size={32} className={`text-${activeCategoryData.colorName}-600`} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{activeCategoryData.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {activeCategoryData.description}
                  </p>
                  <button className="flex items-center font-bold transition-colors group text-slate-900 hover:text-brand-600">
                    Ver tabela de propriedades
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Painel Direito: Grid de Cards 3D */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeCategoryData.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative h-72 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-slate-900"
                  >
                    {/* 1. Imagem de Fundo (Zoom no Hover) */}
                    <div className="absolute inset-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 ease-out"
                      />
                    </div>

                    {/* 2. Gradiente Overlay (Legibilidade) */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${activeCategoryData.gradientOverlay} opacity-90 group-hover:opacity-80 transition-opacity duration-500`}></div>

                    {/* 3. Conteúdo do Card */}
                    <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                      {item.featured && (
                        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold uppercase rounded-full shadow-lg">
                          <Sparkles size={12} /> Recomendado
                        </div>
                      )}

                      <h4 className="text-2xl font-bold text-white mb-2 translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                        {item.name}
                      </h4>
                      <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                        <p className="text-white/90 text-sm leading-relaxed font-medium border-l-2 border-white/40 pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {item.desc}
                        </p>
                      </div>
                      {/* Texto curto sempre visível se preferir, ou escondido como acima */}
                      <p className="text-white/60 text-sm mt-1 group-hover:hidden transition-opacity">
                        {item.desc.substring(0, 40)}...
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default MaterialsSection;