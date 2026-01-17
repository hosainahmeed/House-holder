'use client';

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { Locale } from '@/i18n/config';
import { useRouter, usePathname } from '@/i18n/routing';
import { localeNames, localeFlags } from '@/i18n/config';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const currentLocale = params.locale as Locale;

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      // Get all dynamic params except locale
      const dynamicParams = { ...params };
      delete dynamicParams.locale;

      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params: dynamicParams },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="relative inline-block">
      <select
        value={currentLocale}
        onChange={(e) => onSelectChange(e.target.value as Locale)}
        disabled={isPending}
        className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {Object.entries(localeNames).map(([locale, name]) => (
          <option key={locale} value={locale}>
            {localeFlags[locale as Locale]} {name}
          </option>
        ))}
      </select>
    </div>
  );
}