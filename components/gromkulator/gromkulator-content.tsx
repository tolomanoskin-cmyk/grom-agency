'use client'

import { useState, useMemo } from 'react'
import { useLanguage } from '@/components/language-provider'
import { GlassCard } from '@/components/glass-card'
import { 
  Calculator, 
  Instagram, 
  Info, 
  RotateCcw,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Video,
  Image,
  Tv,
  Radio,
  Users,
  ChevronDown
} from 'lucide-react'
import { cn } from '@/lib/utils'

// TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

type Platform = 'instagram' | 'tiktok'
type Currency = 'EUR' | 'USD' | 'CHF' | 'RSD' | 'BAM' | 'MKD' | 'HRK'

interface ContentType {
  id: string
  label: string
  cpm: number
  icon: React.ReactNode
}

interface UGCOption {
  id: string
  label: { fr: string; rs: string; en: string }
  desc: { fr: string; rs: string; en: string }
  price: number
}

interface UsageRight {
  id: string
  label: { fr: string; rs: string; en: string }
  desc: { fr: string; rs: string; en: string }
  multiplier: number
}

// Content types per platform
const INSTAGRAM_CONTENT: ContentType[] = [
  { id: 'story', label: 'Story', cpm: 5, icon: <Tv className="h-4 w-4" /> },
  { id: 'post', label: 'Post', cpm: 8, icon: <Image className="h-4 w-4" /> },
  { id: 'carousel', label: 'Carrousel', cpm: 10, icon: <Image className="h-4 w-4" /> },
  { id: 'reel', label: 'Reel', cpm: 12, icon: <Video className="h-4 w-4" /> },
  { id: 'live', label: 'Live', cpm: 6, icon: <Radio className="h-4 w-4" /> },
  { id: 'collab', label: 'Collaboration', cpm: 15, icon: <Users className="h-4 w-4" /> },
]

const TIKTOK_CONTENT: ContentType[] = [
  { id: 'video', label: 'Video', cpm: 8, icon: <Video className="h-4 w-4" /> },
  { id: 'long_video', label: 'Long Video', cpm: 10, icon: <Video className="h-4 w-4" /> },
  { id: 'series', label: 'Series', cpm: 9, icon: <Tv className="h-4 w-4" /> },
  { id: 'live', label: 'Live', cpm: 5, icon: <Radio className="h-4 w-4" /> },
  { id: 'slideshow', label: 'Slideshow', cpm: 6, icon: <Image className="h-4 w-4" /> },
]

const UGC_OPTIONS: UGCOption[] = [
  { id: 'none', label: { fr: 'Aucun', rs: 'Bez', en: 'None' }, desc: { fr: 'Pas de contenu UGC', rs: 'Bez UGC sadrzaja', en: 'No UGC content' }, price: 0 },
  { id: 'basic', label: { fr: 'Video basique', rs: 'Osnovni video', en: 'Basic video' }, desc: { fr: 'Tournage simple, 15-30s', rs: 'Jednostavno snimanje, 15-30s', en: 'Simple shoot, 15-30s' }, price: 150 },
  { id: 'premium', label: { fr: 'Video premium', rs: 'Premium video', en: 'Premium video' }, desc: { fr: 'Montage pro, effets, 30-60s', rs: 'Pro montaza, efekti, 30-60s', en: 'Pro editing, effects, 30-60s' }, price: 250 },
  { id: 'review', label: { fr: 'Review produit', rs: 'Recenzija proizvoda', en: 'Product review' }, desc: { fr: 'Test produit authentique', rs: 'Autenticna recenzija', en: 'Authentic product test' }, price: 120 },
]

const USAGE_RIGHTS: UsageRight[] = [
  { id: 'organic', label: { fr: 'Organique (3 mois)', rs: 'Organski (3 meseca)', en: 'Organic (3 months)' }, desc: { fr: 'Usage sur le feed du createur uniquement', rs: 'Samo na feed-u kreatora', en: 'Creator feed only' }, multiplier: 0.5 },
  { id: 'paid3', label: { fr: 'Ads payantes (3 mois)', rs: 'Placeni oglasi (3 meseca)', en: 'Paid Ads (3 months)' }, desc: { fr: 'Reutilisation en publicite pendant 3 mois', rs: 'Ponovna upotreba u oglasima 3 meseca', en: 'Reuse in ads for 3 months' }, multiplier: 1 },
  { id: 'paid12', label: { fr: 'Ads payantes (12 mois)', rs: 'Placeni oglasi (12 meseci)', en: 'Paid Ads (12 months)' }, desc: { fr: 'Reutilisation illimitee pendant 1 an', rs: 'Neogranicena upotreba 1 godinu', en: 'Unlimited reuse for 1 year' }, multiplier: 1.5 },
]

