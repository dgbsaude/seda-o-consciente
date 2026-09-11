import { CourseDetails, FaqItem, PhaseItem } from './types';

export const COURSE_INFO: CourseDetails = {
  city: 'Santa Maria',
  state: 'RS',
  dates: '28 e 29 de Setembro',
  whatsappPhone: '5555996934540',
  whatsappDisplay: '(55) 99693-4540',
  coordinatorPhoneDisplay: '(55) 99693-4540',
  instagramHandle: '@dr.ricardodemarco',
  instagramUrl: 'https://instagram.com/dr.ricardodemarco',
};

export const WHATSAPP_DEFAULT_URL = `https://wa.me/${COURSE_INFO.whatsappPhone}?text=${encodeURIComponent(
  'Olá! Gostaria de mais informações e garantir minha vaga no Curso de Habilitação em Sedação Consciente com Óxido Nitroso em Santa Maria - RS.'
)}`;

export const ADVANTAGES = [
  {
    id: 'pratico',
    title: 'Aprendizado Teórico e Prático',
    description:
      'Vivência clínica com pacientes reais e simulações com modernos misturadores de sedação inalatória, permitindo segurança logo após a conclusão.',
    icon: 'user-check',
  },
  {
    id: 'cientifico',
    title: 'Atualização Científica',
    description:
      'Baseado nas diretrizes internacionais mais recentes da ADA e normas vigentes do CFO, garantindo condutas embasadas cientificamente.',
    icon: 'flask-conical',
  },
  {
    id: 'seguranca',
    title: 'Segurança e Protocolos',
    description:
      'Controle rigoroso de oximetria, pressão arterial, monitorização contínua e gerenciamento de intercorrências odontológicas.',
    icon: 'shield-check',
  },
  {
    id: 'certificacao',
    title: 'Certificação Reconhecida',
    description:
      'Certificado emitido pela FACOP e com reconhecimento MEC, apto para habilitação e registro junto aos Conselhos Regionais (CRO/CFO).',
    icon: 'award',
  },
];

export const METHODOLOGY_PHASES: PhaseItem[] = [
  {
    phaseNumber: 1,
    badge: 'FASE 1 • MÓDULO ONLINE',
    title: 'Fundamentação & Fisiologia',
    description: 'Conteúdo gravado e materiais complementares acessados previamente:',
    topics: [
      'Fisiologia respiratória e cardiovascular aplicada.',
      'Mecanismos de ação do Óxido Nitroso e farmacodinâmica.',
      'Legislação, normas CFO e documentação do paciente.',
    ],
  },
  {
    phaseNumber: 2,
    badge: 'FASE 2 • 28/09 (SÁBADO PRESENCIAL)',
    title: 'Tecnologia & Hands-On',
    description: 'Imersão em Santa Maria - RS com foco prático nos equipamentos:',
    topics: [
      'Montagem, calibração e checagem de cilindros e misturadores.',
      'Treinamento de titulação passo a passo entre os profissionais.',
      'Simulação prática de suporte básico e emergências.',
    ],
  },
  {
    phaseNumber: 3,
    badge: 'FASE 3 • 29/09 (DOMINGO PRESENCIAL)',
    title: 'Atendimento Clínico Real',
    description: 'Prática clínica supervisionada e certificação:',
    topics: [
      'Atendimento supervisionado de pacientes sob sedação consciente.',
      'Controle de náusea, ansiedade, tempo de recuperação e alta.',
      'Precificação, marketing ético e entrega dos certificados.',
    ],
  },
];

export const INCLUSIONS = [
  {
    title: 'Certificado FACOP Reconhecido pelo MEC',
    description: 'Válido para requisição de habilitação profissional conforme resolução CFO.',
  },
  {
    title: 'Apostila Completa & Protocolos de Emergência',
    description: 'Modelos de prontuários, termos de consentimento e checklists operacionais.',
  },
  {
    title: 'Prática Clínica com Todo Equipamento e Gás Fornecido',
    description: 'Você não precisa levar nenhum insumo químico ou aparelho para a aula prática.',
  },
  {
    title: 'Coffee Break Completo e Networking Clínico',
    description: 'Momentos dedicados para troca de contatos e experiências profissionais.',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: '1. Quem pode realizar o curso de sedação com óxido nitroso?',
    answer:
      'O curso é destinado a Cirurgiões-Dentistas graduados devidamente inscritos no Conselho Regional de Odontologia (CRO) e acadêmicos do último semestre do curso de Odontologia.',
  },
  {
    question: '2. O curso confere a habilitação oficial exigida pelo CFO?',
    answer:
      'Sim! O curso é chancelado pela FACOP (Faculdade do Centro Oeste Paulista) e reconhecido pelo MEC, cumprindo rigorosamente a carga horária e a proporção teórico-prática exigidas pela resolução do Conselho Federal de Odontologia.',
  },
  {
    question: '3. Qual é a vantagem de oferecer sedação consciente no consultório?',
    answer:
      'A sedação por óxido nitroso reduz o medo e a ansiedade, mantendo os reflexos protetores e o paciente responsivo aos comandos verbais. Isso permite fechar mais planos de tratamento em pacientes fóbicos, crianças, idosos e realizar procedimentos cirúrgicos com maior tranquilidade.',
  },
  {
    question: '4. Como funciona o formato híbrido?',
    answer:
      'Você assiste ao conteúdo teórico na plataforma online com flexibilidade antes dos dias presenciais. Nos dias 28 e 29 de Setembro em Santa Maria - RS, nos dedicamos à prática intensiva com os equipamentos, manuseio e prática clínica em pacientes.',
  },
];
