import React from 'react';
import {
  Phone,
  MapPin,
  Calendar,
  Building2,
  Award,
  UserCheck,
  Instagram,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { COURSE_INFO, WHATSAPP_DEFAULT_URL } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#040914] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md">
                <Award className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-white font-extrabold text-base tracking-tight uppercase block leading-none">
                  Sedação Consciente
                </span>
                <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
                  Habilitação Odontológica • CFO & MEC
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Capacitação teórico-clínica de excelência em sedação inalatória por Óxido Nitroso e Oxigênio em Odontologia. Vagas limitadas em Santa Maria - RS.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COURSE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Dr. Ricardo de Marco"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Inscrições"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Informações & Inscrições (3.5 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Informações & Inscrições
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${COURSE_INFO.whatsappPhone}`}
                  className="hover:text-amber-300 transition-colors font-medium"
                >
                  {COURSE_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Santa Maria - RS</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COURSE_INFO.dates}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Chancela Acadêmica (3.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Chancela Acadêmica
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Certificado emitido por FACOP</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Reconhecimento oficial MEC</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Coordenação: Dr. Ricardo De Marco</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 text-center sm:text-left">
          <p>© Todos os direitos reservados. Dr. Ricardo De Marco.</p>
          <p className="max-w-md text-right text-slate-300">
            Desenvolvido para divulgação profissional médica e odontológica conforme diretrizes CFO.
          </p>
        </div>
      </div>
    </footer>
  );
};
