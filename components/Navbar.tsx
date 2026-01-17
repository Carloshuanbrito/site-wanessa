import React, { useState, useEffect } from 'react';
import { Menu, X, Box, Printer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from './Button';

// --- COMPONENTES DAS BANDEIRAS (SVG Puro) ---
const FlagBR = () => (
  <svg className="w-5 h-5 rounded-full object-cover border border-slate-200 shadow-sm" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="24" fill="#009c3b" />
    <path d="M16 2.5L29 12L16 21.5L3 12L16 2.5Z" fill="#ffdf00" />
    <circle cx="16" cy="12" r="5" fill="#002776" />
    <path d="M12.5 13.5C12.5 13.5 13.5 10.5 19.5 10.5" stroke="white" strokeWidth="0.8" />
  </svg>
);

const FlagUS = () => (
  <svg className="w-5 h-5 rounded-full object-cover border border-slate-200 shadow-sm" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="24" fill="#b22234" />
    <path d="M0 3.7H32M0 7.4H32M0 11.1H32M0 14.8H32M0 18.5H32M0 22.2H32" stroke="white" strokeWidth="1.85" />
    <rect width="14" height="13" fill="#3c3b6e" />
    <path d="M2 2L3 4H1L2 2Z" fill="white" transform="scale(0.8) translate(1,1)" /> {/* Estrela simplificada */}
    <path d="M2 2L3 4H1L2 2Z" fill="white" transform="scale(0.8) translate(6,1)" />
    <path d="M2 2L3 4H1L2 2Z" fill="white" transform="scale(0.8) translate(11,1)" />
    <path d="M2 2L3 4H1L2 2Z" fill="white" transform="scale(0.8) translate(3.5,5)" />
    <path d="M2 2L3 4H1L2 2Z" fill="white" transform="scale(0.8) translate(8.5,5)" />
    <path d="M2 2L3 4H1L2 2Z" fill="white" transform="scale(0.8) translate(1,9)" />
    <path d="M2 2L3 4H1L2 2Z" fill="white" transform="scale(0.8) translate(6,9)" />
    <path d="M2 2L3 4H1L2 2Z" fill="white" transform="scale(0.8) translate(11,9)" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();

  // Função para trocar o idioma
  const toggleLanguage = () => {
    const newLang = i18n.language?.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.materials'), href: '#materiais' },
    { name: t('navbar.tech'), href: '#tecnologia' },
    { name: t('navbar.services'), href: '#servicos' },
  ];

  // Helper para decidir qual bandeira mostrar
  const isPt = i18n.language?.startsWith('pt');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className={`p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'bg-brand-600 text-white' : 'bg-white text-brand-600 shadow-sm'
              }`}>
              <Box className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-800'
              }`}>
              H2D<span className="text-brand-500">.sys</span>
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
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

            <div className={`h-6 w-px ${isScrolled ? 'bg-slate-300' : 'bg-slate-300/50'}`}></div>

            {/* BOTÃO DE IDIOMA COM BANDEIRA */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 ${isScrolled
                  ? 'border border-slate-200 bg-white/50 text-slate-700 hover:border-brand-500'
                  : 'bg-white/20 backdrop-blur-sm border border-white/30 text-slate-800 hover:bg-white/40'
                }`}
            >
              {/* Mostra a bandeira do idioma ATUAL */}
              {isPt ? <FlagBR /> : <FlagUS />}
              <span>{isPt ? 'PT' : 'EN'}</span>
            </button>

            <Button variant={isScrolled ? 'primary' : 'outline'} className="shadow-lg shadow-brand-500/20">
              {t('navbar.cta')}
            </Button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden flex items-center gap-3">
            {/* Botão Idioma Mobile */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-white/50 border border-slate-200 backdrop-blur-sm shadow-sm"
            >
              {isPt ? <FlagBR /> : <FlagUS />}
            </button>

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

      {/* Dropdown Mobile */}
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
                  {t('navbar.cta')}
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