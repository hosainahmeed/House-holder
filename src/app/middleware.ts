import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'fr'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}`)
  );

  if (pathnameHasLocale) return;

  const lang =
    request.headers.get('accept-language')?.startsWith('fr')
      ? 'fr'
      : defaultLocale;

  request.nextUrl.pathname = `/${lang}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)']
};
