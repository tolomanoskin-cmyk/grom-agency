'use client'

import { useLanguage } from '@/components/language-provider'
import { GlassCard } from '@/components/glass-card'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SmokeEffect } from '@/components/smoke-effect'
import Link from 'next/link'
import { Calculator } from 'lucide-react'

export function GromkulatorTeaser() {
  const { t, language } = useLanguage()

  const ctaText = language === 'rs' 
    ? 'Proceni kampanju' 
    : language === 'en'
    ? 'Estimate campaign'
    : 'Estimer ma campagne'

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Smoke effect */}
      <SmokeEffect intensity="light" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollAnimation animation="scale">
          <GlassCard className="p-8 sm:p-12 lg:p-16 text-center" glow>
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 transition-transform hover:scale-110">
              <Calculator className="h-8 w-8" />
            </div>

            {/* Content */}
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              Gromkulator
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('gromkulator.teaser.title')}
            </p>

            {/* CTA */}
            <Link
              href={`/${language}/gromkulator`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105"
            >
              {ctaText} ⚡️
            </Link>
          </GlassCard>
        </ScrollAnimation>
      </div>
    </section>
  )
}
