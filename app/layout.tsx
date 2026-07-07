import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

import { ThemeProvider } from 'next-themes'
import { GradientBackground } from '@/components/gradient-background'
import { FloatingCTA } from '@/components/floating-cta'
import { JsonLd } from '@/components/json-ld'
import { LanguageProvider } from '@/components/language-provider'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://grom-agency.com'),
  title: {
    default: 'Grom Agency | Agence n°1 Influence Marketing France-Balkans',
    template: '%s | Grom Agency'
  },
  description: 'Grom Agency, l\'agence n°1 qui connecte les marques françaises aux créateurs de contenu des Balkans. Développez votre marque en Serbie, Croatie, Bosnie et Monténégro avec les meilleurs influenceurs. Bureaux à Paris & Belgrade.',
  keywords: [
    'agence influence marketing balkans',
    'marques françaises balkans',
    'développement balkans',
    'influenceur serbie',
    'influencer serbia',
    'kreatori sadržaja srbija',
    'agence n°1 balkans',
    'expansion marque balkans',
    'créateurs contenu balkans',
    'instagram marketing serbia',
    'tiktok marketing balkans',
    'belgrade paris',
    'serbia croatia bosnia montenegro',
    'french brands balkans',
    'balkan influencers'
  ],
  authors: [{ name: 'Grom Agency', url: 'https://grom-agency.com' }],
  creator: 'Grom Agency',
  publisher: 'Grom Agency',
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://grom-agency.com',
    languages: {
      'fr-FR': 'https://grom-agency.com/fr',
      'sr-RS': 'https://grom-agency.com/rs',
      'en-US': 'https://grom-agency.com/en',
    },
  },
  openGraph: {
    title: 'Grom Agency | Agence n°1 Influence Marketing France-Balkans',
    description: 'L\'agence qui connecte les marques françaises aux meilleurs créateurs des Balkans. Développez votre présence en Serbie, Croatie, Bosnie, Monténégro.',
    url: 'https://grom-agency.com',
    siteName: 'Grom Agency',
    locale: 'fr_FR',
    alternateLocale: ['sr_RS', 'en_US'],
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grom Agency — Agence n°1 Influence Marketing France-Balkans',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grom Agency | Agence n°1 Influence Marketing France-Balkans',
    description: 'L\'agence qui connecte les marques françaises aux meilleurs créateurs des Balkans. Paris & Belgrade.',
    images: ['/images/og-image.png'],
    creator: '@grom_agency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <GradientBackground />
            {children}
            <FloatingCTA />
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3RE1V6Y350"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RE1V6Y350');
          `}
        </Script>
      </body>
    </html>
  )
}
