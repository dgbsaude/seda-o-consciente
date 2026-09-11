import React, { useState } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { COURSE_INFO } from '../data';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [cro, setCro] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Olá Dr. Ricardo! Meu nome é ${name} (CRO: ${cro || 'Em formação'}), atuo em ${city || 'RS'}. Gostaria de garantir minha vaga para a Habilitação em Sedação Consciente em Santa Maria nos dias 28 e 29 de Setembro.`;
    const whatsappUrl = `https://wa.me/${COURSE_INFO.whatsappPhone}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0a162b] border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-950/80">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Redirecionando para o WhatsApp...</h3>
            <p className="text-slate-300 text-sm">
              Sua solicitação prioritária foi registrada. Você será atendido diretamente pelo Dr. Ricardo de Marco.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Vagas Limitadas para Prática Clínica
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Garantir Vaga / Informações
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Preencha seus dados para receber o edital completo e prosseguir com a matrícula via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr(a). Seu Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#060c18] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    CRO / Estado (ou Acadêmico)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: CRO-RS 12345"
                    value={cro}
                    onChange={(e) => setCro(e.target.value)}
                    className="w-full bg-[#060c18] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    WhatsApp com DDD
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(55) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#060c18] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Sua Cidade
                </label>
                <input
                  type="text"
                  placeholder="Ex: Santa Maria, Porto Alegre, Passo Fundo..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-[#060c18] border border-slate-700 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Prosseguir no WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Dados protegidos. Contato exclusivo para informações acadêmicas.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
