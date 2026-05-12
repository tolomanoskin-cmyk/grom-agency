'use client'

import { useLanguage } from '@/components/language-provider'
import { GlassCard } from '@/components/glass-card'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Building2, Users } from 'lucide-react'
import Link from 'next/link'

export function WhatWeDoSection() {
  const { t, language } = useLanguage()

  const learnMore = language === 'rs' ? 'Saznaj više' : language === 'en' ? 'Learn more' : 'En savoir plus'
  const brandsCtaText = language === 'rs' ? 'Počnite sada' : language === 'en' ? 'Get started' : 'Commencer'
  const creatorsCtaText = language === 'rs' ? 'Pridruži se' : language === 'en' ? 'Join us' : 'Rejoins-nous'

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <ScrollAnimation animation="fade-up">
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 text-center max-w-4xl mx-auto mb-16 leading-relaxed text-balance font-light">
            {t('whatwedo.title')}
          </p>
        </ScrollAnimation>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* For Brands */}
          <ScrollAnimation animation="slide-left" delay={100}>
            <GlassCard className="p-8 lg:p-10 h-full" glow>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <span className="text-2xl">🇫🇷</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 tracking-tight">
                  {t('whatwedo.brands.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('whatwedo.brands.desc')}
                </p>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <Link 
                    href={`/${language}/marques`}
                    className="btn-glossy px-5 py-2.5 text-foreground text-sm font-semibold"
                  >
                    {brandsCtaText}
                  </Link>
                  <Link 
                    href={`/${language}/marques`}
                    className="text-primary font-medium hover:underline transition-all text-sm"
                  >
                    {learnMore} &rarr;
                  </Link>
                </div>
              </div>
            </GlassCard>
          </ScrollAnimation>

          {/* For Creators */}
          <ScrollAnimation animation="slide-right" delay={200}>
            <GlassCard className="p-8 lg:p-10 h-full" glow>
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="text-2xl">🇷🇸</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 tracking-tight">
                  {t('whatwedo.creators.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('whatwedo.creators.desc')}
                </p>
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <Link 
                    href={`/${language}/createurs`}
                    className="btn-glossy px-5 py-2.5 text-foreground text-sm font-semibold"
                  >
                    {creatorsCtaText}
                  </Link>
                  <Link 
                    href={`/${language}/createurs`}
                    className="text-accent font-medium hover:underline transition-all text-sm"
                  >
                    {learnMore} &rarr;
                  </Link>
                </div>
              </div>
            </GlassCard>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
