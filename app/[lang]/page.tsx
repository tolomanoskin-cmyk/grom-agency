import { HeroSection } from '@/components/home/hero-section'
import { WhatWeDoSection } from '@/components/home/what-we-do-section'
import { TalentsPreviewSection } from '@/components/home/talents-preview-section'
import { WorkSection } from '@/components/home/work-section'
import { GromkulatorTeaser } from '@/components/home/gromkulator-teaser'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <TalentsPreviewSection />
      <WorkSection />
      <GromkulatorTeaser />
    </>
  )
}
