'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { GlassCard } from '@/components/glass-card'
import { blogPosts } from '@/lib/blog-data'
import { ArrowRight, Clock } from 'lucide-react'

export function BlogContent() {
  const { t, language } = useLanguage()

  const formatDate = (date: string) => {
    const localeMap = { fr: 'fr-FR', rs: 'sr-RS', en: 'en-US' } as const
    return new Date(date).toLocaleDateString(localeMap[language], {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/${language}/blog/${post.slug}`}
              className="group block"
            >
              <GlassCard className="p-6 lg:p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {post.category[language]}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readingTime} {t('blog.readingTime')}
                  </span>
                </div>

                <h2 className="font-display text-xl lg:text-2xl font-semibold mb-3 text-balance group-hover:text-primary transition-colors">
                  {post.title[language]}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt[language]}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-muted-foreground">
                    {formatDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {t('blog.readMore')}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
