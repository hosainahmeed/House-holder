import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getBrowserLanguage = () => {
  if (typeof navigator === 'undefined') return 'en';

  const langs = navigator.languages || [navigator.language];
  if (!langs) return 'en';

  if (langs.some(l => l.startsWith('fr'))) return 'fr';
  return 'en';
};
