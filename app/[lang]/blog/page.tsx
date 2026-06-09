import type { Metadata } from 'next'
import { BlogContent } from '@/components/blog/blog-content'
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n'
import { blogPosts } from '@/lib/blog-data'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale

  const titles: Record<Locale, string> = {
    fr: 'Blog — Influence Marketing Balkans',
    rs: 'Blog — Influens Marketing Balkan',
    en: 'Blog — Balkan Influencer Marketing',
  }

  const descriptions: Record<Locale, string> = {
    fr: "Tout ce qu'il faut savoir sur l'influence marketing dans les Balkans : coûts, créateurs, stratégie et méthode. Le blog de Grom Agency.",
    rs: 'Sve što treba da znate o influens marketingu na Balkanu: troškovi, kreatori, strategija i metod. Blog Grom Agency.',
    en: 'Everything you need to know about influencer marketing in the Balkans: costs, creators, strategy and method. The Grom Agency blog.',
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://grom-agency.com/${locale}/blog`,
      languages: {
        'fr-FR': 'https://grom-agency.com/fr/blog',
        'sr-RS': 'https://grom-agency.com/rs/blog',
        'en-US': 'https://grom-agency.com/en/blog',
      },
    },
  }
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Grom Agency Blog',
    url: `https://grom-agency.com/${locale}/blog`,
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title[locale],
      description: post.excerpt[locale],
      datePublished: post.date,
      url: `https://grom-agency.com/${locale}/blog/${post.slug}`,
      author: { '@type': 'Organization', name: 'Grom Agency' },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogContent />
    </>
  )
}
