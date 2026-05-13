'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/components/language-provider'
import { CreatorCard, MysteryCard, type Creator } from '@/components/creator-card'
import { ScrollAnimation } from '@/components/scroll-animation'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

// Sample creators data
const featuredCreators: Creator[] = [
  {
    id: '2',
    name: 'Milica',
    handle: '@__mimaa96__',
    niche: 'Lifestyle / Fashion',
    country: '',
    flag: '🇷🇸',
    photo: '/creators/milica.png',
    followers: '50K',
    instagram: '__mimaa96__',
  },
]

// Carousel threshold - if 3+ creators, show carousel
const CAROUSEL_THRESHOLD = 3

export function TalentsPreviewSection() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  const useCarousel = featuredCreators.length >= CAROUSEL_THRESHOLD

  const mysteryTitle = language === 'rs' 
    ? 'Sledeća munja si možda ti.' 
    : language === 'en'
    ? 'The next thunder could be you.'
    : 'Le prochain tonnerre, c\'est peut-être toi.'

  // Auto-play carousel
  useEffect(() => {
    if (!useCarousel || !isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredCreators.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [useCarousel, isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + featuredCreators.length) % featuredCreators.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % featuredCreators.length)
  }

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollAnimation animation="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              {t('talents.title')}
            </h2>
            <Link
              href={`/${language}/talents`}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-all"
            >
              {t('talents.cta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>

        {/* Carousel mode (3+ creators) */}
        {useCarousel ? (
          <div className="relative">
            {/* Carousel container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {featuredCreators.map((creator) => (
                  <div key={creator.id} className="w-full flex-shrink-0 px-2">
                    <div className="max-w-xs mx-auto">
                      <CreatorCard creator={creator} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredCreators.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Grid mode (less than 3 creators) */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCreators.map((creator, index) => (
              <ScrollAnimation key={creator.id} animation="fade-up" delay={index * 100}>
                <CreatorCard creator={creator} />
              </ScrollAnimation>
            ))}
            
            {/* Mystery Card */}
            <ScrollAnimation animation="fade-up" delay={featuredCreators.length * 100}>
              <MysteryCard
                title={mysteryTitle}
                ctaText={language === 'rs' ? 'Pridruži se' : language === 'en' ? 'Join' : 'Rejoindre'}
                href={`/${language}/contact`}
              />
            </ScrollAnimation>
          </div>
        )}
      </div>
    </section>
  )
}
