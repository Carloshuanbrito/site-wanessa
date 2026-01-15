import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Thermometer, Wind, Zap, Cpu } from 'lucide-react';

// =====================================================================
// CORREÇÃO DO IMPORT DA IMAGEM
// O ponto (.) significa "nesta mesma pasta (components)"
// =====================================================================
import bgTexture from './fotos/fundo/pexels-acev-19931186.jpg';

const data = [
  { time: '0s', temp: 25 }, { time: '5m', temp: 150 },
  { time: '10m', temp: 300 }, { time: '15m', temp: 348 },
  { time: '20m', temp: 350 }, { time: '25m', temp: 350 },
  { time: '30m', temp: 349 }, { time: '35m', temp: 350 },
];

const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

const TechSpecs: React.FC = () => {
  return (
    <section id="tecnologia" className="relative py-24 bg-slate-900 text-white overflow-hidden">

      {/* Camada de Fundo com a Imagem */}
      <div className="absolute inset-0 z-0">
        {/* Se a imagem não carregar, o bg-slate-900 garante que não fica branco */}
        <div className="absolute inset-0 bg-slate-900"></div>
        <img
          src={bgTexture}
          alt="Tech Texture"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Conteúdo Esquerdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="text-brand-400" size={20} />
              <span className="text-brand-400 font-mono text-sm uppercase tracking-widest">H2D Tech Specs</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Domínio Térmico <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Extremo.
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
              Impressão 3D de verdade exige controle. Nossa câmara aquecida ativa garante que polímeros como ABS e Nylon tenham a mesma resistência mecânica da injeção plástica.
            </p>

            <div className="grid gap-6">
              {[
                {
                  icon: Thermometer, color: "text-red-400", bg: "bg-red-500/10",
                  title: "Hotend All-Metal", value: "350°C",
                  desc: "Derrete PEEK e Ultem sem esforço."
                },
                {
                  icon: Wind, color: "text-orange-400", bg: "bg-orange-500/10",
                  title: "Câmara Aquecida", value: "80°C",
                  desc: "Zero warping em peças grandes."
                },
                {
                  icon: Zap, color: "text-yellow-400", bg: "bg-yellow-500/10",
                  title: "Bico Endurecido", value: "65 HRC",
                  desc: "Imprime Fibra de Carbono por milhares de horas."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-sm">
                  <div className={`p-3 rounded-lg mr-5 ${item.bg}`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg flex items-center gap-2">
                      {item.title} <span className={`text-xs px-2 py-0.5 rounded border border-white/20 ${item.color}`}>{item.value}</span>
                    </h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gráfico */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700 p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <p className="text-slate-400 text-xs font-mono mb-1">MONITORAMENTO EM TEMPO REAL</p>
                  <h3 className="text-xl font-semibold text-white">Estabilidade do Extrusor</h3>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-brand-400 font-mono flex items-center justify-end">
                    <AnimatedNumber value={350} />
                    <span className="text-lg ml-1">°C</span>
                  </div>
                  <span className="text-xs text-green-400 flex items-center justify-end gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Estável
                  </span>
                </div>
              </div>

              <div className="h-64 w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} domain={[0, 400]} />
                    <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }} itemStyle={{ color: '#38bdf8' }} />
                    <Line type="monotone" dataKey="temp" stroke="#38bdf8" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#fff', stroke: '#38bdf8', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechSpecs;