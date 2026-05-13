'use client'

import { useLanguage } from '@/components/language-provider'
import { CreatorCard, MysteryCard, type Creator } from '@/components/creator-card'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SmokeEffect } from '@/components/smoke-effect'
import { CitySkyline } from '@/components/city-skyline'

// Full creators roster
const creators: Creator[] = [
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

export function TalentsContent() {
  const { t, language } = useLanguage()

  const mysteryTitle = language === 'rs' 
    ? 'Sledeća munja si možda ti.' 
    : language === 'en'
    ? 'The next thunder could be you.'
    : 'Le prochain tonnerre, c\'est peut-être toi.'

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none opacity-50">
        <div className="absolute bottom-0 left-0 w-1/2 text-foreground/10">
          <CitySkyline city="belgrade" opacity={0.08} />
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 text-foreground/10">
          <CitySkyline city="paris" opacity={0.08} />
        </div>
      </div>
      
      <SmokeEffect intensity="light" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              {t('talents.page.title')}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('talents.page.subtitle')}
            </p>
          </div>
        </ScrollAnimation>

        {/* Creator Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator, index) => (
            <ScrollAnimation key={creator.id} animation="fade-up" delay={index * 100}>
              <CreatorCard creator={creator} />
            </ScrollAnimation>
          ))}
          
          {/* Mystery Card - Always last */}
          <ScrollAnimation animation="fade-up" delay={creators.length * 100}>
            <MysteryCard
              title={mysteryTitle}
              ctaText={language === 'rs' ? 'Pridruži se' : language === 'en' ? 'Join' : 'Rejoindre'}
              href="/createurs"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
