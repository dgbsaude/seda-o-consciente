import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COURSE_INFO, WHATSAPP_DEFAULT_URL } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#09152b] border border-slate-700 text-white px-3.5 py-2 rounded-2xl shadow-xl animate-in fade-in slide-in-from-right-3 duration-300">
          <div className="text-xs">
            <span className="font-bold text-amber-400 block">Dúvidas sobre vagas?</span>
            <span className="text-slate-300">Fale no WhatsApp oficial</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar dica"
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button with pulsing ping */}
      <a
        id="floating-whatsapp-btn"
        href={WHATSAPP_DEFAULT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com o Coordenador"
        className="relative group w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-all transform hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-white relative z-10" />
      </a>
    </div>
  );
};
