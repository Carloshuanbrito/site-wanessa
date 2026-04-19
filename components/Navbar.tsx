import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from './Button';

const FlagBR = () => (
  <svg className="h-5 w-5 rounded-full border border-slate-200 object-cover shadow-sm" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="24" fill="#009c3b" />
    <path d="M16 2.5L29 12L16 21.5L3 12L16 2.5Z" fill="#ffdf00" />
    <circle cx="16" cy="12" r="5" fill="#002776" />
    <path d="M12.5 13.5C12.5 13.5 13.5 10.5 19.5 10.5" stroke="white" strokeWidth="0.8" />
  </svg>
);

const FlagUS = () => (
  <svg className="h-5 w-5 rounded-full border border-slate-200 object-cover shadow-sm" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="24" fill="#b22234" />
    <path d="M0 3.7H32M0 7.4H32M0 11.1H32M0 14.8H32M0 18.5H32M0 22.2H32" stroke="white" strokeWidth="1.85" />
    <rect width="14" height="13" fill="#3c3b6e" />
    <path d="M2 2L3 4H1L2 2Z" fill="white" transform="scale(0.8) translate(1,1)" />
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.materials'), href: '#materiais' },
    { name: t('navbar.tech'), href: '#aplicacoes' },
    { name: t('navbar.services'), href: '#servicos' },
  ];

  const isPt = i18n.language?.startsWith('pt');

  const setLanguage = (lang: 'pt' | 'en') => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    if (lang === 'en') {
      document.title = 'Blue Printing 3D | High Performance Additive Manufacturing';
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        'Reduce your physical inventory and work with fast delivery. Definitive and standardized solutions in 3D printing and engineering.'
      );
    } else {
      document.title = 'Blue Printing 3D | Manufatura Aditiva de Alta Performance';
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        'Reduza os seus estoques físicos e trabalhe com entrega rápida. Soluções definitivas e padronizadas em impressão 3D e engenharia para a indústria.'
      );
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-300 ${
          isScrolled
            ? 'border-white/70 bg-white/88 shadow-[0_18px_54px_rgba(15,23,42,0.10)] backdrop-blur-xl'
            : 'border-white/60 bg-white/76 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur-lg'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <div className="icon-shell flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-[0_12px_28px_rgba(15,23,42,0.16)]">
              <Box className="h-5 w-5" strokeWidth={2.4} />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">Blue Printing 3D</p>
              <span className="block text-sm font-bold text-slate-900 sm:text-base">{t('navbar.brand')}</span>
            </div>
          </a>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-[0_10px_20px_rgba(15,23,42,0.05)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-[0_10px_20px_rgba(15,23,42,0.05)]">
              <button
                onClick={() => setLanguage('pt')}
                title="Português"
                className={`rounded-full p-1.5 transition-all ${isPt ? 'bg-slate-50 shadow-sm ring-1 ring-slate-200' : 'opacity-60 hover:opacity-100'}`}
              >
                <FlagBR />
              </button>
              <button
                onClick={() => setLanguage('en')}
                title="English"
                className={`rounded-full p-1.5 transition-all ${!isPt ? 'bg-slate-50 shadow-sm ring-1 ring-slate-200' : 'opacity-60 hover:opacity-100'}`}
              >
                <FlagUS />
              </button>
            </div>

            <Button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
              className="group"
            >
              {t('navbar.cta')}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-[0_10px_20px_rgba(15,23,42,0.05)]">
              <button onClick={() => setLanguage('pt')} className={`rounded-full p-1 ${isPt ? 'bg-slate-50 shadow-sm' : 'opacity-50'}`}>
                <FlagBR />
              </button>
              <button onClick={() => setLanguage('en')} className={`rounded-full p-1 ${!isPt ? 'bg-slate-50 shadow-sm' : 'opacity-50'}`}>
                <FlagUS />
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-900 shadow-[0_10px_20px_rgba(15,23,42,0.05)] transition-colors hover:bg-slate-50"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
            >
              <div className="space-y-2 px-4 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="primary"
                  className="mt-2 w-full justify-center"
                >
                  {t('navbar.cta')}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
