'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage, type Language } from './language-provider'
import { Instagram, Linkedin, Globe, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CitySkyline } from './city-skyline'
import { useState, useRef, useEffect } from 'react'

const footerLinks = [
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

export function Footer() {
  const { language, setLanguage, t } = useLanguage()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find(l => l.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <footer className="relative overflow-hidden">
      {/* City skylines in background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-1/2 text-foreground/5">
          <CitySkyline city="paris" opacity={0.06} />
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 text-foreground/5">
          <CitySkyline city="belgrade" opacity={0.06} />
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${language}`} className="flex items-center gap-2 group mb-4">
              <div className="relative h-10 w-20 transition-transform group-hover:scale-105">
                <Image
                  src="/images/grom-logo.png"
                  alt="GROM"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/gromagency.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/gromagency"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20 transition-all hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold mb-4 tracking-tight">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${language}/${link.href}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/${language}/blog`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('footer.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4 tracking-tight">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="mailto:rs@grom-agency.com"
                  className="hover:text-foreground transition-colors"
                >
                  rs@grom-agency.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🇷🇸</span> Belgrade, Serbie
              </li>
              <li className="flex items-center gap-2">
                <span>🇫🇷</span> Paris, France
              </li>
            </ul>

            {/* Language Dropdown */}
            <div className="relative mt-6" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300',
                  'bg-muted/50 hover:bg-muted border border-transparent hover:border-primary/20',
                  dropdownOpen && 'bg-muted border-primary/30'
                )}
              >
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{currentLang.flag} {currentLang.label}</span>
                <ChevronDown className={cn(
                  'h-3 w-3 text-muted-foreground transition-transform duration-300',
                  dropdownOpen && 'rotate-180'
                )} />
              </button>

              {/* Dropdown Menu */}
              <div className={cn(
                'absolute bottom-full left-0 mb-2 py-2 w-40 rounded-xl overflow-hidden',
                'bg-card/95 backdrop-blur-xl border border-primary/20 shadow-xl shadow-primary/10',
                'transition-all duration-300 origin-bottom-left',
                dropdownOpen 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
              )}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setDropdownOpen(false)
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
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Grom Agency &mdash; grom-agency.com</p>
          <p>
            <a
              href="mailto:rs@grom-agency.com"
              className="hover:text-foreground transition-colors"
            >
              rs@grom-agency.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
