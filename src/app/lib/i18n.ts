import en from '@/messages/en.json';
import fr from '@/messages/fr.json';
export type Locale = 'en' | 'fr';
type Translations = Record<string, any>; 

const messages: Record<Locale, Translations> = { en, fr };

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let result: any = messages[locale];

  for (const k of keys) {
    if (result && k in result) {
      result = result[k];
    } else {
      return key;
    }
  }

  return typeof result === 'string' ? result : key;
}
