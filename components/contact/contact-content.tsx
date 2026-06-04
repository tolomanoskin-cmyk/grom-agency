'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { GlassCard } from '@/components/glass-card'
import { CheckCircle, Mail, MapPin, Instagram } from 'lucide-react'

export function ContactContent() {
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

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <GlassCard className="p-8 sm:p-10" glow>
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
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  {/* You are */}
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium mb-2">
                      {t('form.youare')} *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      className="form-select pr-10"
                    >
                      <option value="">
                        {language === 'rs' ? 'Izaberite...' : language === 'en' ? 'Select...' : 'Sélectionner...'}
                      </option>
                      <option value="brand">{t('form.youare.brand')}</option>
                      <option value="creator">{t('form.youare.creator')}</option>
                      <option value="other">{t('form.youare.other')}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <a
                    href="mailto:rs@grom-agency.com"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                  >
                    {t('form.submit.send')} ⚡️
                  </a>
                </form>
              )}
            </GlassCard>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email */}
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a
                    href="mailto:rs@grom-agency.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rs@grom-agency.com
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Locations */}
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    {language === 'rs' ? 'Lokacije' : language === 'en' ? 'Locations' : 'Localisations'}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">Belgrade, Serbie 🇷🇸</p>
                  <p className="text-muted-foreground text-sm">Paris, France 🇫🇷</p>
                </div>
              </div>
            </GlassCard>

            {/* Social */}
            <GlassCard className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Instagram</h3>
                  <a
                    href="https://instagram.com/gromagency.rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @gromagency.rs
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
