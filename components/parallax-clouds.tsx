'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface CloudLayer {
  id: number
  src: string
  speed: number
  initialX: number
  initialY: number
  scale: number
  opacity: number
  flip?: boolean
}

const cloudLayers: CloudLayer[] = [
  // Smoke trails - more visible
  { id: 1, src: '/images/cloud-smoke.png', speed: 0.15, initialX: -10, initialY: 15, scale: 1.5, opacity: 0.7 },
  { id: 2, src: '/images/cloud-smoke.png', speed: 0.1, initialX: 60, initialY: 45, scale: 1.2, opacity: 0.5, flip: true },
  { id: 3, src: '/images/cloud-smoke.png', speed: 0.2, initialX: 20, initialY: 75, scale: 1.8, opacity: 0.6 },
  // Fluffy clouds - more visible
  { id: 4, src: '/images/cloud-fluffy.png', speed: 0.08, initialX: 5, initialY: 10, scale: 1.3, opacity: 0.8 },
  { id: 5, src: '/images/cloud-fluffy.png', speed: 0.12, initialX: 70, initialY: 30, scale: 0.9, opacity: 0.65 },
  { id: 6, src: '/images/cloud-fluffy.png', speed: 0.06, initialX: 40, initialY: 60, scale: 1.1, opacity: 0.55, flip: true },
  { id: 7, src: '/images/cloud-fluffy.png', speed: 0.18, initialX: -5, initialY: 85, scale: 1.4, opacity: 0.7 },
]

export function ParallaxClouds() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background - deep navy to purple */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            180deg, 
            oklch(0.06 0.04 280) 0%, 
            oklch(0.10 0.05 265) 25%,
            oklch(0.12 0.045 255) 50%,
            oklch(0.10 0.05 270) 75%,
            oklch(0.08 0.04 275) 100%
          )`,
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 50% 20%, oklch(0.20 0.10 260 / 0.3) 0%, transparent 60%),
                       radial-gradient(ellipse 100% 60% at 80% 70%, oklch(0.18 0.12 285 / 0.25) 0%, transparent 50%),
                       radial-gradient(ellipse 80% 50% at 20% 80%, oklch(0.15 0.10 275 / 0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Cloud layers with parallax */}
      {cloudLayers.map((cloud) => {
        const translateY = scrollY * cloud.speed
        const translateX = Math.sin(scrollY * 0.001 + cloud.id) * 20
        
        return (
          <div
            key={cloud.id}
            className="absolute transition-none will-change-transform"
            style={{
              left: `${cloud.initialX}%`,
              top: `${cloud.initialY}%`,
              transform: `translate3d(${translateX}px, ${-translateY}px, 0) scale(${cloud.scale}) ${cloud.flip ? 'scaleX(-1)' : ''}`,
              opacity: cloud.opacity,
            }}
          >
            <Image
              src={cloud.src}
              alt=""
              width={500}
              height={300}
              className="select-none w-auto h-auto"
              style={{ 
                filter: 'invert(1) brightness(1.2) contrast(1.1)',
                mixBlendMode: 'soft-light',
              }}
              loading="eager"
              priority={cloud.id <= 3}
            />
          </div>
        )
      })}

      {/* Ambient glow effects */}
      <div 
        className="absolute top-1/4 left-1/4 w-[60%] h-[40%] animate-glow-pulse"
        style={{
          background: 'radial-gradient(ellipse at center, oklch(0.45 0.18 270 / 0.15) 0%, transparent 70%)',
        }}
      />
      
      <div 
        className="absolute bottom-1/4 right-1/4 w-[50%] h-[30%] animate-glow-pulse"
        style={{
          background: 'radial-gradient(ellipse at center, oklch(0.50 0.20 255 / 0.12) 0%, transparent 70%)',
          animationDelay: '-2s',
        }}
      />

      {/* Subtle vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, oklch(0.05 0.03 270 / 0.4) 100%)',
        }}
      />

      {/* Noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
