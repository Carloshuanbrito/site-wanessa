import React from 'react';
import { Box, Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Coluna 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Box className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">H2D<span className="text-brand-600">.sys</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Transformando bits em átomos com precisão industrial. Seu parceiro de manufatura aditiva de alta performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Serviços</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Prototipagem Rápida</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Peças Finais (End-use)</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Lotes Pequenos</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Consultoria em DfAM</a></li>
            </ul>
          </div>

          {/* Coluna 3: Materiais */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Materiais</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-600 transition-colors">PLA / PETG</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">ABS / ASA Engineering</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Nylon (PA12 / PA6)</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Carbon Fiber Composites</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Fale Conosco</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center group cursor-pointer">
                <div className="p-2 bg-white border border-slate-200 rounded-lg mr-3 group-hover:border-brand-300 transition-colors">
                  <Mail className="w-4 h-4 text-brand-600" />
                </div>
                contato@h2d.com.br
              </li>
              <li className="flex items-center group cursor-pointer">
                <div className="p-2 bg-white border border-slate-200 rounded-lg mr-3 group-hover:border-brand-300 transition-colors">
                  <Phone className="w-4 h-4 text-brand-600" />
                </div>
                +55 11 99999-9999
              </li>
              <li className="flex items-center">
                <div className="p-2 bg-white border border-slate-200 rounded-lg mr-3">
                  <MapPin className="w-4 h-4 text-brand-600" />
                </div>
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} H2D Manufatura Aditiva. Todos os direitos reservados.</p>
          <div className="mt-2 md:mt-0 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Sistemas Operacionais
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;