'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { GlassCard } from '@/components/glass-card'
import { CreatorCard, MysteryCard, type Creator } from '@/components/creator-card'
import { CheckCircle, MessageSquare, DollarSign, Briefcase, FileText, Sparkles } from 'lucide-react'

// Current roster for showcase
const currentRoster: Creator[] = [
  {
    id: '1',
    name: 'Ana Marija',
    handle: '@_veseli_plamicak_',
    niche: 'Lifestyle / Beauty',
    country: '',
    flag: '🇷🇸',
    photo: '/creators/ana-marija.png',
    followers: '125K',
    instagram: '_veseli_plamicak_',
    tiktok: 'veseliplamicak',
  },
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

const services = [
  { key: 'services.1', icon: MessageSquare },
  { key: 'services.2', icon: DollarSign },
  { key: 'services.3', icon: Briefcase },
  { key: 'services.4', icon: FileText },
  { key: 'services.5', icon: Sparkles },
]

export function CreateursContent() {
  const { t, language } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const mysteryTitle = language === 'rs' 
    ? 'Sledeća munja si možda ti.' 
    : language === 'en'
    ? 'The next thunder could be you.'
    : 'Le prochain tonnerre, c\'est peut-être toi.'

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t('createurs.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('createurs.subtitle')}
          </p>
        </div>

        {/* What we do for you */}
        <div className="mb-16">
          <GlassCard className="p-8 sm:p-10" glow>
            <h2 className="font-display text-2xl font-semibold mb-6 text-center">
              {language === 'rs' ? 'Šta radimo za tebe' : language === 'en' ? 'What we do for you' : 'Ce qu\'on fait pour toi'}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div
                    key={service.key}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(service.key)}
                    </p>
                  </div>
                )
              })}
            </div>
          </GlassCard>
        </div>

        {/* Creator Book / Current Roster */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-semibold mb-6">
            {language === 'rs' ? 'Naš tim' : language === 'en' ? 'Our roster' : 'Notre roster'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentRoster.map((creator) => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
            <MysteryCard
              title={mysteryTitle}
              ctaText={language === 'rs' ? 'Pridruži se' : language === 'en' ? 'Apply' : 'Postuler'}
              href="#apply"
            />
          </div>
        </div>

        {/* Registration Form */}
        <div id="apply">
          <GlassCard className="p-8 sm:p-10 lg:p-12" glow>
            <h2 className="font-display text-2xl font-semibold mb-6 text-center">
              {language === 'rs' ? 'Prijavi se' : language === 'en' ? 'Apply now' : 'Rejoindre le réseau'}
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">
                  {language === 'rs' ? 'Hvala!' : language === 'en' ? 'Thank you!' : 'Merci !'}
                </h3>
                <p className="text-muted-foreground">
                  {t('form.confirmation')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                {/* Name fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium mb-2">
                      {t('form.firstname')} *
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium mb-2">
                      {t('form.lastname')} *
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Social handles */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                      {t('form.instagram')} *
                    </label>
                    <input
                      type="text"
                      id="instagram"
                      name="instagram"
                      required
                      placeholder="@"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="tiktok" className="block text-sm font-medium mb-2">
                      {t('form.tiktok')}
                    </label>
                    <input
                      type="text"
                      id="tiktok"
                      name="tiktok"
                      placeholder="@"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Niche & Followers */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="niche" className="block text-sm font-medium mb-2">
                      {t('form.niche')} *
                    </label>
                    <select
                      id="niche"
                      name="niche"
                      required
                      className="form-select pr-10"
                    >
                      <option value="">
                        {language === 'rs' ? 'Izaberite...' : language === 'en' ? 'Select...' : 'Sélectionner...'}
                      </option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="beauty">Beauty</option>
                      <option value="fashion">Fashion</option>
                      <option value="food">Food</option>
                      <option value="travel">Travel</option>
                      <option value="fitness">Fitness</option>
                      <option value="tech">Tech</option>
                      <option value="gaming">Gaming</option>
                      <option value="other">{language === 'rs' ? 'Drugo' : language === 'en' ? 'Other' : 'Autre'}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="followers" className="block text-sm font-medium mb-2">
                      {t('form.followers')} *
                    </label>
                    <select
                      id="followers"
                      name="followers"
                      required
                      className="form-select pr-10"
                    >
                      <option value="">
                        {language === 'rs' ? 'Izaberite...' : language === 'en' ? 'Select...' : 'Sélectionner...'}
                      </option>
                      <option value="<10k">&lt; 10K</option>
                      <option value="10k-50k">10K - 50K</option>
                      <option value="50k-100k">50K - 100K</option>
                      <option value="100k-500k">100K - 500K</option>
                      <option value=">500k">&gt; 500K</option>
                    </select>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="form-input resize-none"
                  />
                </div>

                {/* Submit */}
                <a
                  href="mailto:contact@grom-agency.com"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                >
                  {t('form.submit.join')} ⚡️
                </a>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
