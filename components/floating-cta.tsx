'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { useLanguage } from './language-provider'
import { cn } from '@/lib/utils'

// WhatsApp Business number (country code without +)
const WHATSAPP_NUMBER = '33749561861'

export function FloatingCTA() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Show button after a small delay for smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  const getMessage = () => {
    switch (language) {
      case 'fr':
        return 'Bonjour ! Je souhaite en savoir plus sur vos services.'
      case 'rs':
        return 'Zdravo! Želim da saznam više o vašim uslugama.'
      default:
        return 'Hello! I would like to know more about your services.'
    }
  }

  const getButtonText = () => {
    switch (language) {
      case 'fr':
        return 'Discutons sur WhatsApp'
      case 'rs':
        return 'Razgovarajmo na WhatsApp-u'
      default:
        return "Let's chat on WhatsApp"
    }
  }

  const getSubText = () => {
    switch (language) {
      case 'fr':
        return 'Réponse sous 24h'
      case 'rs':
        return 'Odgovor u roku od 24h'
      default:
        return 'Response within 24h'
    }
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getMessage())}`

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      {/* Expanded card */}
      <div
        className={cn(
          'overflow-hidden rounded-2xl transition-all duration-300',
          'bg-white/15 dark:bg-white/10 backdrop-blur-2xl',
          'border border-white/30 dark:border-white/15',
          'shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
          isExpanded
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        )}
      >
        {/* Glossy shine */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        <div className="p-4 min-w-[240px]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground">{getSubText()}</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl',
              'bg-[#25D366] text-white font-semibold text-sm',
              'hover:bg-[#20BD5A] transition-all duration-300',
              'shadow-lg shadow-[#25D366]/30'
            )}
          >
            <MessageCircle className="h-5 w-5" />
            {getButtonText()}
          </a>
        </div>
      </div>

      {/* Main floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'group relative flex items-center justify-center',
          'w-14 h-14 rounded-full',
          'bg-[#25D366] text-white',
          'shadow-lg shadow-[#25D366]/40',
          'hover:shadow-xl hover:shadow-[#25D366]/50',
          'hover:scale-110 active:scale-105',
          'transition-all duration-300'
        )}
      >
        {/* Glossy shine */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
        
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        
        <MessageCircle className={cn(
          'h-6 w-6 relative z-10 transition-transform duration-300',
          isExpanded && 'rotate-12'
        )} />
      </button>
    </div>
  )
}
