import type { Locale } from './i18n'

export interface BlogParagraph {
  type: 'paragraph'
  text: Record<Locale, string>
}

export interface BlogHeading {
  type: 'heading'
  text: Record<Locale, string>
}

export interface BlogList {
  type: 'list'
  items: Record<Locale, string[]>
}

export interface BlogStats {
  type: 'stats'
  items: {
    value: Record<Locale, string>
    label: Record<Locale, string>
  }[]
}

export type BlogBlock = BlogParagraph | BlogHeading | BlogList | BlogStats

export interface BlogPost {
  slug: string
  category: Record<Locale, string>
  title: Record<Locale, string>
  excerpt: Record<Locale, string>
  date: string
  readingTime: number
  blocks: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'quest-ce-que-grom-agency',
    date: '2026-06-01',
    readingTime: 3,
    category: {
      fr: 'À propos',
      rs: 'O nama',
      en: 'About',
    },
    title: {
      fr: "Qu'est-ce que Grom Agency ?",
      rs: 'Šta je Grom Agency?',
      en: 'What is Grom Agency?',
    },
    excerpt: {
      fr: "La première agence d'influence marketing franco-balkanique, fondée en 2025 à Paris. On sélectionne, on gère, on délivre.",
      rs: 'Prva francusko-balkanska agencija za influens marketing, osnovana 2025. u Parizu. Biramo, upravljamo, isporučujemo.',
      en: 'The first Franco-Balkan influencer marketing agency, founded in 2025 in Paris. We select, we manage, we deliver.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "Grom Agency est la première agence d'influence marketing franco-balkanique, basée à Paris et fondée en 2025 par Nikola Tolomanoski et Miona. Nous sommes spécialisés dans la connexion entre marques françaises et créateurs de contenu de Serbie, Croatie, Bosnie et Macédoine.",
          rs: 'Grom Agency je prva francusko-balkanska agencija za influens marketing, sa sedištem u Parizu, osnovana 2025. od strane Nikole Tolomanoskog i Mione. Specijalizovani smo za povezivanje francuskih brendova sa kreatorima sadržaja iz Srbije, Hrvatske, Bosne i Makedonije.',
          en: 'Grom Agency is the first Franco-Balkan influencer marketing agency, based in Paris and founded in 2025 by Nikola Tolomanoski and Miona. We specialize in connecting French brands with content creators in Serbia, Croatia, Bosnia and Macedonia.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Notre histoire',
          rs: 'Naša priča',
          en: 'Our story',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Grom Agency est née d'un constat simple : les Balkans sont l'un des marchés d'influence les plus dynamiques d'Europe, et pourtant aucune agence française ne s'y est encore positionnée. Le nom Grom signifie tonnerre en serbe. C'est exactement l'effet que nous voulons produire pour les marques qui font confiance au marché balkanique.",
          rs: 'Grom Agency je nastao iz jednostavnog zapažanja: Balkan je jedno od najdinamičnijih influens tržišta u Evropi, a ipak nijedna francuska agencija se još nije pozicionirala. Ime Grom znači grmljavina na srpskom. To je tačno efekat koji želimo da postignemo za brendove koji veruju balkanskom tržištu.',
          en: 'Grom Agency was born from a simple observation: the Balkans are one of the most dynamic influence markets in Europe, yet no French agency has positioned itself there. The name Grom means thunder in Serbian. That is exactly the effect we want to produce for brands that trust the Balkan market.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Notre mission',
          rs: 'Naša misija',
          en: 'Our mission',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Connecter les marques françaises aux créateurs balkaniques les plus influents. Sélectionner. Gérer. Délivrer. Nous prenons en charge l'intégralité du processus : identification des créateurs, négociation des conditions, briefing, validation du contenu, suivi des performances et reporting.",
          rs: 'Povezati francuske brendove sa najuticajnijim balkanskim kreatorima. Birati. Upravljati. Isporučivati. Preuzimamo ceo proces: identifikaciju kreatora, pregovaranje uslova, brifing, validaciju sadržaja, praćenje performansi i izveštavanje.',
          en: 'Connect French brands with the most influential Balkan creators. Select. Manage. Deliver. We handle the entire process: creator identification, terms negotiation, briefing, content validation, performance tracking and reporting.',
        },
      },
    ],
  },
  {
    slug: 'cout-campagne-influence-balkans',
    date: '2026-06-02',
    readingTime: 2,
    category: {
      fr: 'Tarifs',
      rs: 'Cene',
      en: 'Pricing',
    },
    title: {
      fr: "Combien coûte une campagne d'influence dans les Balkans ?",
      rs: 'Koliko košta influens kampanja na Balkanu?',
      en: 'How much does an influencer campaign in the Balkans cost?',
    },
    excerpt: {
      fr: "Une tarification sur mesure, structurellement 3 à 5 fois moins chère qu'une activation française équivalente.",
      rs: 'Cene po meri, strukturno 3 do 5 puta jeftinije od ekvivalentne francuske aktivacije.',
      en: 'Custom pricing, structurally 3 to 5 times cheaper than an equivalent French activation.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "La tarification est établie sur mesure selon le nombre de créateurs, les formats de contenu et les objectifs de la campagne. Les coûts restent structurellement 3 à 5 fois inférieurs aux équivalents français, quel que soit le périmètre du projet.",
          rs: 'Cene se utvrđuju po meri, u zavisnosti od broja kreatora, formata sadržaja i ciljeva kampanje. Troškovi ostaju strukturno 3 do 5 puta niži od francuskih ekvivalenata, bez obzira na obim projekta.',
          en: 'Pricing is established on a custom basis depending on the number of creators, content formats, and campaign objectives. Costs remain structurally 3 to 5 times lower than French equivalents, regardless of the project scope.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Les coûts sont 3 à 5 fois inférieurs à ceux du marché français, pour un reach authentique sur des marchés encore vierges. C'est l'un des principaux avantages d'une activation balkanique.",
          rs: 'Troškovi su 3 do 5 puta niži od francuskog tržišta, uz autentičan domet na još netaknutim tržištima. To je jedna od glavnih prednosti balkanske aktivacije.',
          en: 'Costs are 3 to 5 times lower than the French market, for authentic reach in untapped markets. This is one of the main advantages of a Balkan activation.',
        },
      },
    ],
  },
  {
    slug: 'pourquoi-activer-marches-balkaniques',
    date: '2026-06-03',
    readingTime: 3,
    category: {
      fr: 'Stratégie',
      rs: 'Strategija',
      en: 'Strategy',
    },
    title: {
      fr: 'Pourquoi activer les marchés balkaniques pour une marque française ?',
      rs: 'Zašto aktivirati balkanska tržišta za francuski brend?',
      en: 'Why activate Balkan markets for a French brand?',
    },
    excerpt: {
      fr: "3,7 millions d'utilisateurs Instagram en Serbie, des coûts 3 à 5 fois inférieurs, et aucune agence française positionnée. Un avantage de premier entrant unique.",
      rs: '3,7 miliona Instagram korisnika u Srbiji, troškovi 3 do 5 puta niži, i nijedna francuska agencija pozicionirana. Jedinstvena prednost prvog igrača.',
      en: '3.7 million Instagram users in Serbia, costs 3 to 5 times lower, and no French agency positioned. A unique first-mover advantage.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "Les Balkans comptent 3,7 millions d'utilisateurs Instagram en Serbie seule. Le Made in France y est perçu comme un gage de qualité et de luxe accessible.",
          rs: 'Balkan broji 3,7 miliona Instagram korisnika samo u Srbiji. Made in France se tamo doživljava kao garancija kvaliteta i pristupačnog luksuza.',
          en: 'The Balkans count 3.7 million Instagram users in Serbia alone. Made in France is perceived there as a mark of quality and accessible luxury.',
        },
      },
      {
        type: 'stats',
        items: [
          {
            value: { fr: '3,7 millions', rs: '3,7 miliona', en: '3.7 million' },
            label: {
              fr: "Utilisateurs Instagram en Serbie",
              rs: 'Instagram korisnika u Srbiji',
              en: 'Instagram users in Serbia',
            },
          },
          {
            value: { fr: '3 à 5x', rs: '3 do 5x', en: '3 to 5x' },
            label: {
              fr: "Moins cher qu'une campagne française",
              rs: 'Jeftinije od francuske kampanje',
              en: 'Cheaper than a French campaign',
            },
          },
          {
            value: { fr: '2-3x', rs: '2-3x', en: '2-3x' },
            label: {
              fr: "Engagement vs benchmarks européens",
              rs: 'Angažovanje vs evropski benčmarkovi',
              en: 'Engagement vs European benchmarks',
            },
          },
          {
            value: { fr: '20 millions', rs: '20 miliona', en: '20 million' },
            label: {
              fr: 'Habitants jeunes et connectés',
              rs: 'Mladih i povezanih stanovnika',
              en: 'Young and connected inhabitants',
            },
          },
          {
            value: { fr: '0 agence', rs: '0 agencija', en: '0 agencies' },
            label: {
              fr: 'Concurrente française sur ce territoire',
              rs: 'Francuskih konkurenata na ovoj teritoriji',
              en: 'French competitors on this territory',
            },
          },
        ],
      },
      {
        type: 'paragraph',
        text: {
          fr: "Les coûts de campagne sont 3 à 5 fois inférieurs aux équivalents français, les taux d'engagement sont 2 à 3 fois supérieurs aux benchmarks européens, et aucune agence française n'est encore positionnée sur ce territoire. C'est un avantage de premier entrant unique.",
          rs: 'Troškovi kampanje su 3 do 5 puta niži od francuskih ekvivalenata, stope angažovanja su 2 do 3 puta veće od evropskih benčmarkova, i nijedna francuska agencija još nije pozicionirana na ovoj teritoriji. To je jedinstvena prednost prvog igrača.',
          en: 'Campaign costs are 3 to 5 times lower than French equivalents, engagement rates are 2 to 3 times higher than European benchmarks, and no French agency is yet positioned on this territory. It is a unique first-mover advantage.',
        },
      },
    ],
  },
  {
    slug: 'quels-createurs-travaillent-avec-grom',
    date: '2026-06-04',
    readingTime: 2,
    category: {
      fr: 'Créateurs',
      rs: 'Kreatori',
      en: 'Creators',
    },
    title: {
      fr: 'Quels créateurs travaillent avec Grom Agency ?',
      rs: 'Koji kreatori rade sa Grom Agency?',
      en: 'Which creators work with Grom Agency?',
    },
    excerpt: {
      fr: 'Des créateurs sélectionnés de 19K à 134K abonnés, plus de 900 000 comptes touchés par mois, et des collaborations avec Samsung, McDonald\'s, NYX et DM.',
      rs: 'Izabrani kreatori sa 19K do 134K pratilaca, preko 900.000 dosegnutih naloga mesečno, i saradnje sa Samsung, McDonald\'s, NYX i DM.',
      en: 'Selected creators from 19K to 134K followers, over 900,000 accounts reached per month, and collaborations with Samsung, McDonald\'s, NYX and DM.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "Grom Agency représente des créateurs sélectionnés en Serbie avec 19 000 à 134 000 abonnés Instagram, des taux d'engagement parmi les plus élevés d'Europe, et des collaborations établies avec des marques internationales comme Samsung, McDonald's, NYX et DM. Notre roster touche plus de 900 000 comptes par mois.",
          rs: 'Grom Agency predstavlja izabrane kreatore u Srbiji sa 19.000 do 134.000 Instagram pratilaca, stopama angažovanja među najvišima u Evropi, i uspostavljenim saradnjama sa međunarodnim brendovima poput Samsung, McDonald\'s, NYX i DM. Naš roster dosegne preko 900.000 naloga mesečno.',
          en: 'Grom Agency represents selected creators in Serbia with 19,000 to 134,000 Instagram followers, engagement rates among the highest in Europe, and established collaborations with international brands such as Samsung, McDonald\'s, NYX and DM. Our roster reaches over 900,000 accounts per month.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Notre équipe',
          rs: 'Naš tim',
          en: 'Our team',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Nikola Tolomanoski, Fondateur et Directeur — MBA Expert Marketing Digital, consultant avec une expérience en Meta Ads, SEO et stratégie d'influence. Biculturel franco-serbe, intervenant en école de commerce à Paris. Miona, Co-fondatrice et Relations Créateurs — créatrice de contenu lifestyle avec 19K abonnés Instagram et une présence active dans l'écosystème balkanique.",
          rs: 'Nikola Tolomanoski, Osnivač i Direktor — MBA stručnjak za digitalni marketing, konsultant sa iskustvom u Meta Ads, SEO i influens strategiji. Bikulturalan francusko-srpski, predavač na poslovnoj školi u Parizu. Miona, Suosnivačica i Odnosi sa kreatorima — kreatorka lifestyle sadržaja sa 19K Instagram pratilaca i aktivnim prisustvom u balkanskom ekosistemu.',
          en: 'Nikola Tolomanoski, Founder and Director — MBA Digital Marketing Expert, consultant with experience in Meta Ads, SEO and influence strategy. Bicultural Franco-Serbian, lecturer at a Paris business school. Miona, Co-founder and Creator Relations — lifestyle content creator with 19K Instagram followers and an active presence in the Balkan ecosystem.',
        },
      },
    ],
  },
  {
    slug: 'comment-se-passe-une-campagne',
    date: '2026-06-05',
    readingTime: 2,
    category: {
      fr: 'Méthode',
      rs: 'Metod',
      en: 'Method',
    },
    title: {
      fr: 'Comment se passe une campagne avec Grom Agency ?',
      rs: 'Kako izgleda kampanja sa Grom Agency?',
      en: 'How does a campaign with Grom Agency work?',
    },
    excerpt: {
      fr: "On prend en charge l'intégralité du processus : sélection, négociation, briefing, validation et reporting détaillé.",
      rs: 'Preuzimamo ceo proces: izbor, pregovaranje, brifing, validaciju i detaljno izveštavanje.',
      en: 'We handle the entire process: selection, negotiation, briefing, validation and detailed reporting.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "Grom Agency prend en charge l'intégralité du processus pour vous garantir une campagne fluide et performante, de la sélection à la livraison du rapport final.",
          rs: 'Grom Agency preuzima ceo proces kako bi vam garantovao tečnu i efikasnu kampanju, od izbora do isporuke završnog izveštaja.',
          en: 'Grom Agency handles the entire process to guarantee a smooth and high-performing campaign, from selection to delivery of the final report.',
        },
      },
      {
        type: 'list',
        items: {
          fr: [
            'Sélection des créateurs adaptés à vos objectifs',
            'Négociation des conditions et des tarifs',
            'Briefing créatif co-construit',
            'Validation du contenu avant publication',
            'Suivi des performances et rapport de campagne détaillé',
          ],
          rs: [
            'Izbor kreatora prilagođenih vašim ciljevima',
            'Pregovaranje uslova i cena',
            'Zajednički kreiran kreativni brifing',
            'Validacija sadržaja pre objavljivanja',
            'Praćenje performansi i detaljan izveštaj kampanje',
          ],
          en: [
            'Selection of creators aligned with your objectives',
            'Negotiation of terms and rates',
            'Co-built creative briefing',
            'Content validation before publishing',
            'Performance tracking and detailed campaign report',
          ],
        },
      },
    ],
  },
  {
    slug: 'quels-secteurs-travaillent-avec-grom',
    date: '2026-06-06',
    readingTime: 1,
    category: {
      fr: 'Secteurs',
      rs: 'Sektori',
      en: 'Industries',
    },
    title: {
      fr: 'Quels secteurs travaillent avec Grom Agency ?',
      rs: 'Koji sektori rade sa Grom Agency?',
      en: 'Which industries work with Grom Agency?',
    },
    excerpt: {
      fr: 'Beauté, soins capillaires, skincare, nutrition, lifestyle, mode et bien-être : tout produit adaptable à une audience jeune et connectée.',
      rs: 'Lepota, nega kose, skincare, nutricija, lifestyle, moda i wellness: svaki proizvod prilagodljiv mladoj i povezanoj publici.',
      en: 'Beauty, hair care, skincare, nutrition, lifestyle, fashion and wellness: any product adaptable to a young, connected audience.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: 'Beauté, soins capillaires, skincare, nutrition, lifestyle, mode, bien-être. Tout secteur dont les produits sont adaptables à une audience jeune, féminine et connectée dans les Balkans peut tirer profit d\'une activation avec Grom Agency.',
          rs: 'Lepota, nega kose, skincare, nutricija, lifestyle, moda, wellness. Svaki sektor čiji su proizvodi prilagodljivi mladoj, ženskoj i povezanoj publici na Balkanu može imati koristi od aktivacije sa Grom Agency.',
          en: 'Beauty, hair care, skincare, nutrition, lifestyle, fashion, wellness. Any industry whose products are adaptable to a young, female and connected audience in the Balkans can benefit from an activation with Grom Agency.',
        },
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
