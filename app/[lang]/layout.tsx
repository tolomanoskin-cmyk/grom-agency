import type { Metadata } from 'next'
import { locales, type Locale, isValidLocale, defaultLocale } from '@/lib/i18n'
import { LanguageProvider } from '@/components/language-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

interface Props {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale
  
  const titles: Record<Locale, string> = {
    fr: 'Grom Agency — Influence Marketing Balkans',
    rs: 'Grom Agency — Influens Marketing Balkan',
    en: 'Grom Agency — Influence Marketing Balkans',
  }
  
  const descriptions: Record<Locale, string> = {
    fr: 'Grom Agency connecte les marques françaises aux créateurs de contenu balkaniques les plus influents.',
    rs: 'Grom Agency povezuje francuske brendove sa najuticajnijim balkanskim kreatorima sadržaja.',
    en: 'Grom Agency connects French brands with the most influential Balkan content creators.',
  }
  
  const langMap: Record<Locale, string> = { fr: 'fr_FR', rs: 'sr_RS', en: 'en_US' }
  
  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://grom-agency.com/${locale}`,
      languages: {
        'fr-FR': 'https://grom-agency.com/fr',
        'sr-RS': 'https://grom-agency.com/rs',
        'en-US': 'https://grom-agency.com/en',
      },
    },
    openGraph: {
      locale: langMap[locale],
      alternateLocale: Object.values(langMap).filter(l => l !== langMap[locale]),
    },
  }
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params
  
  if (!isValidLocale(lang)) {
    notFound()
  }

  return (
    <LanguageProvider initialLocale={lang}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  )
}
