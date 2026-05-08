'use client'

import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

interface SmokeEffectProps {
  className?: string
  intensity?: 'light' | 'medium' | 'heavy'
}

// Fixed smoke element positions - no randomness
const SMOKE_CONFIGS = {
  light: [
    { width: 280, height: 180, left: 10, bottom: 15, opacity: 0.12, duration: 14 },
    { width: 220, height: 150, left: 60, bottom: 8, opacity: 0.1, duration: 16 },
    { width: 300, height: 200, left: 35, bottom: 20, opacity: 0.08, duration: 12 },
  ],
  medium: [
    { width: 280, height: 180, left: 10, bottom: 15, opacity: 0.12, duration: 14 },
    { width: 220, height: 150, left: 60, bottom: 8, opacity: 0.1, duration: 16 },
    { width: 300, height: 200, left: 35, bottom: 20, opacity: 0.08, duration: 12 },
    { width: 250, height: 160, left: 75, bottom: 5, opacity: 0.11, duration: 15 },
    { width: 200, height: 140, left: 20, bottom: 25, opacity: 0.09, duration: 13 },
  ],
  heavy: [
    { width: 280, height: 180, left: 10, bottom: 15, opacity: 0.15, duration: 14 },
    { width: 220, height: 150, left: 60, bottom: 8, opacity: 0.13, duration: 16 },
    { width: 300, height: 200, left: 35, bottom: 20, opacity: 0.12, duration: 12 },
    { width: 250, height: 160, left: 75, bottom: 5, opacity: 0.14, duration: 15 },
    { width: 200, height: 140, left: 20, bottom: 25, opacity: 0.11, duration: 13 },
    { width: 320, height: 180, left: 45, bottom: 12, opacity: 0.1, duration: 17 },
    { width: 180, height: 120, left: 85, bottom: 18, opacity: 0.12, duration: 11 },
    { width: 260, height: 170, left: 5, bottom: 22, opacity: 0.09, duration: 14 },
  ],
}

const WISP_CONFIGS = [
  { width: 120, height: 80, left: 25, opacity: 0.1, duration: 9 },
  { width: 100, height: 70, left: 55, opacity: 0.08, duration: 10 },
  { width: 140, height: 90, left: 75, opacity: 0.09, duration: 8 },
]

export function SmokeEffect({ className, intensity = 'medium' }: SmokeEffectProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const smokeElements = SMOKE_CONFIGS[intensity]
  const wispElements = WISP_CONFIGS.slice(0, Math.floor(smokeElements.length / 2))

  // Only render on client to avoid hydration issues
  if (!mounted) {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} />
    )
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      
      {/* Animated smoke clouds */}
      {smokeElements.map((smoke, i) => (
        <div
          key={`smoke-${i}`}
          className="absolute rounded-full blur-3xl animate-smoke-drift"
          style={{
            width: smoke.width,
            height: smoke.height,
            left: `${smoke.left}%`,
            bottom: `${smoke.bottom}%`,
            background: `radial-gradient(ellipse at center, oklch(0.45 0.18 255 / ${smoke.opacity}) 0%, transparent 70%)`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${smoke.duration}s`,
          }}
        />
      ))}
      
      {/* Rising smoke wisps */}
      {wispElements.map((wisp, i) => (
        <div
          key={`wisp-${i}`}
          className="absolute rounded-full blur-2xl animate-smoke-rise"
          style={{
            width: wisp.width,
            height: wisp.height,
            left: `${wisp.left}%`,
            bottom: 0,
            background: `radial-gradient(ellipse at center, oklch(0.50 0.16 255 / ${wisp.opacity}) 0%, transparent 70%)`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${wisp.duration}s`,
          }}
        />
      ))}
      
      {/* Horizontal mist bands */}
      <div 
        className="absolute left-0 right-0 h-32 blur-2xl"
        style={{
          bottom: '10%',
          background: 'linear-gradient(90deg, transparent 0%, oklch(0.45 0.18 255 / 0.08) 30%, oklch(0.50 0.16 255 / 0.1) 50%, oklch(0.45 0.18 255 / 0.08) 70%, transparent 100%)',
        }}
      />
      <div 
        className="absolute left-0 right-0 h-24 blur-3xl"
        style={{
          bottom: '25%',
          background: 'linear-gradient(90deg, transparent 0%, oklch(0.45 0.18 255 / 0.05) 40%, oklch(0.50 0.16 255 / 0.07) 60%, transparent 100%)',
        }}
      />
    </div>
  )
}
