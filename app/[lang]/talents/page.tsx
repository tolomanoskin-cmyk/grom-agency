import type { Metadata } from 'next'
import { TalentsContent } from '@/components/talents/talents-content'
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale
  
  const titles: Record<Locale, string> = {
    fr: 'Nos Créateurs Balkaniques — Influenceurs Serbie, Croatie, Bosnie',
    rs: 'Naši Kreatori — Influenseri Srbija, Hrvatska, Bosna',
    en: 'Our Balkan Creators — Influencers Serbia, Croatia, Bosnia',
  }
  
  const descriptions: Record<Locale, string> = {
    fr: 'Découvrez nos créateurs de contenu balkaniques sélectionnés pour leur authenticité et impact.',
    rs: 'Otkrijte naše balkanske kreatore sadržaja izabrane zbog autentičnosti i uticaja.',
    en: 'Discover our Balkan content creators selected for their authenticity and impact.',
  }
  
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://grom-agency.com/${locale}/talents`,
      languages: {
        'fr-FR': 'https://grom-agency.com/fr/talents',
        'sr-RS': 'https://grom-agency.com/rs/talents',
        'en-US': 'https://grom-agency.com/en/talents',
      },
    },
  }
}

export default function TalentsPage() {
  return <TalentsContent />
}
