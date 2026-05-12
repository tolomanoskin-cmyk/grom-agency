import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Skip for static files, api routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/creators') ||
    pathname.startsWith('/documents') ||
    pathname.includes('.') // files with extensions
  ) {
    return NextResponse.next()
  }

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language')
  let detectedLocale = defaultLocale

  if (acceptLanguage) {
    const languages = acceptLanguage.split(',').map((lang) => {
      const [code] = lang.trim().split(';')
      return code.split('-')[0].toLowerCase()
    })

    for (const lang of languages) {
      if (lang === 'sr' || lang === 'rs') {
        detectedLocale = 'rs'
        break
      }
      if (isValidLocale(lang)) {
        detectedLocale = lang
        break
      }
    }
  }

  // Redirect to the locale-prefixed path
  const newUrl = new URL(`/${detectedLocale}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    // Match all paths except static files
    '/((?!_next|api|images|creators|documents|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
