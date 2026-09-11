import React from 'react';
import {
  UserCheck,
  FlaskConical,
  ShieldCheck,
  Award,
  ChevronDown,
  MessageCircle,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { ADVANTAGES, WHATSAPP_DEFAULT_URL } from '../data';

export const Advantages: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'pratico':
        return <UserCheck className="w-6 h-6 text-amber-400" />;
      case 'cientifico':
        return <FlaskConical className="w-6 h-6 text-amber-400" />;
      case 'seguranca':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'certificacao':
        return <Award className="w-6 h-6 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="vantagens" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background ambient decorative light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-extrabold uppercase tracking-widest">
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            <span>VANTAGENS DO CURSO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Por que realizar a sua Habilitação Conosco?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            O método prepara o cirurgião-dentista para dominar a técnica de sedação inalatória com segurança absoluta, elevando a percepção de valor do seu consultório.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.id}
              className="bg-[#0b162c] border border-slate-800/90 hover:border-slate-700/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-500/20 transition-all">
                  {getIcon(adv.id)}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  {adv.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Padrão de Excelência</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Box below cards */}
        <div className="mt-12 bg-gradient-to-r from-[#09172f] via-[#0d2142] to-[#09172f] border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center justify-center lg:justify-start gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
              Quer saber se sua clínica já possui o espaço ideal?
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Nossa equipe orienta passo a passo sobre a instalação de cilindros e equipamentos portáteis.
            </p>
          </div>

          <div className="shrink-0">
            <a
              id="callout-whatsapp-cta"
              href={WHATSAPP_DEFAULT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Tirar Dúvidas com Coordenador</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
