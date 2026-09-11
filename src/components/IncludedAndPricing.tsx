import React from 'react';
import {
  PackageCheck,
  CheckCircle2,
  Lock,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Users
} from 'lucide-react';
import { INCLUSIONS, COURSE_INFO, WHATSAPP_DEFAULT_URL } from '../data';

export const IncludedAndPricing: React.FC = () => {
  return (
    <section id="inscricao" className="py-20 lg:py-24 relative overflow-hidden bg-[#060e1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Inclusions List */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-extrabold uppercase tracking-widest">
              <PackageCheck className="w-3.5 h-3.5" />
              <span>INSCRIÇÃO & ESTRUTURA</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tudo o que está Incluso na sua Formação
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Ao se inscrever no curso de Sedação Consciente com Óxido Nitroso em Santa Maria - RS, você recebe o pacote completo de qualificação:
            </p>

            {/* Inclusions List */}
            <div className="space-y-4 pt-2">
              {INCLUSIONS.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0a172e] border border-slate-800/90 hover:border-slate-700 rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all duration-200 hover:bg-[#0e1f3d]"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 fill-amber-400/20 text-amber-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Registration Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700 bg-[#0a162b] shadow-2xl shadow-blue-950/60">
              
              {/* Card Header Top Ribbon */}
              <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-6 py-3 text-center text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-inner">
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>ÚLTIMAS VAGAS DISPONÍVEIS • TURMA EXCLUSIVA</span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Title & City */}
                <div className="text-center space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block">
                    EDIÇÃO PRESENCIAL ESPECIAL
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    SANTA MARIA - RS
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-sm pt-1">
                    <Calendar className="w-4 h-4" />
                    <span>28 e 29 de Setembro</span>
                  </div>
                </div>

                <div className="h-px bg-slate-800 w-full" />

                {/* Specs List */}
                <div className="space-y-3.5 text-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/70">
                    <span className="text-slate-400 font-medium">Modalidade:</span>
                    <span className="text-white font-bold text-right">Híbrido (Online + Prática)</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/70">
                    <span className="text-slate-400 font-medium">Certificação:</span>
                    <span className="text-amber-400 font-bold text-right">FACOP / Reconhecido MEC</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/70">
                    <span className="text-slate-400 font-medium">Público-alvo:</span>
                    <span className="text-white font-bold text-right">Cirurgiões-Dentistas</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Atendimento Direto:</span>
                    <span className="text-emerald-400 font-bold text-right">Via WhatsApp Oficial</span>
                  </div>
                </div>

                {/* Big WhatsApp CTA Button */}
                <div className="pt-2">
                  <a
                    id="checkout-whatsapp-btn"
                    href={WHATSAPP_DEFAULT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black py-4 px-6 rounded-2xl text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-white" />
                    <span>CONVERSAR COM COORDENADOR</span>
                  </a>
                </div>

                {/* Bottom lock text */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 text-center">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Atendimento imediato pelo número {COURSE_INFO.whatsappDisplay}</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
