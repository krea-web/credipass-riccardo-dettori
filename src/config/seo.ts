import type { Locale } from './i18n';

export const CREDIPASS_CTA_URL =
  'https://www.credipass.it/landing-broker/?tab=mutuo&user=riccardo.dettori';

export const CREDIPASS_ORIGIN = 'https://www.credipass.it';

export const CONTACT = {
  // Placeholder values — replace once provided by Riccardo.
  email: 'riccardo.dettori@credipass.it',
  phone: '[TELEFONO]',
  phoneHref: 'tel:[TELEFONO]',
  whatsappNumber: '[WHATSAPP]', // E.164 form, e.g. 393331234567
  whatsappHref: 'https://wa.me/[WHATSAPP]',
  oamNumber: '[NUMERO OAM]',
  vat: '[P.IVA]',
  officeHours: 'Lun – Ven · 9:00 – 18:00',
  city: 'Sardegna',
  region: 'Sardegna',
  country: 'IT',
};

export const SOCIAL = {
  facebook: '',
  instagram: '',
  linkedin: '',
};

export type SeoMeta = {
  title: string;
  description: string;
  ogImage?: string;
};

export const seoDefaults: Record<Locale, SeoMeta> = {
  it: {
    title: 'Riccardo Dettori | Mediatore Creditizio Credipass – Sardegna',
    description:
      'Mediatore creditizio Credipass in Sardegna. Mutui, prestiti, cessione del quinto e finanziamenti per privati e imprese. Consulenza gratuita e indipendente.',
  },
  en: {
    title: 'Riccardo Dettori | Credit Broker Credipass – Sardinia, Italy',
    description:
      'Certified credit broker in Sardinia, partner of Credipass. Mortgages, personal and business loans for residents and international clients. Free, independent advice.',
  },
  de: {
    title: 'Riccardo Dettori | Kreditmakler Credipass – Sardinien',
    description:
      'Zertifizierter Kreditmakler auf Sardinien, Partner von Credipass. Hypotheken und Finanzierungen für Privat- und Geschäftskunden.',
  },
  fr: {
    title: 'Riccardo Dettori | Courtier en crédit Credipass – Sardaigne',
    description:
      'Courtier en crédit certifié en Sardaigne, partenaire Credipass. Prêts immobiliers et financements pour particuliers et entreprises.',
  },
  es: {
    title: 'Riccardo Dettori | Mediador de Crédito Credipass – Cerdeña',
    description:
      'Mediador de crédito certificado en Cerdeña, afiliado a Credipass. Hipotecas y financiación para particulares y empresas.',
  },
  pt: {
    title: 'Riccardo Dettori | Mediador de Crédito Credipass – Sardenha',
    description:
      'Mediador de crédito certificado na Sardenha, afiliado da Credipass. Crédito habitação e financiamentos para particulares e empresas.',
  },
  ar: {
    title: 'ريكاردو ديتوري | وسيط ائتماني معتمد Credipass – سردينيا',
    description:
      'وسيط ائتماني معتمد في سردينيا، شريك Credipass. قروض الرهن العقاري والتمويل للأفراد والشركات.',
  },
  zh: {
    title: 'Riccardo Dettori | Credipass 信贷顾问 – 撒丁岛',
    description: '撒丁岛持牌信贷顾问，Credipass 合作伙伴。为个人和企业提供按揭与融资方案。',
  },
  ru: {
    title: 'Риккардо Деттори | Кредитный брокер Credipass – Сардиния',
    description:
      'Сертифицированный кредитный брокер на Сардинии, партнёр Credipass. Ипотека и кредиты для частных лиц и компаний.',
  },
  ja: {
    title: 'リッカルド・デットーリ | Credipass 認定クレジットブローカー – サルデーニャ',
    description:
      'サルデーニャ島の認定クレジットブローカー、Credipass パートナー。住宅ローン・事業融資のご相談を承ります。',
  },
};
