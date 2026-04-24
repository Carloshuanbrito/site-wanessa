import React from 'react';
import { Box, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden border-t border-[#00F0FF]/10 bg-[#0A0A0A] px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[2rem] border border-[#00F0FF]/10 bg-[#111]/80 p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00F0FF] to-[#0066ff] text-white shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                <Box className="h-6 w-6" strokeWidth={2.4} />
              </div>
              <p className="text-xl font-black tracking-tight text-white">
                Blue <span className="text-[#00F0FF]">Printing 3D</span>
              </p>
            </div>
            <p className="mb-6 text-sm leading-7 text-slate-300">{t('footer.desc')}</p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/blue-layer-3d/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00F0FF]/15 bg-[#1A1A1A] text-slate-300 transition-colors hover:text-[#00F0FF]" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/bluelayer3d?igsh=c2JnajBscDMxY3hn&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00F0FF]/15 bg-[#1A1A1A] text-slate-300 transition-colors hover:text-[#00F0FF]" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">{t('footer.services.title')}</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#servicos" className="transition-colors hover:text-[#00F0FF]">{t('footer.services.items.0')}</a></li>
              <li><a href="#servicos" className="transition-colors hover:text-[#00F0FF]">{t('footer.services.items.1')}</a></li>
              <li><a href="#servicos" className="transition-colors hover:text-[#00F0FF]">{t('footer.services.items.2')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">{t('footer.materials.title')}</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#materiais" className="transition-colors hover:text-[#00F0FF]">{t('footer.materials.items.0')}</a></li>
              <li><a href="#materiais" className="transition-colors hover:text-[#00F0FF]">{t('footer.materials.items.1')}</a></li>
              <li><a href="#materiais" className="transition-colors hover:text-[#00F0FF]">{t('footer.materials.items.2')}</a></li>
              <li><a href="#materiais" className="transition-colors hover:text-[#00F0FF]">{t('footer.materials.items.3')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">{t('footer.contact.title')}</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00F0FF]/15 bg-[#1A1A1A]">
                  <Mail className="h-4 w-4 text-[#00F0FF]" />
                </div>
                <span>contato@aditivemaintenance.com.br</span>
              </li>
              <li>
                <a href="https://wa.me/5585997629938" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00F0FF]/15 bg-[#1A1A1A]">
                    <Phone className="h-4 w-4 text-emerald-500" />
                  </div>
                  <span>(85) 99762-9938</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00F0FF]/15 bg-[#1A1A1A]">
                  <MapPin className="h-4 w-4 text-[#00F0FF]" />
                </div>
                <span>{t('footer.contact.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 px-2 pt-8 text-xs text-slate-400 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Blue Printing 3D. {t('footer.copyright')}</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span>{t('footer.status')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
