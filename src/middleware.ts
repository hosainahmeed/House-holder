import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Auth routes that should include locale
    '/((?!_next|_vercel|.*\\..*).*)',
    '/login(.*)',
    '/register(.*)',
    '/forgot-password(.*)',
    '/reset-password(.*)',
    
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|fr)/:path*',
    
    // Catch-all for other routes that should include locale
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};