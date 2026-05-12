'use client'

import { useEffect, useState, useCallback } from 'react'

export function ThunderEffect() {
  const [flashes, setFlashes] = useState<{ id: number; x: number; y: number }[]>([])
  const [lastScrollY, setLastScrollY] = useState(0)

  const createFlash = useCallback(() => {
    const id = Date.now()
    const x = Math.random() * 100
    const y = Math.random() * 50

    setFlashes(prev => [...prev, { id, x, y }])
    
    // Remove flash after animation
    setTimeout(() => {
      setFlashes(prev => prev.filter(f => f.id !== id))
    }, 500)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = Math.abs(currentScrollY - lastScrollY)
      
      // Trigger thunder on fast scroll
      if (scrollDelta > 300) {
        createFlash()
        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, createFlash])

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {flashes.map(flash => (
        <div
          key={flash.id}
          className="absolute animate-lightning-bolt"
          style={{
            left: `${flash.x}%`,
            top: `${flash.y}%`,
          }}
        >
          {/* Lightning bolt SVG */}
          <svg
            width="60"
            height="120"
            viewBox="0 0 60 120"
            className="text-white/80 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          >
            <path
              d="M35 0 L25 45 L40 45 L20 120 L30 65 L15 65 L35 0"
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
        </div>
      ))}
      
      {/* Screen flash overlay */}
      {flashes.length > 0 && (
        <div 
          className="absolute inset-0 bg-white/10 animate-flash"
          style={{ animationDuration: '150ms' }}
        />
      )}
    </div>
  )
}
