import React from 'react';
import { Building2, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const InstitutionalBar: React.FC = () => {
  return (
    <section className="relative z-20 border-y border-slate-800/80 bg-[#071325]/90 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Left: Quality & Institutional Endorsement */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 block">
              RESPALDO INSTITUCIONAL & QUALIDADE
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Chancela Oficial para Exercício Profissional
            </h3>
          </div>

          {/* Right: Institutional Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
            
            {/* FACOP Card */}
            <div className="flex items-center gap-3.5 bg-[#0c1a32] border border-slate-700/80 hover:border-slate-600 px-4 py-3 rounded-xl shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  CERTIFICADO PELA
                </span>
                <span className="text-sm font-black text-white block">
                  FACOP
                </span>
                <span className="text-[11px] text-slate-300 block">
                  Faculdade Centro Oeste Paulista
                </span>
              </div>
            </div>

            {/* MEC Card */}
            <div className="flex items-center gap-3.5 bg-[#0c1a32] border border-slate-700/80 hover:border-slate-600 px-4 py-3 rounded-xl shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  RECONHECIDO POR
                </span>
                <span className="text-sm font-black text-white block">
                  MEC
                </span>
                <span className="text-[11px] text-slate-300 block">
                  Ministério da Educação
                </span>
              </div>
            </div>

            {/* CFO / CRO Compliance */}
            <div className="hidden lg:flex items-center gap-3 bg-[#0c1a32] border border-slate-700/80 px-4 py-3 rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  HABILITAÇÃO CFO
                </span>
                <span className="text-xs font-black text-white block">
                  Resolução Vigente
                </span>
                <span className="text-[11px] text-slate-300 block">
                  Registro nos CROs
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
