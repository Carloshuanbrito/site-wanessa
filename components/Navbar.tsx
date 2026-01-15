import React, { useState, useEffect } from 'react';
import { Menu, X, Box, Printer } from 'lucide-react'; // Adicionei Printer para opção
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta o scroll para ativar o efeito de vidro
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Links do menu para facilitar a manutenção
  const navLinks = [
    { name: 'Materiais', href: '#materiais' },
    { name: 'Tecnologia', href: '#tecnologia' },
    { name: 'Serviços', href: '#servicos' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-md py-3' // Estado Scrolado (Vidro)
          : 'bg-transparent py-6' // Estado Inicial
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo Brand */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className={`p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'bg-brand-600 text-white' : 'bg-white text-brand-600 shadow-sm'
              }`}>
              {/* Você pode trocar Box por Printer se preferir */}
              <Box className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-800'
              }`}>
              H2D<span className="text-brand-500">.sys</span>
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all hover:text-brand-500 hover:-translate-y-0.5 ${isScrolled ? 'text-slate-600' : 'text-slate-700'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <Button variant={isScrolled ? 'primary' : 'outline'} className="shadow-lg shadow-brand-500/20">
              Cotar Agora
            </Button>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-slate-800 bg-white/50 hover:bg-white'
                }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Animado (Framer Motion) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-2">
                <Button variant="primary" className="w-full justify-center text-lg py-3">
                  Solicitar Orçamento
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;