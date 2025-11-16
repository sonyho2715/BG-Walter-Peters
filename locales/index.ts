import { Language, Translations } from '@/types';
import { en } from './en';
import { vi } from './vi';

export const translations: Record<Language, Translations> = {
  en,
  vi,
};

export function getTranslations(language: Language): Translations {
  return translations[language] || translations.en;
}
