export const SITE_URL = 'https://www.riccardodettori.it';

export const LOCALES = ['it', 'en', 'de', 'fr', 'es', 'pt', 'ar', 'zh', 'ru', 'ja'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'it';

export const RTL_LOCALES: Locale[] = ['ar'];

export const LOCALE_LABELS: Record<Locale, { label: string; native: string; flag: string }> = {
  it: { label: 'Italian',    native: 'Italiano',   flag: '🇮🇹' },
  en: { label: 'English',    native: 'English',    flag: '🇬🇧' },
  de: { label: 'German',     native: 'Deutsch',    flag: '🇩🇪' },
  fr: { label: 'French',     native: 'Français',   flag: '🇫🇷' },
  es: { label: 'Spanish',    native: 'Español',    flag: '🇪🇸' },
  pt: { label: 'Portuguese', native: 'Português',  flag: '🇵🇹' },
  ar: { label: 'Arabic',     native: 'العربية',     flag: '🇸🇦' },
  zh: { label: 'Chinese',    native: '中文',        flag: '🇨🇳' },
  ru: { label: 'Russian',    native: 'Русский',    flag: '🇷🇺' },
  ja: { label: 'Japanese',   native: '日本語',      flag: '🇯🇵' },
};

// Locales whose translation file is fully populated. Others fall back to IT copy at runtime.
export const TRANSLATED_LOCALES: Locale[] = ['it', 'en'];

export function isRTL(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

export function localePath(locale: Locale, path: string = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}
