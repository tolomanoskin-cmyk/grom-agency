'use client'

import { useEffect, useState } from 'react'

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Cloud layers */}
      <div className="absolute inset-0">
        {/* Cloud 1 - Large, slow moving */}
        <div 
          className="absolute -top-1/4 -left-1/4 w-[150%] h-[80%] opacity-20 animate-cloud-drift-slow"
          style={{
            background: 'radial-gradient(ellipse at center, oklch(0.35 0.08 250 / 0.4) 0%, transparent 70%)',
          }}
        />
        
        {/* Cloud 2 - Medium, different position */}
        <div 
          className="absolute top-1/4 right-0 w-[80%] h-[60%] opacity-15 animate-cloud-drift"
          style={{
            background: 'radial-gradient(ellipse at center, oklch(0.55 0.15 280 / 0.3) 0%, transparent 60%)',
            animationDelay: '-5s',
          }}
        />
        
        {/* Cloud 3 - Small accent */}
        <div 
          className="absolute bottom-1/4 left-1/4 w-[50%] h-[40%] opacity-20 animate-cloud-drift-slow"
          style={{
            background: 'radial-gradient(ellipse at center, oklch(0.55 0.12 250 / 0.4) 0%, transparent 50%)',
            animationDelay: '-10s',
          }}
        />
      </div>

      {/* Lightning glow effect - subtle ambient */}
      <div 
        className="absolute top-0 left-1/4 w-1/2 h-1/3 opacity-0 animate-lightning"
        style={{
          background: 'radial-gradient(ellipse at top, oklch(0.7 0.15 250 / 0.3) 0%, transparent 70%)',
        }}
      />
      
      {/* Electric glow at bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3 animate-glow-pulse"
        style={{
          background: 'linear-gradient(to top, oklch(0.55 0.12 250 / 0.1) 0%, transparent 100%)',
        }}
      />

      {/* Noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
