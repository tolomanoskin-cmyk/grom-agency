'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { useLanguage, type Language } from './language-provider'
import { Menu, X, Sun, Moon, Zap, ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: 'talents', key: 'nav.talents' },
  { href: 'marques', key: 'nav.brands' },
  { href: 'createurs', key: 'nav.creators' },
  { href: 'gromkulator', key: 'nav.gromkulator' },
  { href: 'contact', key: 'nav.contact' },
]

const languages: { code: Language; label: string; fullLabel: string; flag: string }[] = [
  { code: 'fr', label: 'FR', fullLabel: 'Français', flag: '🇫🇷' },
  { code: 'rs', label: 'RS', fullLabel: 'Srpski', flag: '🇷🇸' },
  { code: 'en', label: 'EN', fullLabel: 'English', flag: '🇬🇧' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find(l => l.code === language) || languages[0]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none">
      <nav
        className={cn(
          'mx-auto max-w-6xl transition-all duration-500 pointer-events-auto',
          'rounded-2xl border',
          scrolled
            ? 'bg-white/10 dark:bg-white/5 backdrop-blur-2xl border-white/30 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.1)_inset] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)_inset]'
            : 'bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border-white/20 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
        )}
        style={{
          background: scrolled 
            ? 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
        }}
      >
        {/* Glossy shine effect - subtle top line only */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-2xl" />
        
        <div className="relative flex h-14 items-center justify-between lg:h-16 px-4 sm:px-6">
          {/* Logo */}
          <Link href={`/${language}`} className="flex items-center gap-3 group">
            <div className="relative h-12 w-24 transition-transform group-hover:scale-105">
              <Image
                src="/images/grom-logo.png"
                alt="GROM"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const fullHref = `/${language}/${link.href}`
              const isActive = pathname === fullHref || pathname.endsWith(`/${link.href}`)
              return (
                <Link
                  key={link.href}
                  href={fullHref}
                  className={cn(
                    'relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary',
                    isActive
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  )}
                >
                  {t(link.key)}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Dropdown */}
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300',
                  'bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20',
                  langDropdownOpen && 'bg-muted border-primary/30'
                )}
              >
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{currentLang.flag} {currentLang.label}</span>
                <ChevronDown className={cn(
                  'h-3 w-3 text-muted-foreground transition-transform duration-300',
                  langDropdownOpen && 'rotate-180'
                )} />
              </button>

              {/* Dropdown Menu */}
              <div className={cn(
                'absolute top-full right-0 mt-2 py-2 w-44 rounded-2xl overflow-hidden glass',
                'transition-all duration-300 origin-top-right',
                langDropdownOpen 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              )}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setLangDropdownOpen(false)
                    }}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200',
                      language === lang.code
                        ? 'bg-primary/20 text-primary font-medium'
                        : 'text-foreground/80 hover:bg-muted hover:text-foreground'
                    )}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.fullLabel}</span>
                    {language === lang.code && (
                      <Zap className="h-3 w-3 ml-auto text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-muted/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>

    {/* Mobile Menu - separate floating panel */}
    <div className={cn(
      'fixed top-[88px] left-4 right-4 z-40 lg:hidden transition-all duration-500 rounded-2xl overflow-hidden',
      'bg-white/10 dark:bg-white/5 backdrop-blur-2xl border border-white/30 dark:border-white/15',
      'shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
      mobileMenuOpen 
        ? 'opacity-100 translate-y-0 pointer-events-auto' 
        : 'opacity-0 -translate-y-4 pointer-events-none'
    )}
    style={{
      background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
    }}
    >
      {/* Glossy shine */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => {
              const fullHref = `/${language}/${link.href}`
              const isActive = pathname === fullHref || pathname.endsWith(`/${link.href}`)
              return (
                <Link
                  key={link.href}
                  href={fullHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block text-lg font-medium py-3 transition-all duration-300',
                    isActive
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {t(link.key)}
                </Link>
              )
            })}
            
            {/* Mobile Language Switcher */}
            <div className="pt-4">
              <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                <Globe className="h-3 w-3" />
                {t('nav.language')}
              </p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300',
                      language === lang.code
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground/70 hover:bg-muted/80'
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.fullLabel}</span>
                  </button>
                ))}
              </div>
            </div>


      </div>
    </div>
    </>
  )
}
