import type { Metadata } from 'next'
import { CreateursContent } from '@/components/createurs/createurs-content'
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale
  
  const titles: Record<Locale, string> = {
    fr: 'Rejoins le Réseau Grom — Tu crées, on gère',
    rs: 'Pridruži se Grom Mreži — Ti stvaraš, mi upravljamo',
    en: 'Join the Grom Network — You create, we manage',
  }
  
  const descriptions: Record<Locale, string> = {
    fr: 'Accède à des marques françaises prêtes à collaborer.',
    rs: 'Dobij pristup francuskim brendovima spremnim za saradnju.',
    en: 'Access French brands ready to collaborate.',
  }
  
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://grom-agency.com/${locale}/createurs`,
      languages: {
        'fr-FR': 'https://grom-agency.com/fr/createurs',
        'sr-RS': 'https://grom-agency.com/rs/createurs',
        'en-US': 'https://grom-agency.com/en/createurs',
      },
    },
  }
}

export default function CreateursPage() {
  return <CreateursContent />
}
