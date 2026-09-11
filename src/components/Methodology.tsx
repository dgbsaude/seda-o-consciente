import React from 'react';
import {
  Calendar,
  Video,
  Cpu,
  Stethoscope,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { METHODOLOGY_PHASES } from '../data';

export const Methodology: React.FC = () => {
  const getPhaseIcon = (phaseNumber: number) => {
    switch (phaseNumber) {
      case 1:
        return <Video className="w-5 h-5 text-amber-400" />;
      case 2:
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 3:
        return <Stethoscope className="w-5 h-5 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="programacao" className="py-20 lg:py-24 relative overflow-hidden bg-[#050b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-extrabold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>CRONOGRAMA COMPLETO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Metodologia Híbrida Inteligente
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Estude a fundamentação teórica online no seu ritmo e venha para a prática presencial focado no atendimento e domínio do equipamento.
          </p>
        </div>

        {/* 3 Phase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-12">
          {METHODOLOGY_PHASES.map((phase) => (
            <div
              key={phase.phaseNumber}
              className="bg-[#0b162c] border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
            >
              <div className="space-y-5">
                
                {/* Phase Pill Badge */}
                <div className="inline-block">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 text-xs font-black uppercase tracking-wider">
                    {phase.badge}
                  </span>
                </div>

                {/* Phase Title with Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    {getPhaseIcon(phase.phaseNumber)}
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {phase.title}
                  </h3>
                </div>

                {/* Subtitle description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {phase.description}
                </p>

                {/* Checklist topics */}
                <ul className="space-y-3 pt-2">
                  {phase.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{topic}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Bottom tag indicator */}
              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-400">
                  {phase.phaseNumber === 1 ? 'EAD Flexível' : 'Prática Intensiva'}
                </span>
                <span className="text-amber-400 font-bold">
                  {phase.phaseNumber === 1 ? 'Pré-evento' : phase.phaseNumber === 2 ? 'Santa Maria - RS' : 'Certificação Oficial'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
