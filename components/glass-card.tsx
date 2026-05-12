'use client'

import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'strong' | 'subtle'
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ 
  children, 
  className, 
  variant = 'default',
  hover = true,
  glow = false 
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-3xl transition-all duration-500',
        variant === 'default' && 'glass',
        variant === 'strong' && 'glass-strong',
        variant === 'subtle' && 'backdrop-blur-xl bg-card/50 border border-border/50',
        hover && 'hover:scale-[1.02] hover:shadow-2xl',
        glow && 'shadow-[0_0_40px_oklch(0.55_0.12_250_/_0.2)]',
        className
      )}
    >
      {children}
    </div>
  )
}

// Floating badge component like in the inspiration
interface FloatingBadgeProps {
  children: ReactNode
  className?: string
  icon?: ReactNode
}

export function FloatingBadge({ children, className, icon }: FloatingBadgeProps) {
  return (
    <div className={cn('badge-float', className)}>
      {icon && <span className="text-primary">{icon}</span>}
      {children}
    </div>
  )
}
