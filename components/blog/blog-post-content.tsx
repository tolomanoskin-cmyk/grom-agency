'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { GlassCard } from '@/components/glass-card'
import { blogPosts, type BlogPost } from '@/lib/blog-data'
import { ArrowLeft, ArrowRight, Clock, Zap } from 'lucide-react'

interface BlogPostContentProps {
  post: BlogPost
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const { t, language } = useLanguage()

  const formatDate = (date: string) => {
    const localeMap = { fr: 'fr-FR', rs: 'sr-RS', en: 'en-US' } as const
    return new Date(date).toLocaleDateString(localeMap[language], {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <article className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href={`/${language}/blog`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('blog.backToBlog')}
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {post.category[language]}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {post.readingTime} {t('blog.readingTime')}
            </span>
            <span className="text-xs text-muted-foreground">
              {formatDate(post.date)}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            {post.title[language]}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {post.excerpt[language]}
          </p>
        </header>

        {/* Body */}
        <div className="space-y-6">
          {post.blocks.map((block, i) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={i}
                  className="font-display text-2xl font-semibold pt-4 flex items-center gap-2"
                >
                  <Zap className="h-5 w-5 text-primary" />
                  {block.text[language]}
                </h2>
              )
            }
            if (block.type === 'paragraph') {
              return (
                <p key={i} className="text-base leading-relaxed text-foreground/90">
                  {block.text[language]}
                </p>
              )
            }
            if (block.type === 'list') {
              return (
                <ul key={i} className="space-y-3">
                  {block.items[language].map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span className="text-base leading-relaxed text-foreground/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )
            }
            if (block.type === 'stats') {
              return (
                <div key={i} className="grid sm:grid-cols-2 gap-4 py-2">
                  {block.items.map((stat, j) => (
                    <GlassCard key={j} className="p-5" hover={false}>
                      <div className="font-display text-2xl font-bold text-primary mb-1">
                        {stat.value[language]}
                      </div>
                      <div className="text-sm text-muted-foreground leading-snug">
                        {stat.label[language]}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              )
            }
            if (block.type === 'cta') {
              return (
                <GlassCard
                  key={i}
                  className="my-4 p-6 flex flex-col sm:flex-row sm:items-center gap-4 border-l-2 border-l-primary"
                  hover={false}
                >
                  <p className="text-base leading-relaxed text-foreground/90 flex-1">
                    {block.text[language]}
                  </p>
                  <Link
                    href={`/${language}/${block.href}`}
                    className="inline-flex items-center justify-center gap-2 shrink-0 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
                  >
                    {block.buttonLabel[language]}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </GlassCard>
              )
            }
            return null
          })}
        </div>

        {/* CTA */}
        <GlassCard className="mt-12 p-8 text-center" glow>
          <h2 className="font-display text-2xl font-semibold mb-2">
            {t('blog.ctaTitle')}
          </h2>
          <p className="text-muted-foreground mb-6">{t('blog.ctaSubtitle')}</p>
          <Link
            href={`/${language}/contact`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
          >
            {t('blog.ctaButton')} ⚡️
          </Link>
        </GlassCard>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-xl font-semibold mb-6">
              {t('blog.relatedTitle')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${language}/blog/${rel.slug}`}
                  className="group block"
                >
                  <GlassCard className="p-6 h-full flex flex-col">
                    <span className="inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {rel.category[language]}
                    </span>
                    <h3 className="font-display text-lg font-semibold mb-3 text-balance group-hover:text-primary transition-colors flex-1">
                      {rel.title[language]}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary mt-auto">
                      {t('blog.readMore')}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
