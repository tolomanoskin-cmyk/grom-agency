import type { Metadata } from 'next'
import { MarquesContent } from '@/components/marques/marques-content'
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale
  
  const titles: Record<Locale, string> = {
    fr: 'Implantez Votre Marque dans les Balkans',
    rs: 'Uvedite Vaš Brend na Balkan',
    en: 'Expand Your Brand to the Balkans',
  }
  
  const descriptions: Record<Locale, string> = {
    fr: 'Marché de 20M de consommateurs. Zéro concurrent français sérieux. Grom Agency implante votre marque.',
    rs: 'Tržište od 20M potrošača. Nula ozbiljnih francuskih konkurenata. Grom Agency uvodi vaš brend.',
    en: 'Market of 20M consumers. Zero serious French competitors. Grom Agency expands your brand.',
  }
  
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://grom-agency.com/${locale}/marques`,
      languages: {
        'fr-FR': 'https://grom-agency.com/fr/marques',
        'sr-RS': 'https://grom-agency.com/rs/marques',
        'en-US': 'https://grom-agency.com/en/marques',
      },
    },
  }
}

export default function MarquesPage() {
  return <MarquesContent />
}
