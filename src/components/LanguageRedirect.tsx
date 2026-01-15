'use client'
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageRedirect() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) return;

    const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';

    if (!pathname.startsWith(`/${browserLang}`)) {
      router.replace(`/${browserLang}${pathname}`);
      localStorage.setItem('lang', browserLang);
    }
  }, []);

  return null;
}