// EMV values per platform
const EMV_VALUES = {
  instagram: { like: 0.15, comment: 1.5, view: 0.02, share: 1.5, save: 2 },
  tiktok: { like: 0.1, comment: 1, view: 0.015, share: 2, save: 1.5 },
}

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  EUR: '€',
  USD: '$',
  CHF: 'CHF',
  RSD: 'RSD',
  BAM: 'KM',
  MKD: 'ден',
  HRK: 'kn',
}

const CURRENCY_NAMES: Record<Currency, string> = {
  EUR: 'Euro',
  USD: 'Dollar US',
  CHF: 'Franc Suisse',
  RSD: 'Dinar Serbe',
  BAM: 'Mark Bosniaque',
  MKD: 'Denar Macedonien',
  HRK: 'Kuna Croate',
}

const CURRENCY_RATES: Record<Currency, number> = {
  EUR: 1,
  USD: 1.08,
  CHF: 0.95,
  RSD: 117.2,
  BAM: 1.96,
  MKD: 61.5,
  HRK: 7.53,
}

// Tooltip component
function Tooltip({ content, children }: { content: string; children: React.ReactNode }) {
  return (
    <div className="group relative inline-flex">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-3 text-xs rounded-xl bg-slate-900 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none max-w-xs text-left z-50 shadow-xl">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
      </div>
    </div>
  )
}

