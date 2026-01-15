import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button'; // Certifique-se que seu Button aceita className ou style
import heroImage from './fotos/pexels-thisisengineering-3861437.jpg';
import { ArrowRight, Box, Layers, Zap } from 'lucide-react'; // Ícones modernos

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-slate-50 flex items-center">

      {/* 1. Fundo Técnico (Grid de Engenharia) */}
      <div className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>

      {/* 2. Blobs de Luz (Glow effect) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Lado Esquerdo: Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge "Novidade" */}
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
            className="inline-flex items-center px-3 py-1 bg-white border border-brand-100 rounded-full shadow-sm mb-6"
          >
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-slate-600 text-xs font-bold uppercase tracking-wider">H2D Systems v4.0</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            Engenharia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-cyan-500">
              Materializada.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-light">
            Do CAD à peça final em compósitos de alta performance.
            <strong className="text-slate-900 font-semibold"> Câmaras de 350°C</strong> para imprimir o impossível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" icon>
              <span className="flex items-center gap-2">Iniciar Projeto <ArrowRight size={18} /></span>
            </Button>
            <Button variant="outline">Ver Materiais</Button>
          </div>

          {/* Dados Rápidos (Specs) */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            <div>
              <p className="text-3xl font-bold text-slate-900">24h</p>
              <p className="text-xs text-slate-500 uppercase font-semibold">Cotação</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">350°C</p>
              <p className="text-xs text-slate-500 uppercase font-semibold">Temp. Hotend</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">ISO</p>
              <p className="text-xs text-slate-500 uppercase font-semibold">Qualidade</p>
            </div>
          </div>
        </motion.div>

        {/* Lado Direito: Imagem com Elementos Flutuantes */}
        <div className="relative hidden lg:block h-[600px]">
          {/* Card Flutuante 1 - Glassmorphism */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 z-30 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-2xl border border-white/50 w-48"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg"><Layers size={20} className="text-brand-600" /></div>
              <div>
                <p className="text-xs text-slate-500 font-semibold">Material</p>
                <p className="text-sm font-bold text-slate-800">Carbon Fiber</p>
              </div>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-brand-500 h-full w-[90%]"></div>
            </div>
          </motion.div>

          {/* Imagem Principal Recortada (Shape diferente) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
            <img
              src={heroImage}
              alt="Peça 3D H2D"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Texto sobre a imagem */}
            <div className="absolute bottom-8 left-8 z-20">
              <div className="flex items-center gap-2 text-white mb-1">
                <Zap size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-bold uppercase tracking-widest">Produção Ativa</span>
              </div>
              <p className="text-white text-lg font-light">Impressão de Polímeros Avançados</p>
            </div>
          </motion.div>

          {/* Elemento Decorativo de Fundo */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;