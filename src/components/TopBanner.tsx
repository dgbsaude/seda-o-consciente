import React from 'react';
import { Megaphone, Flame } from 'lucide-react';

export const TopBanner: React.FC = () => {
  return (
    <div
      id="top-banner"
      className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-2.5 px-4 text-slate-950 text-xs sm:text-sm font-bold tracking-wide shadow-md sticky top-0 z-50 border-b border-amber-600/30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <span className="flex items-center gap-1.5 bg-slate-950 text-amber-300 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider font-extrabold shrink-0">
          <Megaphone className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
          Aviso
        </span>
        <span className="font-extrabold uppercase">
          TURMA CONFIRMADA EM SANTA MARIA - RS | 28 E 29 DE SETEMBRO • VAGAS LIMITADAS PARA PRÁTICA CLÍNICA
        </span>
        <Flame className="w-4 h-4 text-amber-900 hidden md:inline-block shrink-0 fill-amber-700" />
      </div>
    </div>
  );
};
