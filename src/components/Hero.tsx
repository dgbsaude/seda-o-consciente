import React from 'react';
import {
  MapPin,
  Calendar,
  Users,
  MessageCircle,
  ArrowRight,
  Info,
  Star,
  Monitor,
  CheckCircle2,
  Award,
  ShieldCheck,
  Building2,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { COURSE_INFO, WHATSAPP_DEFAULT_URL } from '../data';
import sedationImage from '../assets/images/sedacao_consciente_1789153780265.jpg';

export const Hero: React.FC = () => {
  const scrollToDetails = () => {
    const target = document.querySelector('#vantagens');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="relative pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner backdrop-blur-sm">
              <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <Monitor className="w-3 h-3" />
              </span>
              <span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
                CURSO HÍBRIDO • PRESENCIAL + ONLINE
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                SEDAÇÃO{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  CONSCIENTE
                </span>
              </h1>
              
              {/* Pill badge: COM ÓXIDO NITROSO */}
              <div className="inline-block mt-2">
                <span className="inline-flex items-center px-4 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 text-white font-bold text-sm sm:text-base tracking-widest uppercase shadow-sm">
                  COM ÓXIDO NITROSO
                </span>
              </div>
            </div>

            {/* Sub-headline */}
            <h2 className="text-base sm:text-lg font-bold text-slate-200 tracking-wide uppercase leading-snug">
              SEGURANÇA, CONFORTO E EXCELÊNCIA NA PRÁTICA ODONTOLÓGICA.
            </h2>

            {/* Description paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Capacite-se para proporcionar procedimentos sem dor, sem fobia e aumente a conversão de casos complexos em seu consultório.
            </p>

            {/* Info Cards Triad (Cidade, Data, Vagas) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {/* Card 1: Cidade */}
              <div className="bg-[#0b162c]/90 border border-slate-800/90 hover:border-slate-700 rounded-xl p-3.5 flex items-center gap-3 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                    CIDADE
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white tracking-tight">
                    SANTA MARIA - RS
                  </span>
                </div>
              </div>

              {/* Card 2: Data */}
              <div className="bg-[#0b162c]/90 border border-slate-800/90 hover:border-slate-700 rounded-xl p-3.5 flex items-center gap-3 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                    DATA
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-white tracking-tight">
                    28 E 29 SETEMBRO
                  </span>
                </div>
              </div>

              {/* Card 3: Vagas */}
              <div className="bg-[#0b162c]/90 border border-slate-800/90 hover:border-slate-700 rounded-xl p-3.5 flex items-center gap-3 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                    VAGAS
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-emerald-400 tracking-tight flex items-center gap-1">
                    TURMA LIMITADA
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3 items-stretch sm:items-center">
              {/* Primary WhatsApp Button */}
              <a
                id="hero-whatsapp-cta"
                href={WHATSAPP_DEFAULT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-1 sm:flex-initial flex items-center justify-between gap-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold px-6 py-4 rounded-xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-950/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] tracking-wider uppercase opacity-80 font-bold">
                      INSCRIÇÃO IMEDIATA
                    </span>
                    <span className="text-xs sm:text-sm tracking-wide font-black uppercase">
                      GARANTIR MINHA VAGA NO WHATSAPP
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary Details Button */}
              <button
                id="hero-details-cta"
                onClick={scrollToDetails}
                className="flex items-center justify-center gap-2 bg-[#0c182e] hover:bg-[#132442] border border-slate-700/80 text-slate-200 hover:text-white font-bold px-6 py-4 rounded-xl text-xs sm:text-sm tracking-wide transition-colors"
              >
                <Info className="w-4 h-4 text-amber-400" />
                <span>Ver Detalhes do Curso</span>
              </button>
            </div>

            {/* Social Proof / Legal Trust Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-300">
                Habilitação Odontológica com respaldo legal do CFO e MEC
              </span>
            </div>
          </div>

          {/* Right Column: Exact Flyer Card Replica */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md group">
              
              {/* Top Floating Badge */}
              <div className="absolute -top-3.5 right-6 z-20 flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold px-3.5 py-1 rounded-full text-xs shadow-lg uppercase tracking-wide border border-amber-300/40">
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                <Award className="w-3.5 h-3.5" />
                <span>CERTIFICAÇÃO MEC / FACOP</span>
              </div>

              {/* Main Card Container */}
              <div className="w-full bg-[#081326] border-2 border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/60 transition-transform duration-300 group-hover:scale-[1.01]">
                
                {/* Visual Header / Patient Sedation Image with Badges */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={sedationImage}
                    alt="Paciente em atendimento com sedação consciente inalatória e máscara nasal"
                    className="w-full h-full object-cover object-center brightness-95 filter contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081326] via-[#081326]/40 to-transparent" />
                  
                  {/* Floating Content over Image */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      SEDAÇÃO CONSCIENTE
                    </div>
                  </div>

                  {/* Caption on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="bg-[#0b1933]/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/70">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block">
                            COM ÓXIDO NITROSO
                          </span>
                          <h3 className="text-xs font-bold text-white uppercase leading-tight">
                            SEGURANÇA, CONFORTO E EXCELÊNCIA
                          </h3>
                        </div>
                        <span className="text-[11px] font-black bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                          CFO / MEC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body & Specs */}
                <div className="p-5 space-y-4">
                  {/* Hybrid Tag */}
                  <div className="flex items-center justify-center">
                    <span className="px-4 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-amber-400 text-xs font-extrabold tracking-wider uppercase">
                      CURSO HÍBRIDO • PRESENCIAL + ONLINE
                    </span>
                  </div>

                  {/* Info Strip (Santa Maria / Data / Inscreva-se) */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold">
                    <div className="bg-[#0d1c37] border border-slate-800 p-2 rounded-lg">
                      <span className="block text-slate-400 text-[9px] uppercase font-semibold">Local</span>
                      <span className="text-white text-xs font-bold">SANTA MARIA - RS</span>
                    </div>
                    <div className="bg-[#0d1c37] border border-slate-800 p-2 rounded-lg">
                      <span className="block text-slate-400 text-[9px] uppercase font-semibold">Data</span>
                      <span className="text-amber-400 text-xs font-bold">28 e 29 SET</span>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/30 p-2 rounded-lg">
                      <span className="block text-amber-400 text-[9px] uppercase font-semibold">Vagas</span>
                      <span className="text-amber-300 text-xs font-bold">LIMITADAS</span>
                    </div>
                  </div>

                  {/* Bullet Highlights from flyer */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block text-center">
                      Vantagens da Formação
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Prática Teórica e Real</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Atualização Científica</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Protocolos Seguros</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Certificado Oficial</span>
                      </div>
                    </div>
                  </div>

                  {/* Institutional Seals Row */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-around gap-2 text-center">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] block text-slate-400 font-bold uppercase">CERTIFICADO PELA</span>
                        <span className="text-xs font-extrabold text-white">FACOP</span>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-slate-800" />
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] block text-slate-400 font-bold uppercase">RECONHECIDO POR</span>
                        <span className="text-xs font-extrabold text-white">MEC</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer Ribbon */}
                  <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-xl p-2.5 text-center border border-slate-700/60">
                    <span className="text-[11px] font-bold text-amber-300 block uppercase tracking-wider">
                      HABILITAÇÃO COMPLETA
                    </span>
                    <span className="text-[10px] text-slate-300 block">
                      Protocolo Seguro & Não Invasivo • Teórico + Prático
                    </span>
                    <div className="mt-1 flex items-center justify-center gap-1.5 text-slate-300 text-xs font-bold">
                      <PhoneCall className="w-3 h-3 text-amber-400" />
                      <span>{COURSE_INFO.whatsappDisplay}</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
