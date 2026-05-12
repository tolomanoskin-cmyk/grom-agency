'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right'
  once?: boolean
}

export function ScrollAnimation({ 
  children, 
  className,
  delay = 0,
  animation = 'fade-up',
  once = true
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, once])

  const animations = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      visible: 'opacity-100 translate-y-0'
    },
    'fade-in': {
      initial: 'opacity-0',
      visible: 'opacity-100'
    },
    'scale': {
      initial: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100'
    },
    'slide-left': {
      initial: 'opacity-0 -translate-x-8',
      visible: 'opacity-100 translate-x-0'
    },
    'slide-right': {
      initial: 'opacity-0 translate-x-8',
      visible: 'opacity-100 translate-x-0'
    }
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? animations[animation].visible : animations[animation].initial,
        className
      )}
    >
      {children}
    </div>
  )
}