export function GromkulatorContent() {
  const { language } = useLanguage()
  
  // Profile data
  const [instagramFollowers, setInstagramFollowers] = useState(50000)
  const [tiktokFollowers, setTiktokFollowers] = useState(30000)
  
  // Content selection - multi-select
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>(['instagram'])
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>(['reel'])
  
  // Performance inputs
  const [views, setViews] = useState(10000)
  const [likes, setLikes] = useState(500)
  const [comments, setComments] = useState(50)
  const [shares, setShares] = useState(20)
  const [saves, setSaves] = useState(100)
  
  // Quote form
  // UGC & Usage rights
  const [ugcOption, setUgcOption] = useState('none')
  const [usageRight, setUsageRight] = useState('organic')
  
  // Currency
  const [currency, setCurrency] = useState<Currency>('EUR')
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false)

  // Get all available content types based on selected platforms
  const availableContentTypes = useMemo(() => {
    const types: typeof INSTAGRAM_CONTENT = []
    if (selectedPlatforms.includes('instagram')) {
      INSTAGRAM_CONTENT.forEach(c => {
        if (!types.find(t => t.id === c.id)) types.push(c)
      })
    }
    if (selectedPlatforms.includes('tiktok')) {
      TIKTOK_CONTENT.forEach(c => {
        if (!types.find(t => t.id === c.id)) types.push(c)
      })
    }
    return types.length > 0 ? types : INSTAGRAM_CONTENT
  }, [selectedPlatforms])

  const selectedUGC = UGC_OPTIONS.find(u => u.id === ugcOption) || UGC_OPTIONS[0]
  const selectedUsageRight = USAGE_RIGHTS.find(u => u.id === usageRight) || USAGE_RIGHTS[0]

  // Calculations - aggregate across all selected content types
  const calculations = useMemo(() => {
    const rate = CURRENCY_RATES[currency]
    
    // Get selected content items
    const selectedContents = availableContentTypes.filter(c => selectedContentTypes.includes(c.id))
    if (selectedContents.length === 0) {
      return {
        basePrice: 0,
        priceWithRights: 0,
        ugcCost: 0,
        finalPrice: 0,
        emv: 0,
        roi: 0,
      }
    }
    
    // Sum CPM for all selected content types
    const totalCpm = selectedContents.reduce((sum, c) => sum + c.cpm, 0)
    
    // Step 1: Base price (CPM model) - sum of all selected content types
    const basePrice = (views / 1000) * totalCpm
    
    // Step 2: Apply usage rights
    const priceWithRights = basePrice * selectedUsageRight.multiplier
    
    // Step 3: Add UGC
    const ugcPrice = selectedUGC.price
    const finalPrice = priceWithRights + ugcPrice
    
    // EMV Calculation - average across selected platforms
    let emv = 0
    selectedPlatforms.forEach(p => {
      const emvValues = EMV_VALUES[p]
      emv += 
        (likes * emvValues.like) +
        (comments * emvValues.comment) +
        (views * emvValues.view) +
        (shares * emvValues.share) +
        (saves * emvValues.save)
    })
    if (selectedPlatforms.length > 1) {
      emv = emv / selectedPlatforms.length
    }
    
    // ROI
    const roi = finalPrice > 0 ? emv / finalPrice : 0

    return {
      basePrice: basePrice * rate,
      priceWithRights: priceWithRights * rate,
      ugcCost: ugcPrice * rate,
      finalPrice: finalPrice * rate,
      emv: emv * rate,
      roi,
    }
  }, [views, availableContentTypes, selectedContentTypes, selectedUsageRight, selectedUGC, selectedPlatforms, likes, comments, shares, saves, currency])

  const handleReset = () => {
    setInstagramFollowers(50000)
    setTiktokFollowers(30000)
    setSelectedPlatforms(['instagram'])
    setSelectedContentTypes(['reel'])
    setViews(10000)
    setLikes(500)
    setComments(50)
    setShares(20)
    setSaves(100)
    setUgcOption('none')
    setUsageRight('organic')
  }

  const togglePlatform = (p: Platform) => {
    setSelectedPlatforms(prev => {
      if (prev.includes(p)) {
        // Don't allow deselecting all platforms
        if (prev.length === 1) return prev
        return prev.filter(x => x !== p)
      }
      return [...prev, p]
    })
  }

  const toggleContentType = (id: string) => {
    setSelectedContentTypes(prev => {
      if (prev.includes(id)) {
        // Don't allow deselecting all content types
        if (prev.length === 1) return prev
        return prev.filter(x => x !== id)
      }
      return [...prev, id]
    })
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : language === 'rs' ? 'sr-RS' : 'en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num)
  }

  const formatCurrency = (num: number) => {
    const symbol = CURRENCY_SYMBOLS[currency]
    return currency === 'CHF' ? `${formatNumber(num)} ${symbol}` : `${formatNumber(num)} ${symbol}`
  }

  const labels = {
    title: { fr: 'Gromkulator', rs: 'Gromkulator', en: 'Gromkulator' },
    subtitle: { 
      fr: 'Calculez le prix de votre campagne influence en temps reel', 
      rs: 'Izracunajte cenu vase influenser kampanje u realnom vremenu', 
      en: 'Calculate your influencer campaign pricing in real-time' 
    },
    profileData: { fr: 'Donnees du profil', rs: 'Podaci o profilu', en: 'Profile Data' },
    followers: { fr: 'Abonnes', rs: 'Pratioci', en: 'Followers' },
    contentSelection: { fr: 'Selection du contenu', rs: 'Izbor sadrzaja', en: 'Content Selection' },
    platformLabel: { fr: 'Plateforme', rs: 'Platforma', en: 'Platform' },
    contentType: { fr: 'Type de contenu', rs: 'Tip sadrzaja', en: 'Content Type' },
    performance: { fr: 'Performance estimee', rs: 'Procenjena performansa', en: 'Estimated Performance' },
    ugcOptions: { fr: 'Options UGC', rs: 'UGC opcije', en: 'UGC Options' },
    usageRights: { fr: 'Droits d\'utilisation', rs: 'Prava koriscenja', en: 'Usage Rights' },
    results: { fr: 'Resultats', rs: 'Rezultati', en: 'Results' },
    basePrice: { fr: 'Prix de base', rs: 'Osnovna cena', en: 'Base Price' },
    priceWithRights: { fr: 'Prix avec droits', rs: 'Cena sa pravima', en: 'Price with Rights' },
    ugcCost: { fr: 'Cout UGC', rs: 'UGC trosak', en: 'UGC Cost' },
    finalPrice: { fr: 'Prix final', rs: 'Konacna cena', en: 'Final Price' },
    emv: { fr: 'Valeur media gagnee (EMV)', rs: 'Zaradena medijska vrednost (EMV)', en: 'Earned Media Value (EMV)' },
    roi: { fr: 'Ratio ROI', rs: 'ROI odnos', en: 'ROI Ratio' },
    reset: { fr: 'Reinitialiser', rs: 'Resetuj', en: 'Reset' },
    cpmTooltip: { fr: 'Cout pour 1000 impressions', rs: 'Cena za 1000 prikaza', en: 'Cost per 1000 impressions' },
    emvTooltip: { 
      fr: 'L\'EMV (Earned Media Value) represente la valeur monetaire equivalente de l\'exposition organique generee par le contenu. Elle est calculee en fonction des likes, commentaires, partages, vues et sauvegardes, chacun ayant une valeur estimee basee sur les standards du marche.', 
      rs: 'EMV (Zaradena medijska vrednost) predstavlja novčanu vrednost organskog dosega koji sadržaj generiše. Računa se na osnovu lajkova, komentara, deljenja, pregleda i sačuvanih objava, gde svaki ima procenjenu vrednost prema tržišnim standardima.', 
      en: 'EMV (Earned Media Value) represents the monetary equivalent of organic exposure generated by the content. It is calculated based on likes, comments, shares, views and saves, each having an estimated value based on market standards.' 
    },
  }

  const t = (key: keyof typeof labels) => labels[key][language] || labels[key].en

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Calculator className="h-8 w-8" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Currency selector & Reset */}
        <div className="flex items-center justify-end gap-4 mb-6">
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium"
            >
              {CURRENCY_SYMBOLS[currency]} {currency}
              <ChevronDown className={cn("h-4 w-4 transition-transform", currencyDropdownOpen && "rotate-180")} />
            </button>
            {currencyDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 py-2 w-48 rounded-xl glass z-50 max-h-64 overflow-y-auto">
                {(['EUR', 'USD', 'CHF', 'RSD', 'BAM', 'MKD', 'HRK'] as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => { setCurrency(c); setCurrencyDropdownOpen(false); }}
                    className={cn(
                      "w-full px-4 py-2 text-left text-sm hover:bg-white/10 transition-colors",
                      currency === c && "text-primary font-medium"
                    )}
                  >
                    <span className="font-medium">{CURRENCY_SYMBOLS[c]}</span>
                    <span className="text-muted-foreground ml-2 text-xs">{CURRENCY_NAMES[c]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm font-medium hover:bg-white/10 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            {t('reset')}
          </button>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Panel - Inputs */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Data */}
            <GlassCard className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                {t('profileData')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Instagram className="h-4 w-4" />
                    Instagram {t('followers')}
                  </label>
                  <input
                    type="number"
                    value={instagramFollowers}
                    onChange={(e) => setInstagramFollowers(Math.max(0, parseInt(e.target.value) || 0))}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <TikTokIcon className="h-4 w-4" />
                    TikTok {t('followers')}
                  </label>
                  <input
                    type="number"
                    value={tiktokFollowers}
                    onChange={(e) => setTiktokFollowers(Math.max(0, parseInt(e.target.value) || 0))}
                    className="form-input"
                  />
                </div>
              </div>
            </GlassCard>

            {/* Content Selection */}
            <GlassCard className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                {t('contentSelection')}
              </h3>
              
              {/* Platform - Multi-select */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-3 block">
                  {t('platformLabel')}
                  <span className="text-muted-foreground text-xs ml-2">
                    {language === 'fr' ? '(multi-selection)' : language === 'rs' ? '(visestruki izbor)' : '(multi-select)'}
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['instagram', 'tiktok'] as Platform[]).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => togglePlatform(p)}
                      className={cn(
                        'flex items-center justify-center gap-3 p-4 rounded-xl border transition-all',
                        selectedPlatforms.includes(p)
                          ? 'bg-primary/10 border-primary text-primary'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      )}
                    >
                      {p === 'instagram' ? <Instagram className="h-5 w-5" /> : <TikTokIcon className="h-5 w-5" />}
                      <span className="font-medium capitalize">{p}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Type - Multi-select */}
              <div>
                <label className="text-sm font-medium mb-3 flex items-center gap-2">
                  {t('contentType')}
                  <span className="text-muted-foreground text-xs">
                    {language === 'fr' ? '(multi-selection)' : language === 'rs' ? '(visestruki izbor)' : '(multi-select)'}
                  </span>
                  <Tooltip content={t('cpmTooltip')}>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </Tooltip>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableContentTypes.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => toggleContentType(c.id)}
                      className={cn(
                        'flex flex-col items-center gap-2 p-4 rounded-xl border transition-all',
                        selectedContentTypes.includes(c.id)
                          ? 'bg-primary/10 border-primary text-primary'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      )}
                    >
                      {c.icon}
                      <span className="text-sm font-medium">{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </GlassCard>

            {/* Performance Inputs */}
            <GlassCard className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                {t('performance')}
                <Tooltip content={t('emvTooltip')}>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </Tooltip>
              </h3>
              
              <div className="space-y-6">
                {/* Views */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Eye className="h-4 w-4" />
                    Views: <span className="text-primary font-bold">{views.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    step="1000"
                    value={views}
                    onChange={(e) => setViews(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1K</span>
                    <span>1M</span>
                  </div>
                </div>

                {/* Likes */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <Heart className="h-4 w-4" />
                    Likes: <span className="text-primary font-bold">{likes.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="100"
                    value={likes}
                    onChange={(e) => setLikes(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Comments */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <MessageCircle className="h-4 w-4" />
                    Comments: <span className="text-primary font-bold">{comments.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="10"
                    value={comments}
                    onChange={(e) => setComments(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                </div>

                {/* Shares & Saves in grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Share2 className="h-4 w-4" />
                      Shares: <span className="text-primary font-bold">{shares}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="5"
                      value={shares}
                      onChange={(e) => setShares(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Bookmark className="h-4 w-4" />
                      Saves: <span className="text-primary font-bold">{saves}</span>
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="10"
                      value={saves}
                      onChange={(e) => setSaves(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* UGC Options */}
            <GlassCard className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4">{t('ugcOptions')}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {UGC_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setUgcOption(option.id)}
                    className={cn(
                      'p-4 rounded-xl border text-center transition-all',
                      ugcOption === option.id
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    )}
                  >
                    <span className="block text-sm font-medium">{option.label[language]}</span>
                    <span className="block text-[10px] text-muted-foreground mt-1 leading-tight">{option.desc[language]}</span>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Usage Rights */}
            <GlassCard className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4">{t('usageRights')}</h3>
              <p className="text-xs text-muted-foreground mb-4">
                {language === 'fr' ? 'Le multiplicateur indique comment le prix de base est ajuste selon les droits accordes a la marque.' : language === 'rs' ? 'Multiplikator pokazuje kako se osnovna cena prilagodava prema pravima koja se daju brendu.' : 'The multiplier shows how the base price is adjusted based on rights granted to the brand.'}
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {USAGE_RIGHTS.map((right) => (
                  <button
                    key={right.id}
                    type="button"
                    onClick={() => setUsageRight(right.id)}
                    className={cn(
                      'p-4 rounded-xl border text-center transition-all',
                      usageRight === right.id
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    )}
                  >
                    <span className="block text-sm font-medium">{right.label[language]}</span>
                    <span className="block text-[10px] text-muted-foreground mt-1 leading-tight">{right.desc[language]}</span>
                    <span className="block text-xs font-semibold mt-2 text-primary">x{right.multiplier}</span>
                  </button>
                ))}
              </div>
            </GlassCard>

          </div>

          {/* Right Panel - Results */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <GlassCard className="p-6" glow>
                <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  {t('results')}
                </h3>

                <div className="space-y-4">
                  
                  {/* Base Price */}
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-muted-foreground">{t('basePrice')}</span>
                    <span className="font-medium">{formatCurrency(calculations.basePrice)}</span>
                  </div>

                  {/* Price with Rights */}
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-muted-foreground">{t('priceWithRights')}</span>
                    <span className="font-medium">{formatCurrency(calculations.priceWithRights)}</span>
                  </div>

                  {/* UGC Cost */}
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-muted-foreground">{t('ugcCost')}</span>
                    <span className="font-medium">{formatCurrency(calculations.ugcCost)}</span>
                  </div>

                  {/* Final Price - Highlighted */}
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">{t('finalPrice')}</span>
                      <span className="text-2xl font-display font-bold text-primary">
                        {formatCurrency(calculations.finalPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* EMV & ROI - visible */}
              <GlassCard className="p-6">
                <div className="space-y-4">
                  {/* EMV */}
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">{t('emv')}</span>
                      <Tooltip content={t('emvTooltip')}>
                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                      </Tooltip>
                    </div>
                    <span className="font-semibold text-green-500">{formatCurrency(calculations.emv)}</span>
                  </div>

                  {/* ROI Ratio */}
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">{t('roi')}</span>
                    <span className={cn(
                      "font-semibold",
                      calculations.roi >= 1 ? "text-green-500" : "text-amber-500"
                    )}>
                      {calculations.roi.toFixed(2)}x
                    </span>
                  </div>

                  {/* ROI Visual */}
                  <div className="mt-4">
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={cn(
                          "h-full rounded-full transition-all duration-500",
                          calculations.roi >= 1 ? "bg-green-500" : "bg-amber-500"
                        )}
                        style={{ width: `${Math.min(100, calculations.roi * 50)}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      {calculations.roi >= 1 
                        ? (language === 'fr' ? 'Bon retour sur investissement' : language === 'rs' ? 'Dobar povrat ulaganja' : 'Good return on investment')
                        : (language === 'fr' ? 'ROI a ameliorer' : language === 'rs' ? 'ROI treba poboljsati' : 'ROI needs improvement')
                      }
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* CTA Section - Parlons-en ? */}
        <div className="max-w-4xl mx-auto mt-16">
          <GlassCard className="p-8 sm:p-12" glow>
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                {language === 'fr' 
                  ? 'Parlons-en ?' 
                  : language === 'rs' 
                  ? 'Da razgovaramo?' 
                  : 'Let\'s talk?'}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {language === 'fr' 
                  ? 'Vous avez un projet de campagne ? Notre equipe vous accompagne pour definir la strategie ideale.' 
                  : language === 'rs' 
                  ? 'Imate projekat kampanje? Nas tim ce vas voditi do idealne strategije.' 
                  : 'Have a campaign project? Our team will guide you to the ideal strategy.'}
              </p>
            </div>
            
            <form className="space-y-4 max-w-md mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={language === 'fr' ? 'Prenom' : language === 'rs' ? 'Ime' : 'First name'}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder={language === 'fr' ? 'Nom' : language === 'rs' ? 'Prezime' : 'Last name'}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <select
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                required
              >
                <option value="" className="bg-background">
                  {language === 'fr' ? 'Vous etes...' : language === 'rs' ? 'Vi ste...' : 'You are...'}
                </option>
                <option value="brand" className="bg-background">
                  {language === 'fr' ? 'Une marque' : language === 'rs' ? 'Brend' : 'A brand'}
                </option>
                <option value="agency" className="bg-background">
                  {language === 'fr' ? 'Une agence' : language === 'rs' ? 'Agencija' : 'An agency'}
                </option>
                <option value="creator" className="bg-background">
                  {language === 'fr' ? 'Un createur' : language === 'rs' ? 'Kreator' : 'A creator'}
                </option>
                <option value="other" className="bg-background">
                  {language === 'fr' ? 'Autre' : language === 'rs' ? 'Ostalo' : 'Other'}
                </option>
              </select>
              <textarea
                placeholder={language === 'fr' ? 'Parlez-nous de votre projet...' : language === 'rs' ? 'Recite nam o svom projektu...' : 'Tell us about your project...'}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <a
                href={`mailto:rs@grom-agency.com?subject=${encodeURIComponent(
                  language === 'fr' ? 'Demande depuis Gromkulator' : language === 'rs' ? 'Zahtev sa Gromkulatora' : 'Request from Gromkulator'
                )}`}
                className="btn-glossy w-full px-6 py-4 text-foreground text-base font-semibold flex items-center justify-center gap-2"
              >
                {language === 'fr' ? 'Envoyer ma demande' : language === 'rs' ? 'Posaljite zahtev' : 'Send my request'}
              </a>
            </form>
          </GlassCard>
        </div>

        {/* SEO Explanatory Text - Bottom */}
        <div className="max-w-4xl mx-auto mt-16">
          <GlassCard className="p-6 sm:p-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold mb-4 text-center">
              {language === 'fr' 
                ? 'Comment calculer le budget de votre campagne d\'influence marketing dans les Balkans ?' 
                : language === 'rs' 
                ? 'Kako izracunati budzet vase kampanje influens marketinga na Balkanu?' 
                : 'How to calculate your influencer marketing campaign budget in the Balkans?'}
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                {language === 'fr' 
                  ? 'Le Gromkulator est un outil gratuit de simulation de campagne d\'influence marketing specialise pour les marches balkaniques (Serbie, Croatie, Bosnie-Herzegovine, Montenegro, Macedoine du Nord). Il vous permet d\'estimer rapidement le cout et les performances potentielles de vos campagnes sur Instagram et TikTok.' 
                  : language === 'rs' 
                  ? 'Gromkulator je besplatan alat za simulaciju kampanja influens marketinga specijalizovan za balkanska trzista (Srbija, Hrvatska, Bosna i Hercegovina, Crna Gora, Severna Makedonija). Omogucava vam da brzo procenite troskove i potencijalne performanse vasih kampanja na Instagramu i TikToku.' 
                  : 'The Gromkulator is a free influencer marketing campaign simulation tool specialized for Balkan markets (Serbia, Croatia, Bosnia-Herzegovina, Montenegro, North Macedonia). It allows you to quickly estimate the cost and potential performance of your campaigns on Instagram and TikTok.'}
              </p>
              <p>
                {language === 'fr' 
                  ? 'Notre calculateur prend en compte plusieurs facteurs cles : le type de contenu (Story, Post, Reel, Video TikTok, Live...), le nombre d\'abonnes du createur, les options UGC (User Generated Content), et les droits d\'utilisation publicitaire. Les estimations sont basees sur les taux d\'engagement moyens observes sur les marches balkaniques.' 
                  : language === 'rs' 
                  ? 'Nas kalkulator uzima u obzir nekoliko kljucnih faktora: tip sadrzaja (Story, Post, Reel, TikTok Video, Live...), broj pratilaca kreatora, UGC opcije (User Generated Content) i prava koriscenja za oglasavanje. Procene se zasnivaju na prosecnim stopama angazovanja uocenim na balkanskim trzistima.' 
                  : 'Our calculator takes into account several key factors: content type (Story, Post, Reel, TikTok Video, Live...), creator follower count, UGC (User Generated Content) options, and advertising usage rights. Estimates are based on average engagement rates observed in Balkan markets.'}
              </p>
              <p>
                {language === 'fr' 
                  ? 'L\'EMV (Earned Media Value) represente la valeur mediatique equivalente de votre campagne, calculee a partir des interactions estimees (likes, commentaires, partages, vues, sauvegardes). C\'est un indicateur essentiel pour mesurer le retour sur investissement de vos collaborations avec des influenceurs dans les Balkans.' 
                  : language === 'rs' 
                  ? 'EMV (Earned Media Value) predstavlja ekvivalentnu medijsku vrednost vase kampanje, izracunatu na osnovu procenjenih interakcija (lajkovi, komentari, deljenja, pregledi, sacuvano). To je kljucni pokazatelj za merenje povrata investicije vasih saradnji sa influenserima na Balkanu.' 
                  : 'EMV (Earned Media Value) represents the equivalent media value of your campaign, calculated from estimated interactions (likes, comments, shares, views, saves). It\'s an essential indicator for measuring the return on investment of your collaborations with influencers in the Balkans.'}
              </p>
              <p className="font-medium text-foreground">
                {language === 'fr' 
                  ? 'Utilisez l\'outil ci-dessus pour configurer votre campagne et recevoir une estimation personnalisee. Pour un devis detaille adapte a vos objectifs, notre equipe basee a Paris et Belgrade est a votre disposition.' 
                  : language === 'rs' 
                  ? 'Koristite alat iznad da konfigurisete svoju kampanju i dobijete personalizovanu procenu. Za detaljnu ponudu prilagodjenu vasim ciljevima, nas tim sa sedistem u Parizu i Beogradu vam stoji na raspolaganju.' 
                  : 'Use the tool above to configure your campaign and receive a personalized estimate. For a detailed quote tailored to your objectives, our team based in Paris and Belgrade is at your service.'}
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
