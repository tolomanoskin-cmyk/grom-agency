'use client'

import { createContext, useContext, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import type { Locale } from '@/lib/i18n'

export type Language = Locale

interface Translations {
  [key: string]: {
    fr: string
    rs: string
    en: string
  }
}

export const translations: Translations = {
  // Navbar
  'nav.talents': { fr: 'Talents', rs: 'Talenti', en: 'Talents' },
  'nav.brands': { fr: 'Marques', rs: 'Brendovi', en: 'Brands' },
  'nav.creators': { fr: 'Créateurs', rs: 'Kreatori', en: 'Creators' },
  'nav.gromkulator': { fr: 'Gromkulator', rs: 'Gromkulator', en: 'Gromkulator' },
  'nav.contact': { fr: 'Contact', rs: 'Kontakt', en: 'Contact' },
  'nav.cta': { fr: 'Réserver un call', rs: 'Zakažite poziv', en: 'Book a call' },
  'nav.availability': { fr: '2 calls disponibles', rs: '2 poziva dostupna', en: '2 calls available' },
  'nav.language': { fr: 'Langue', rs: 'Jezik', en: 'Language' },
  
  // Hero
  'hero.title': { 
    fr: "L'agence d'influence qui fait entrer les marques françaises dans les Balkans.", 
    rs: 'Agencija za influens marketing koja uvodi francuske brendove na Balkanu.',
    en: 'The influence agency bringing French brands to the Balkans.'
  },
  'hero.scroll': { fr: 'Défiler', rs: 'Skroluj', en: 'Scroll' },
  
  // What we do
  'whatwedo.title': { 
    fr: 'Grom connecte les marques françaises aux créateurs de contenu balkaniques les plus influents. On sélectionne, on gère, on délivre.',
    rs: 'Grom povezuje francuske brendove sa najuticajnijim balkanskim kreatorima sadržaja. Biramo, upravljamo, isporučujemo.',
    en: 'Grom connects French brands with the most influential Balkan content creators. We select, we manage, we deliver.'
  },
  'whatwedo.brands.title': { fr: 'Pour les marques', rs: 'Za brendove', en: 'For brands' },
  'whatwedo.brands.desc': { 
    fr: "Votre marque mérite les Balkans. On s'en occupe.",
    rs: 'Vaš brend zaslužuje Balkan. Mi se brinemo o svemu.',
    en: 'Your brand deserves the Balkans. We handle it.'
  },
  'whatwedo.creators.title': { fr: 'Pour les créateurs', rs: 'Za kreatore', en: 'For creators' },
  'whatwedo.creators.desc': { 
    fr: 'Tes collabs, mieux négociées. Les marques françaises, à portée de main.',
    rs: 'Tvoje saradnje, bolje pregovarane. Francuski brendovi nadohvat ruke.',
    en: 'Your collabs, better negotiated. French brands within reach.'
  },
  
  // Talents
  'talents.title': { fr: 'Nos créateurs. Sélectionnés. Engagés. Authentiques.', rs: 'Naši kreatori. Izabrani. Posvećeni. Autentični.', en: 'Our creators. Selected. Engaged. Authentic.' },
  'talents.cta': { fr: 'Voir tous les talents', rs: 'Pogledaj sve talente', en: 'See all talents' },
  'talents.mystery': { 
    fr: 'Le prochain tonnerre, c\'est peut-être toi.',
    rs: 'Sledeća munja si možda ti.',
    en: 'The next thunder could be you.'
  },
  
  // Work
  'work.title': { fr: 'Nos campagnes arrivent. Le premier deal est en cours.', rs: 'Naše kampanje dolaze. Prvi ugovor je u toku.', en: 'Our campaigns are coming. The first deal is in progress.' },
  
  // Gromkulator teaser
  'gromkulator.teaser.title': { fr: 'Estimez votre campagne en 2 minutes.', rs: 'Procenite svoju kampanju za 2 minuta.', en: 'Estimate your campaign in 2 minutes.' },
  
  // Talents page
  'talents.page.title': { fr: 'Nos talents.', rs: 'Naši talenti.', en: 'Our talents.' },
  'talents.page.subtitle': { fr: 'Sélectionnés pour leur authenticité. Choisis pour leur impact.', rs: 'Izabrani zbog autentičnosti. Odabrani zbog uticaja.', en: 'Selected for their authenticity. Chosen for their impact.' },
  
  // Marques page
  'marques.title': { fr: 'Votre marque mérite les Balkans.', rs: 'Vaš brend zaslužuje Balkan.', en: 'Your brand deserves the Balkans.' },
  'marques.subtitle': { 
    fr: 'Un marché de 20M de consommatrices. Zéro concurrent français sérieux. On s\'en occupe.',
    rs: 'Tržište od 20M potrošača. Nula ozbiljnih francuskih konkurenata. Mi se brinemo.',
    en: 'A market of 20M consumers. Zero serious French competitors. We handle it.'
  },
  
  // Créateurs page
  'createurs.title': { fr: 'Tu crées. On gère.', rs: 'Ti stvaraš. Mi upravljamo.', en: 'You create. We manage.' },
  'createurs.subtitle': { 
    fr: 'Rejoins le réseau Grom et accède à des marques françaises prêtes à collaborer.',
    rs: 'Pridruži se Grom mreži i dobij pristup francuskim brendovima spremnim za saradnju.',
    en: 'Join the Grom network and access French brands ready to collaborate.'
  },
  
  // Gromkulator page
  'gromkulator.title': { fr: 'Gromkulator.', rs: 'Gromkulator.', en: 'Gromkulator.' },
  'gromkulator.subtitle': { 
    fr: 'Configurez votre campagne balkanique en 2 minutes. On vous envoie le devis.',
    rs: 'Konfigurišite svoju balkansku kampanju za 2 minuta. Šaljemo vam ponudu.',
    en: 'Configure your Balkan campaign in 2 minutes. We send you the quote.'
  },
  
  // Contact page
  'contact.title': { fr: 'On se parle ?', rs: 'Da popričamo?', en: 'Let\'s talk?' },
  'contact.subtitle': { 
    fr: 'Une question, un projet, une idée ? On répond sous 24h.',
    rs: 'Pitanje, projekat, ideja? Odgovaramo u roku od 24h.',
    en: 'A question, a project, an idea? We respond within 24h.'
  },
  
  // Form fields
  'form.firstname': { fr: 'Prénom', rs: 'Ime', en: 'First name' },
  'form.lastname': { fr: 'Nom', rs: 'Prezime', en: 'Last name' },
  'form.email': { fr: 'Email', rs: 'Email', en: 'Email' },
  'form.brand': { fr: 'Marque', rs: 'Brend', en: 'Brand' },
  'form.website': { fr: 'Site web', rs: 'Veb sajt', en: 'Website' },
  'form.budget': { fr: 'Budget approximatif', rs: 'Približan budžet', en: 'Approximate budget' },
  'form.message': { fr: 'Message (optionnel)', rs: 'Poruka (opciono)', en: 'Message (optional)' },
  'form.submit.contact': { fr: 'Nous contacter', rs: 'Kontaktirajte nas', en: 'Contact us' },
  'form.submit.join': { fr: 'Rejoindre', rs: 'Pridruži se', en: 'Join' },
  'form.submit.send': { fr: 'Envoyer', rs: 'Pošalji', en: 'Send' },
  'form.submit.quote': { fr: 'Recevoir mon devis', rs: 'Primi svoju ponudu', en: 'Get my quote' },
  'form.confirmation': { fr: 'On vous répond sous 24h.', rs: 'Odgovaramo u roku od 24h.', en: 'We respond within 24h.' },
  'form.instagram': { fr: 'Instagram handle', rs: 'Instagram nalog', en: 'Instagram handle' },
  'form.tiktok': { fr: 'TikTok handle', rs: 'TikTok nalog', en: 'TikTok handle' },
  'form.niche': { fr: 'Niche', rs: 'Niša', en: 'Niche' },
  'form.followers': { fr: 'Nombre de followers', rs: 'Broj pratilaca', en: 'Followers count' },
  'form.youare': { fr: 'Vous êtes', rs: 'Vi ste', en: 'You are' },
  'form.youare.brand': { fr: 'Une marque', rs: 'Brend', en: 'A brand' },
  'form.youare.creator': { fr: 'Un créateur', rs: 'Kreator', en: 'A creator' },
  'form.youare.other': { fr: 'Autre', rs: 'Drugo', en: 'Other' },
  
  // Footer
  'footer.tagline': { fr: 'Influence Marketing Balkans', rs: 'Influens Marketing Balkan', en: 'Influence Marketing Balkans' },
  'footer.blog': { fr: 'Blog', rs: 'Blog', en: 'Blog' },
  'footer.resources': { fr: 'Ressources', rs: 'Resursi', en: 'Resources' },

  // Blog
  'blog.title': { fr: 'Le Blog Grom', rs: 'Grom Blog', en: 'The Grom Blog' },
  'blog.subtitle': {
    fr: "Tout ce qu'il faut savoir sur l'influence marketing dans les Balkans.",
    rs: 'Sve što treba da znate o influens marketingu na Balkanu.',
    en: 'Everything you need to know about influencer marketing in the Balkans.',
  },
  'blog.readMore': { fr: "Lire l'article", rs: 'Pročitaj članak', en: 'Read article' },
  'blog.backToBlog': { fr: 'Retour au blog', rs: 'Nazad na blog', en: 'Back to blog' },
  'blog.readingTime': { fr: 'min de lecture', rs: 'min čitanja', en: 'min read' },
  'blog.relatedTitle': { fr: 'À lire aussi', rs: 'Pročitajte i', en: 'Read also' },
  'blog.ctaTitle': {
    fr: 'Prêt à activer les Balkans ?',
    rs: 'Spremni da aktivirate Balkan?',
    en: 'Ready to activate the Balkans?',
  },
  'blog.ctaSubtitle': {
    fr: 'Discutons de votre projet de campagne. Réponse sous 24h.',
    rs: 'Razgovarajmo o vašem projektu kampanje. Odgovor u roku od 24h.',
    en: "Let's discuss your campaign project. Response within 24h.",
  },
  'blog.ctaButton': { fr: 'Nous contacter', rs: 'Kontaktirajte nas', en: 'Contact us' },
  'blog.searchPlaceholder': {
    fr: 'Rechercher un article...',
    rs: 'Pretražite članak...',
    en: 'Search an article...',
  },
  'blog.filterAll': { fr: 'Tous', rs: 'Svi', en: 'All' },
  'blog.noResults': {
    fr: 'Aucun article ne correspond à votre recherche.',
    rs: 'Nijedan članak ne odgovara vašoj pretrazi.',
    en: 'No article matches your search.',
  },
  'blog.resultsCount': {
    fr: 'article(s)',
    rs: 'članak(a)',
    en: 'article(s)',
  },
  'blog.clearFilters': { fr: 'Réinitialiser', rs: 'Poništi', en: 'Reset' },
  
  // Gromkulator steps
  'gromkulator.step1': { fr: 'Nombre de créateurs', rs: 'Broj kreatora', en: 'Number of creators' },
  'gromkulator.step2': { fr: 'Plateformes', rs: 'Platforme', en: 'Platforms' },
  'gromkulator.step3': { fr: 'Formats', rs: 'Formati', en: 'Formats' },
  'gromkulator.step4': { fr: 'Droits d\'utilisation', rs: 'Prava korišćenja', en: 'Usage rights' },
  'gromkulator.organic': { fr: 'Organique', rs: 'Organsko', en: 'Organic' },
  'gromkulator.paid3': { fr: 'Payant 3 mois', rs: 'Plaćeno 3 meseca', en: 'Paid 3 months' },
  'gromkulator.paid12': { fr: 'Payant 12 mois', rs: 'Plaćeno 12 meseci', en: 'Paid 12 months' },
  'gromkulator.result': { fr: 'Estimation', rs: 'Procena', en: 'Estimate' },
  
  // Creator services
  'services.1': { fr: 'On gère toutes tes demandes de collaboration entrantes', rs: 'Upravljamo svim tvojim dolazećim zahtevima za saradnju', en: 'We manage all your incoming collaboration requests' },
  'services.2': { fr: 'On négocie les tarifs en ton nom', rs: 'Pregovaramo cene u tvoje ime', en: 'We negotiate rates on your behalf' },
  'services.3': { fr: 'On t\'apporte des marques françaises', rs: 'Donosimo ti francuske brendove', en: 'We bring you French brands' },
  'services.4': { fr: 'On co-construit le brief avec toi', rs: 'Zajedno sa tobom kreiramo brief', en: 'We co-create the brief with you' },
  'services.5': { fr: 'On te conseille sur ton image et ta présence en ligne', rs: 'Savetujemo te o tvom imidžu i onlajn prisustvu', en: 'We advise you on your image and online presence' },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
  initialLocale?: Language
}

export function LanguageProvider({ children, initialLocale = 'fr' }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLocale)
  const router = useRouter()
  const pathname = usePathname()

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    // Navigate to the new locale URL
    const segments = pathname.split('/')
    segments[1] = lang // Replace the locale segment
    router.push(segments.join('/'))
  }

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language] || translation.fr || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
