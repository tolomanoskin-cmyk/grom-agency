'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { ChevronDown } from 'lucide-react'
import { ScrollAnimation } from '@/components/scroll-animation'

export function HeroSection() {
  const { t, language } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 sm:pt-28 lg:pt-0">
      {/* City skyline background image with fade effect */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px]">
          <Image
            src="/images/skyline-fond.png"
            alt=""
            fill
            className="object-cover object-bottom opacity-40 dark:opacity-15"
            style={{ 
              maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 60%, transparent 100%)'
            }}
            priority
          />
        </div>
      </div>

      {/* Main Hero Content - No card */}
      <ScrollAnimation animation="fade-up" delay={0} className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="relative w-48 h-24 sm:w-64 sm:h-32 md:w-80 md:h-40">
            <Image
              src="/images/grom-logo.png"
              alt="GROM"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-balance mb-8">
          {t('hero.title')}
        </h1>

        {/* Cities */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light tracking-wide mb-10">
          <span className="text-foreground">Paris</span>
          <span className="mx-4 text-primary/50">|</span>
          <span className="text-foreground">Belgrade</span>
        </p>

        {/* CTA Buttons - Glossy style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href={`/${language}/marques`}
            className="btn-glossy px-8 py-3 text-foreground text-base font-semibold"
          >
            {language === 'fr' ? 'Je suis une marque' : language === 'rs' ? 'Ja sam brend' : 'I am a brand'}
          </Link>
          <Link 
            href={`/${language}/createurs`}
            className="btn-glossy-outline px-8 py-3 text-foreground text-base"
          >
            {language === 'fr' ? 'Je suis createur' : language === 'rs' ? 'Ja sam kreator' : 'I am a creator'}
          </Link>
        </div>
      </ScrollAnimation>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium">
          {t('hero.scroll')}
        </span>
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </div>


    </section>
  )
}
