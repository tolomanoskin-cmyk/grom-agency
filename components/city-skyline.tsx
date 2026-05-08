'use client'

import { cn } from '@/lib/utils'

interface CitySkylineProps {
  city: 'paris' | 'belgrade'
  className?: string
  opacity?: number
}

export function CitySkyline({ city, className, opacity = 0.15 }: CitySkylineProps) {
  if (city === 'paris') {
    return (
      <svg 
        viewBox="0 0 1200 300" 
        className={cn('w-full', className)}
        style={{ opacity }}
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Paris Skyline with Eiffel Tower */}
        <defs>
          <linearGradient id="parisGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Background buildings */}
        <rect x="0" y="220" width="60" height="80" fill="url(#parisGradient)" />
        <rect x="70" y="200" width="45" height="100" fill="url(#parisGradient)" />
        <rect x="125" y="230" width="55" height="70" fill="url(#parisGradient)" />
        <rect x="190" y="210" width="40" height="90" fill="url(#parisGradient)" />
        <rect x="240" y="240" width="50" height="60" fill="url(#parisGradient)" />
        
        {/* Eiffel Tower */}
        <path d="M600 300 L580 300 L550 180 L545 180 L520 300 L500 300 L540 120 L535 120 L560 50 L565 50 L570 30 L572 10 L575 0 L578 10 L580 30 L585 50 L590 50 L615 120 L610 120 L650 300 L630 300 L605 180 L600 180 L570 300 L590 300 L575 220 L560 220 Z" fill="url(#parisGradient)" />
        
        {/* More buildings */}
        <rect x="700" y="225" width="55" height="75" fill="url(#parisGradient)" />
        <rect x="765" y="200" width="40" height="100" fill="url(#parisGradient)" />
        <rect x="815" y="235" width="60" height="65" fill="url(#parisGradient)" />
        <rect x="885" y="215" width="45" height="85" fill="url(#parisGradient)" />
        
        {/* Notre Dame style */}
        <path d="M950 300 L950 220 L960 200 L970 180 L975 160 L980 180 L990 200 L1000 220 L1000 300 Z" fill="url(#parisGradient)" />
        
        <rect x="1020" y="240" width="50" height="60" fill="url(#parisGradient)" />
        <rect x="1080" y="210" width="60" height="90" fill="url(#parisGradient)" />
        <rect x="1150" y="230" width="50" height="70" fill="url(#parisGradient)" />
      </svg>
    )
  }

  // Belgrade skyline
  return (
    <svg 
      viewBox="0 0 1200 300" 
      className={cn('w-full', className)}
      style={{ opacity }}
      preserveAspectRatio="xMidYMax slice"
    >
      {/* Belgrade Skyline */}
      <defs>
        <linearGradient id="belgradeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Left buildings */}
      <rect x="0" y="210" width="50" height="90" fill="url(#belgradeGradient)" />
      <rect x="60" y="230" width="40" height="70" fill="url(#belgradeGradient)" />
      <rect x="110" y="190" width="55" height="110" fill="url(#belgradeGradient)" />
      <rect x="175" y="220" width="45" height="80" fill="url(#belgradeGradient)" />
      
      {/* Church of Saint Sava inspired dome */}
      <ellipse cx="350" cy="220" rx="60" ry="40" fill="url(#belgradeGradient)" />
      <rect x="310" y="220" width="80" height="80" fill="url(#belgradeGradient)" />
      <ellipse cx="350" cy="200" rx="35" ry="25" fill="url(#belgradeGradient)" />
      <path d="M348 175 L348 150 L350 145 L352 150 L352 175 Z" fill="url(#belgradeGradient)" />
      
      {/* Kalemegdan fortress inspired */}
      <rect x="500" y="250" width="120" height="50" fill="url(#belgradeGradient)" />
      <rect x="520" y="230" width="30" height="70" fill="url(#belgradeGradient)" />
      <rect x="570" y="220" width="30" height="80" fill="url(#belgradeGradient)" />
      
      {/* Modern Belgrade Tower style */}
      <rect x="700" y="100" width="40" height="200" fill="url(#belgradeGradient)" />
      <rect x="705" y="90" width="30" height="20" fill="url(#belgradeGradient)" />
      
      {/* More buildings */}
      <rect x="780" y="200" width="50" height="100" fill="url(#belgradeGradient)" />
      <rect x="840" y="220" width="45" height="80" fill="url(#belgradeGradient)" />
      <rect x="895" y="180" width="55" height="120" fill="url(#belgradeGradient)" />
      <rect x="960" y="210" width="40" height="90" fill="url(#belgradeGradient)" />
      <rect x="1010" y="235" width="60" height="65" fill="url(#belgradeGradient)" />
      <rect x="1080" y="200" width="50" height="100" fill="url(#belgradeGradient)" />
      <rect x="1140" y="225" width="60" height="75" fill="url(#belgradeGradient)" />
    </svg>
  )
}
