'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useTheme } from 'next-themes'

export function GradientBackground() {
  const [scrollY, setScrollY] = useState(0)
  const [lightningFlash, setLightningFlash] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const lightningChance = useRef(0)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const triggerLightning = useCallback(() => {
    // 50% chance to trigger lightning
    lightningChance.current += 1
    if (lightningChance.current % 2 !== 0) return
    
    setLightningFlash(true)
    setTimeout(() => setLightningFlash(false), 120)
    // Single subtle flash
    setTimeout(() => {
      setLightningFlash(true)
      setTimeout(() => setLightningFlash(false), 60)
    }, 180)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // Trigger lightning on significant scroll (every 500px)
      const scrollDelta = Math.abs(currentScrollY - lastScrollY)
      if (scrollDelta > 450) {
        triggerLightning()
        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, triggerLightning])

  // Calculate subtle parallax for gradient
  const parallaxOffset = scrollY * 0.08

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <>
      {/* Main gradient background - matching the reference image */}
      <div 
        className="fixed inset-0 -z-50"
        style={{
          background: isDark 
            ? `linear-gradient(
                145deg,
                #1a1a4e 0%,
                #2d2d7a 15%,
                #3d3d9a 30%,
                #4a5aaf 50%,
                #3d4d9e 65%,
                #2a3a80 80%,
                #1e2560 100%
              )`
            : `linear-gradient(
                145deg,
                #b8d4f0 0%,
                #a8c8eb 20%,
                #8ab8e6 40%,
                #7aaee0 60%,
                #9ac0e8 80%,
                #c5daf2 100%
              )`,
        }}
      />
      
      {/* Luminous gradient overlays - like light reflections */}
      <div 
        className="fixed inset-0 -z-40 transition-transform duration-1000"
        style={{
          background: isDark
            ? `
                radial-gradient(ellipse 70% 50% at ${65 + parallaxOffset * 0.02}% ${25 + parallaxOffset * 0.01}%, rgba(100, 130, 220, 0.5) 0%, transparent 50%),
                radial-gradient(ellipse 50% 40% at ${25 - parallaxOffset * 0.015}% ${70 + parallaxOffset * 0.02}%, rgba(80, 80, 180, 0.35) 0%, transparent 45%),
                radial-gradient(ellipse 60% 35% at ${50 + parallaxOffset * 0.01}% ${50}%, rgba(90, 110, 200, 0.25) 0%, transparent 40%)
              `
            : `
                radial-gradient(ellipse 70% 50% at ${65 + parallaxOffset * 0.02}% ${25 + parallaxOffset * 0.01}%, rgba(255, 255, 255, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse 50% 40% at ${25 - parallaxOffset * 0.015}% ${70 + parallaxOffset * 0.02}%, rgba(200, 220, 255, 0.4) 0%, transparent 45%),
                radial-gradient(ellipse 60% 35% at ${50 + parallaxOffset * 0.01}% ${50}%, rgba(180, 200, 240, 0.3) 0%, transparent 40%)
              `,
        }}
      />

      {/* Subtle grain texture overlay */}
      <div 
        className="fixed inset-0 -z-30 pointer-events-none"
        style={{
          opacity: isDark ? 0.04 : 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Lightning flash overlay */}
      <div 
        className={`fixed inset-0 -z-25 pointer-events-none transition-opacity duration-50 ${
          lightningFlash ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: isDark
            ? `radial-gradient(ellipse 100% 100% at 50% 30%, rgba(200, 210, 255, 0.25) 0%, transparent 60%)`
            : `radial-gradient(ellipse 100% 100% at 50% 30%, rgba(255, 255, 255, 0.5) 0%, transparent 60%)`,
        }}
      />

      {/* Animated subtle glow spots */}
      <div className="fixed inset-0 -z-35 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[700px] h-[700px] rounded-full animate-pulse"
          style={{
            background: isDark 
              ? 'radial-gradient(circle, rgba(100, 120, 200, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
            opacity: isDark ? 0.25 : 0.5,
            top: '5%',
            right: '-15%',
            animationDuration: '10s',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full animate-pulse"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(80, 90, 170, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(200, 220, 255, 0.35) 0%, transparent 70%)',
            opacity: isDark ? 0.2 : 0.4,
            bottom: '15%',
            left: '-8%',
            animationDuration: '14s',
            animationDelay: '3s',
          }}
        />
      </div>
    </>
  )
}
