import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPostContent } from '@/components/blog/blog-post-content'
import { isValidLocale, defaultLocale, locales, type Locale } from '@/lib/i18n'
import { blogPosts, getBlogPost } from '@/lib/blog-data'

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    blogPosts.map((post) => ({ lang, slug: post.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale
  const post = getBlogPost(slug)

  if (!post) {
    return { title: 'Article — Grom Agency' }
  }

  return {
    title: `${post.title[locale]} — Grom Agency`,
    description: post.excerpt[locale],
    alternates: {
      canonical: `https://grom-agency.com/${locale}/blog/${slug}`,
      languages: {
        'fr-FR': `https://grom-agency.com/fr/blog/${slug}`,
        'sr-RS': `https://grom-agency.com/rs/blog/${slug}`,
        'en-US': `https://grom-agency.com/en/blog/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      title: post.title[locale],
      description: post.excerpt[locale],
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  const locale = isValidLocale(lang) ? lang : defaultLocale
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Build the full answer text from paragraph + list blocks for the FAQ schema
  const answerText = post.blocks
    .flatMap((block) => {
      if (block.type === 'paragraph') return [block.text[locale]]
      if (block.type === 'list') return block.items[locale]
      return []
    })
    .join(' ')

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title[locale],
    description: post.excerpt[locale],
    datePublished: post.date,
    inLanguage: locale,
    url: `https://grom-agency.com/${locale}/blog/${slug}`,
    author: { '@type': 'Organization', name: 'Grom Agency' },
    publisher: {
      '@type': 'Organization',
      name: 'Grom Agency',
      logo: {
        '@type': 'ImageObject',
        url: 'https://grom-agency.com/images/grom-logo.png',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: post.title[locale],
        acceptedAnswer: {
          '@type': 'Answer',
          text: answerText,
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BlogPostContent post={post} />
    </>
  )
}
