import type { Metadata } from 'next'
import { PrivacyPolicyContent } from '@/components/privacy-policy-content'
import { defaultLocale, isValidLocale, type Locale } from '@/lib/i18n'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale
  const titles: Record<Locale, string> = {
    fr: 'Politique de confidentialité — Grom Agency',
    rs: 'Politika privatnosti — Grom Agency',
    en: 'Privacy policy — Grom Agency',
  }

  return {
    title: titles[locale],
    description: titles[locale],
    alternates: {
      canonical: `https://grom-agency.com/${locale}/politique-de-confidentialite`,
      languages: {
        'fr-FR': 'https://grom-agency.com/fr/politique-de-confidentialite',
        'sr-RS': 'https://grom-agency.com/rs/politique-de-confidentialite',
        'en-US': 'https://grom-agency.com/en/politique-de-confidentialite',
      },
    },
  }
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
