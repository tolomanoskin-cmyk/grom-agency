'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { GlassCard } from '@/components/glass-card'
import { CheckCircle } from 'lucide-react'

export function MarquesContent() {
  const { t, language } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t('marques.title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('marques.subtitle')}
          </p>
        </div>

        {/* Form */}
        <GlassCard className="p-8 sm:p-10 lg:p-12" glow>
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

              {/* Brand */}
              <div>
                <label htmlFor="brand" className="block text-sm font-medium mb-2">
                  {t('form.brand')} *
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  required
                  className="form-input"
                />
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium mb-2">
                  {t('form.website')}
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  placeholder="https://"
                  className="form-input"
                />
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

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  {t('form.budget')}
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="form-input"
                >
                  <option value="">
                    {language === 'rs' ? 'Izaberite...' : language === 'en' ? 'Select...' : 'Sélectionner...'}
                  </option>
                  <option value="<5k">&lt; 5 000 €</option>
                  <option value="5k-10k">5 000 € - 10 000 €</option>
                  <option value="10k-25k">10 000 € - 25 000 €</option>
                  <option value="25k-50k">25 000 € - 50 000 €</option>
                  <option value=">50k">&gt; 50 000 €</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input resize-none"
                />
              </div>

              {/* Submit */}
              <a
                href="mailto:rs@grom-agency.com"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
              >
                {t('form.submit.contact')} ⚡️
              </a>
            </form>
          )}
        </GlassCard>
      </div>
    </section>
  )
}
