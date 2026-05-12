import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact/contact-content'
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale
  
  const titles: Record<Locale, string> = {
    fr: 'Contact — Belgrade & Paris',
    rs: 'Kontakt — Beograd & Pariz',
    en: 'Contact — Belgrade & Paris',
  }
  
  const descriptions: Record<Locale, string> = {
    fr: 'Une question, un projet, une idée ? Contactez Grom Agency. Réponse sous 24h.',
    rs: 'Pitanje, projekat, ideja? Kontaktirajte Grom Agency. Odgovaramo u roku od 24h.',
    en: 'A question, a project, an idea? Contact Grom Agency. Response within 24h.',
  }
  
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://grom-agency.com/${locale}/contact`,
      languages: {
        'fr-FR': 'https://grom-agency.com/fr/contact',
        'sr-RS': 'https://grom-agency.com/rs/contact',
        'en-US': 'https://grom-agency.com/en/contact',
      },
    },
  }
}

export default function ContactPage() {
  return <ContactContent />
}
