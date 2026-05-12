export const locales = ['fr', 'rs', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  rs: 'Srpski',
  en: 'English',
}

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  rs: '🇷🇸',
  en: '🇬🇧',
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
