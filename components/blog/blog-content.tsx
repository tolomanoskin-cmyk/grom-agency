'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { GlassCard } from '@/components/glass-card'
import { blogPosts } from '@/lib/blog-data'
import { ArrowRight, Clock, Search, X } from 'lucide-react'

export function BlogContent() {
  const { t, language } = useLanguage()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const formatDate = (date: string) => {
    const localeMap = { fr: 'fr-FR', rs: 'sr-RS', en: 'en-US' } as const
    return new Date(date).toLocaleDateString(localeMap[language], {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Unique categories for the current language
  const categories = useMemo(() => {
    const unique = new Map<string, string>()
    for (const post of blogPosts) {
      const label = post.category[language]
      if (!unique.has(label)) unique.set(label, label)
    }
    return Array.from(unique.values())
  }, [language])

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === 'all' || post.category[language] === activeCategory
      if (!matchesCategory) return false
      if (!normalized) return true
      const haystack = [
        post.title[language],
        post.excerpt[language],
        post.category[language],
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(normalized)
    })
  }, [query, activeCategory, language])

  const hasActiveFilters = query.trim() !== '' || activeCategory !== 'all'

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Search + filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('blog.searchPlaceholder')}
              aria-label={t('blog.searchPlaceholder')}
              className="w-full rounded-xl border border-border bg-background/60 py-3 pl-11 pr-11 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label={t('blog.clearFilters')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              {t('blog.filterAll')}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Result count + reset */}
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <span>
              {filteredPosts.length} {t('blog.resultsCount')}
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setActiveCategory('all')
                }}
                className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
              >
                <X className="h-3.5 w-3.5" />
                {t('blog.clearFilters')}
              </button>
            )}
          </div>
        </div>

        {/* Posts grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
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
        ) : (
          <GlassCard className="p-10 text-center" hover={false}>
            <p className="text-muted-foreground">{t('blog.noResults')}</p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setActiveCategory('all')
              }}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <X className="h-4 w-4" />
              {t('blog.clearFilters')}
            </button>
          </GlassCard>
        )}
      </div>
    </section>
  )
}
