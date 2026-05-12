'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const WHATSAPP_NUMBER = '33749561861'

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour ! Je souhaite en savoir plus sur vos talents UGC.')}`

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      {/* Expanded card */}
      <div
        className={cn(
          'overflow-hidden rounded-2xl transition-all duration-300',
          'bg-white/90 backdrop-blur-2xl',
          'border border-gray-200',
          'shadow-[0_8px_32px_rgba(0,0,0,0.15)]',
          isExpanded
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        )}
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        
        <div className="p-4 min-w-[240px]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-500">Reponse sous 24h</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4 text-gray-500" />
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
            Discutons sur WhatsApp
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
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
        
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        
        <MessageCircle className={cn(
          'h-6 w-6 relative z-10 transition-transform duration-300',
          isExpanded && 'rotate-12'
        )} />
      </button>
    </div>
  )
}
