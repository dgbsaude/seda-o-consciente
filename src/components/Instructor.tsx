import React from 'react';
import {
  Stethoscope,
  CheckCircle2,
  Instagram,
  Award,
  ShieldCheck,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { COURSE_INFO } from '../data';

export const Instructor: React.FC = () => {
  const credentials = [
    'Experiência clínica consolidada',
    'Didática simplificada e prática',
    'Orientação para compra de insumos',
    'Suporte técnico pós-curso',
  ];

  return (
    <section id="coordenacao" className="py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#09152b] border border-slate-800/90 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          {/* Left Column: Bio & Features */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-extrabold uppercase tracking-widest">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>COORDENAÇÃO & MINISTRAÇÃO</span>
            </div>

            {/* Title / Coordinator Name */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Dr. Ricardo de Marco
              </h2>
              <p className="text-amber-400 text-sm font-bold uppercase tracking-wider">
                Cirurgião-Dentista • Especialista e Habilitado em Sedação Inalatória
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Referência em odontologia de alta performance, o <strong className="text-white font-bold">Dr. Ricardo de Marco</strong> lidera uma metodologia de ensino dinâmica, focada em transformar a rotina do consultório através do conforto extremo para pacientes fóbicos ou com histórico de ansiedade.
            </p>

            {/* 4 Feature Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Instagram Link Button */}
            <div className="pt-4">
              <a
                id="instructor-instagram-link"
                href={COURSE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0d1c37] hover:bg-[#13284f] border border-slate-700/80 text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:border-amber-400/50 group"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 font-medium">Siga no Instagram</span>
                  <span className="text-xs sm:text-sm font-bold text-amber-300 group-hover:text-amber-200">
                    {COURSE_INFO.instagramHandle}
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Poster Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-slate-700/80 bg-[#071120] shadow-xl group">
              
              {/* Image banner */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80"
                  alt="Clínica Odontológica Moderna e Sedação"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent" />
                
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40 text-[10px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  MÉTODO EXCLUSIVO
                </div>
              </div>

              {/* Card info */}
              <div className="p-5 space-y-4">
                <div className="text-center space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    HABILITAÇÃO EM SEDAÇÃO CONSCIENTE
                  </span>
                  <h4 className="text-lg font-black text-white">
                    ÓXIDO NITROSO • SANTA MARIA - RS
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="bg-[#0c1a32] border border-slate-800 p-2 rounded-lg">
                    <span className="block text-slate-400 text-[9px] uppercase font-bold">Respaldo</span>
                    <span className="text-white font-bold">CFO & MEC</span>
                  </div>
                  <div className="bg-[#0c1a32] border border-slate-800 p-2 rounded-lg">
                    <span className="block text-slate-400 text-[9px] uppercase font-bold">Chancela</span>
                    <span className="text-white font-bold">FACOP</span>
                  </div>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-center">
                  <span className="text-xs text-slate-300 block font-medium">
                    Treinamento hands-on em pacientes com os mais modernos equipamentos de sedação inalatória.
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
