'use client'

import { GlassCard } from './glass-card'
import { Instagram } from 'lucide-react'
import Image from 'next/image'

// TikTok icon component
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export interface Creator {
  id: string
  name: string
  handle: string
  niche: string
  country: string
  flag: string
  photo: string
  followers?: string
  instagram?: string
  tiktok?: string
}

interface CreatorCardProps {
  creator: Creator
}

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <div className="group">
      {/* Photo container with rounded corners */}
      <GlassCard className="relative overflow-hidden aspect-[3/4] mb-3">
        <Image
          src={creator.photo}
          alt={creator.name}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Social links overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3">
            {creator.instagram && (
              <a
                href={`https://instagram.com/${creator.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-colors"
                aria-label={`${creator.name} Instagram`}
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {creator.tiktok && (
              <a
                href={`https://tiktok.com/@${creator.tiktok.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white transition-colors"
                aria-label={`${creator.name} TikTok`}
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </GlassCard>
      
      {/* Name below the photo */}
      <h3 className="font-display font-bold text-sm sm:text-base text-center uppercase tracking-wide text-foreground">
        {creator.name}
      </h3>
    </div>
  )
}

// Mystery card for "Join us" CTA
interface MysteryCardProps {
  title: string
  subtitle?: string
  ctaText: string
  href: string
}

export function MysteryCard({ title, subtitle, ctaText, href }: MysteryCardProps) {
  return (
    <GlassCard className="p-4 sm:p-6 relative overflow-hidden" glow>
      <div className="flex flex-col items-center text-center h-full justify-center min-h-[250px]">
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-transparent to-primary/5" />
        
        {/* Content */}
        <div className="relative z-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-4xl">⚡️</span>
          </div>
          <p className="font-display font-semibold text-lg mb-2">{title}</p>
          {subtitle && (
            <p className="text-muted-foreground text-sm mb-4">{subtitle}</p>
          )}
          <a
            href="mailto:contact@grom-agency.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/80 backdrop-blur text-primary-foreground font-medium text-sm hover:bg-primary transition-all"
          >
            {ctaText} ⚡️
          </a>
        </div>
      </div>
    </GlassCard>
  )
}
