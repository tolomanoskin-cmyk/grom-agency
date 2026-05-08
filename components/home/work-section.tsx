'use client'

import { useLanguage } from '@/components/language-provider'
import { ScrollAnimation } from '@/components/scroll-animation'

// Thunder progress bar component with continuous animation
function ThunderProgressBar({ progress, label }: { progress: number; label: string }) {
  return (
    <div className="relative w-full">
      {/* Background track */}
      <div className="h-6 sm:h-8 bg-slate-200/30 dark:bg-slate-800/30 rounded-full overflow-hidden border-2 border-slate-300/40 dark:border-white/15 shadow-inner">
        {/* Progress fill */}
        <div 
          className="h-full rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
          style={{ 
            width: `${progress}%`,
            background: 'linear-gradient(90deg, oklch(0.50 0.20 250), oklch(0.55 0.22 255), oklch(0.60 0.20 260), oklch(0.55 0.22 255), oklch(0.50 0.20 250))',
            backgroundSize: '200% 100%',
            animation: 'gradient-shift 3s ease infinite',
          }}
        >
          {/* Continuous shimmer effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.5) 75%, transparent 100%)',
              animation: 'shimmer 1.2s linear infinite',
            }}
          />
          
          {/* Electric spark particles */}
          <div className="absolute inset-0">
            <div 
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: '20%',
                top: '30%',
                animation: 'spark 0.8s ease-in-out infinite',
                boxShadow: '0 0 6px 2px rgba(255,255,255,0.8)',
              }}
            />
            <div 
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: '50%',
                top: '60%',
                animation: 'spark 1s ease-in-out infinite 0.3s',
                boxShadow: '0 0 6px 2px rgba(255,255,255,0.8)',
              }}
            />
            <div 
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: '75%',
                top: '40%',
                animation: 'spark 0.9s ease-in-out infinite 0.6s',
                boxShadow: '0 0 6px 2px rgba(255,255,255,0.8)',
              }}
            />
          </div>
          
          {/* Glow effect */}
          <div 
            className="absolute inset-0"
            style={{
              boxShadow: 'inset 0 2px 8px rgba(255,255,255,0.4), 0 0 30px oklch(0.55 0.22 255 / 0.6)',
            }}
          />
        </div>
      </div>
      
      {/* Percentage label */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm text-muted-foreground font-medium">
          {label}
        </span>
        <span className="text-lg sm:text-xl font-bold text-primary">
          {progress}%
        </span>
      </div>
    </div>
  )
}

export function WorkSection() {
  const { t, language } = useLanguage()

  const inProgress = language === 'rs' ? 'U toku...' : language === 'en' ? 'In progress...' : 'En cours...'

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollAnimation animation="fade-up">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-8 tracking-tight">
            {t('work.title')}
          </h2>
        </ScrollAnimation>

        {/* Progress Bar - larger and more prominent */}
        <ScrollAnimation animation="fade-up" delay={100}>
          <div className="max-w-2xl mx-auto">
            <ThunderProgressBar progress={73} label={inProgress} />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
