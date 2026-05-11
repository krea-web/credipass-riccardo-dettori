import type { Locale } from '../config/i18n';
import { DEFAULT_LOCALE, TRANSLATED_LOCALES } from '../config/i18n';

import it from '../i18n/it.json';
import en from '../i18n/en.json';

// Strongly-typed translation tree (derived from the canonical IT file).
export type Translation = typeof it;

const dictionaries: Partial<Record<Locale, Translation>> = {
  it: it as Translation,
  en: en as unknown as Translation,
};

/**
 * Returns the dictionary for the requested locale. Falls back to IT when the
 * requested locale is not yet translated. The fallback strategy ensures every
 * route renders content even before professional translations land.
 */
export function getDictionary(locale: Locale): Translation {
  if (TRANSLATED_LOCALES.includes(locale) && dictionaries[locale]) {
    return dictionaries[locale] as Translation;
  }
  return dictionaries[DEFAULT_LOCALE] as Translation;
}

/**
 * Whether the rendered dictionary is the fallback (used to show a discreet
 * "translation in progress" notice and to keep `lang` honest).
 */
export function isFallback(locale: Locale): boolean {
  return !TRANSLATED_LOCALES.includes(locale);
}
