import React from 'react';
import { Box, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden border-t border-white/50 bg-slate-100/80 px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[2rem] border border-white/65 bg-white/74 p-8 shadow-[0_22px_64px_rgba(15,23,42,0.08)] backdrop-blur-xl md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-400 text-white shadow-[0_14px_30px_rgba(2,132,199,0.24)]">
                <Box className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Blue Printing 3D</p>
                <span className="text-lg font-bold text-slate-950">Aditive Maintenance</span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-7 text-slate-600">{t('footer.desc')}</p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/blue-layer-3d/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition-colors hover:text-brand-600" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/bluelayer3d?igsh=c2JnajBscDMxY3hn&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition-colors hover:text-brand-600" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-900">{t('footer.services.title')}</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#servicos" className="transition-colors hover:text-brand-700">{t('footer.services.items.0')}</a></li>
              <li><a href="#servicos" className="transition-colors hover:text-brand-700">{t('footer.services.items.1')}</a></li>
              <li><a href="#servicos" className="transition-colors hover:text-brand-700">{t('footer.services.items.2')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-900">{t('footer.materials.title')}</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#materiais" className="transition-colors hover:text-brand-700">{t('footer.materials.items.0')}</a></li>
              <li><a href="#materiais" className="transition-colors hover:text-brand-700">{t('footer.materials.items.1')}</a></li>
              <li><a href="#materiais" className="transition-colors hover:text-brand-700">{t('footer.materials.items.2')}</a></li>
              <li><a href="#materiais" className="transition-colors hover:text-brand-700">{t('footer.materials.items.3')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-900">{t('footer.contact.title')}</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                  <Mail className="h-4 w-4 text-brand-600" />
                </div>
                <span>contato@aditivemaintenance.com.br</span>
              </li>
              <li>
                <a href="https://wa.me/5585997629938" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                    <Phone className="h-4 w-4 text-emerald-500" />
                  </div>
                  <span>(85) 99762-9938</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white">
                  <MapPin className="h-4 w-4 text-brand-600" />
                </div>
                <span>{t('footer.contact.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 px-2 pt-8 text-xs text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Blue Printing 3D. {t('footer.copyright')}</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>{t('footer.status')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
