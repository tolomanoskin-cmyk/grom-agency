import type { Metadata } from 'next'
import { GromkulatorContent } from '@/components/gromkulator/gromkulator-content'
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale
  
  const titles: Record<Locale, string> = {
    fr: 'Gromkulator — Estimez Votre Campagne',
    rs: 'Gromkulator — Procenite Vašu Kampanju',
    en: 'Gromkulator — Estimate Your Campaign',
  }
  
  const descriptions: Record<Locale, string> = {
    fr: 'Calculateur de campagne influence marketing Balkans. Configurez votre campagne en 2 minutes.',
    rs: 'Kalkulator kampanje influens marketinga na Balkanu. Konfigurišite kampanju za 2 minuta.',
    en: 'Balkans influence marketing campaign calculator. Configure your campaign in 2 minutes.',
  }
  
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://grom-agency.com/${locale}/gromkulator`,
      languages: {
        'fr-FR': 'https://grom-agency.com/fr/gromkulator',
        'sr-RS': 'https://grom-agency.com/rs/gromkulator',
        'en-US': 'https://grom-agency.com/en/gromkulator',
      },
    },
  }
}

export default function GromkulatorPage() {
  return <GromkulatorContent />
}
