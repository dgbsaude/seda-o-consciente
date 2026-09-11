export interface CourseDetails {
  city: string;
  state: string;
  dates: string;
  whatsappPhone: string;
  whatsappDisplay: string;
  coordinatorPhoneDisplay: string;
  instagramHandle: string;
  instagramUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PhaseItem {
  phaseNumber: number;
  badge: string;
  title: string;
  description: string;
  topics: string[];
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
