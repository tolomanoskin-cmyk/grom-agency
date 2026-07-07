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

export interface BlogCta {
  type: 'cta'
  text: Record<Locale, string>
  buttonLabel: Record<Locale, string>
  href: 'contact' | 'gromkulator'
}

export type BlogBlock = BlogParagraph | BlogHeading | BlogList | BlogStats | BlogCta

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
  {
    slug: 'lancer-marque-francaise-serbie',
    date: '2026-06-10',
    readingTime: 6,
    category: {
      fr: 'Guide',
      rs: 'Vodič',
      en: 'Guide',
    },
    title: {
      fr: 'Comment lancer sa marque française en Serbie en 2026',
      rs: 'Kako lansirati francuski brend u Srbiji 2026',
      en: 'How to launch your French brand in Serbia in 2026',
    },
    excerpt: {
      fr: "Étapes, coûts et erreurs à éviter pour réussir votre implantation sur le marché serbe en 2026.",
      rs: 'Koraci, troškovi i greške koje treba izbeći za uspešan ulazak na srpsko tržište 2026.',
      en: 'Steps, costs and mistakes to avoid to succeed with your launch on the Serbian market in 2026.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "La Serbie n'est plus un marché exotique réservé aux multinationales. C'est devenu le prochain territoire à conquérir pour les marques françaises qui veulent grandir sans exploser leur budget. Voici le guide complet pour comprendre comment y aller, avec qui et pour combien.",
          rs: 'Srbija više nije egzotično tržište rezervisano za multinacionalne kompanije. Postala je sledeća teritorija za osvajanje za francuske brendove koji žele da rastu bez probijanja budžeta. Evo kompletnog vodiča da razumete kako da uđete, sa kim i za koliko.',
          en: 'Serbia is no longer an exotic market reserved for multinationals. It has become the next territory to conquer for French brands that want to grow without blowing their budget. Here is the complete guide to understand how to get there, with whom and for how much.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Pourquoi la Serbie attire les marques françaises en 2026',
          rs: 'Zašto Srbija privlači francuske brendove 2026',
          en: 'Why Serbia attracts French brands in 2026',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "La Serbie compte 6,9 millions d'habitants dont 3,7 millions d'utilisateurs Instagram actifs. Le taux de pénétration des réseaux sociaux dépasse la moitié de la population, avec un engagement organique deux à trois fois supérieur aux moyennes françaises. Le made in France y est perçu comme un gage de qualité et de sophistication, exactement au même niveau que les produits allemands ou italiens.",
          rs: 'Srbija broji 6,9 miliona stanovnika, od kojih je 3,7 miliona aktivnih Instagram korisnika. Stopa penetracije društvenih mreža premašuje polovinu populacije, uz organsko angažovanje dva do tri puta veće od francuskih proseka. Made in France se tamo doživljava kao garancija kvaliteta i sofisticiranosti, na potpuno istom nivou kao nemački ili italijanski proizvodi.',
          en: 'Serbia has 6.9 million inhabitants, including 3.7 million active Instagram users. Social media penetration exceeds half of the population, with organic engagement two to three times higher than French averages. Made in France is perceived there as a mark of quality and sophistication, at exactly the same level as German or Italian products.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Yves Rocher est présent physiquement à Belgrade depuis des années, dans deux centres commerciaux majeurs. La preuve que les Serbes achètent et apprécient les marques françaises. Ce qui manque à la plupart des marques, c'est simplement la prise de parole locale et la présence digitale sur ce marché.",
          rs: 'Yves Rocher je fizički prisutan u Beogradu godinama, u dva velika tržna centra. Dokaz da Srbi kupuju i cene francuske brendove. Ono što nedostaje većini brendova je jednostavno lokalno prisustvo i digitalna vidljivost na ovom tržištu.',
          en: 'Yves Rocher has been physically present in Belgrade for years, in two major shopping centers. Proof that Serbs buy and appreciate French brands. What most brands lack is simply local communication and digital presence on this market.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Les trois erreurs qui font échouer une implantation en Serbie',
          rs: 'Tri greške zbog kojih propada ulazak na srpsko tržište',
          en: 'The three mistakes that make a Serbian launch fail',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "La première erreur consiste à croire que l'influence seule suffit. Une campagne sans circuit de distribution génère de la notoriété sans conversion. Avant de lancer quoi que ce soit, assurez-vous que votre produit est accessible en Serbie, via un importateur local ou un e-commerce qui livre sur place.",
          rs: 'Prva greška je verovanje da je influens sam po sebi dovoljan. Kampanja bez distributivnog kanala stvara prepoznatljivost bez konverzije. Pre nego što bilo šta lansirate, uverite se da je vaš proizvod dostupan u Srbiji, preko lokalnog uvoznika ili e-trgovine koja isporučuje na licu mesta.',
          en: 'The first mistake is believing that influence alone is enough. A campaign without a distribution channel generates awareness without conversion. Before launching anything, make sure your product is accessible in Serbia, through a local importer or an e-commerce that delivers there.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "La deuxième erreur est d'utiliser des créateurs français pour parler à un public serbe. L'authenticité est la clé de l'engagement dans les Balkans. Un créateur local qui parle la langue et connaît les codes culturels convertit infiniment mieux qu'un influenceur français sous-titré.",
          rs: 'Druga greška je korišćenje francuskih kreatora za obraćanje srpskoj publici. Autentičnost je ključ angažovanja na Balkanu. Lokalni kreator koji govori jezik i poznaje kulturne kodove konvertuje beskrajno bolje od titlovanog francuskog influensera.',
          en: 'The second mistake is using French creators to speak to a Serbian audience. Authenticity is the key to engagement in the Balkans. A local creator who speaks the language and knows the cultural codes converts infinitely better than a subtitled French influencer.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "La troisième erreur est de négliger la distribution physique. Les Serbes achètent encore majoritairement en magasin pour la beauté, la nutrition et le lifestyle. Les enseignes comme Lilly, DM, Jasmin ou les grandes surfaces sont vos portes d'entrée.",
          rs: 'Treća greška je zanemarivanje fizičke distribucije. Srbi i dalje većinom kupuju u prodavnicama kada je reč o lepoti, nutriciji i lifestyle-u. Lanci poput Lilly, DM, Jasmin ili veliki marketi su vaša ulazna vrata.',
          en: 'The third mistake is neglecting physical distribution. Serbs still mostly buy in-store for beauty, nutrition and lifestyle. Chains like Lilly, DM, Jasmin or large retailers are your entry points.',
        },
      },
      {
        type: 'cta',
        href: 'contact',
        text: {
          fr: "Vous envisagez d'exporter votre marque en Serbie ? Grom Agency vous accompagne de la stratégie à l'activation locale.",
          rs: 'Razmišljate o izvozu vašeg brenda u Srbiju? Grom Agency vas prati od strategije do lokalne aktivacije.',
          en: 'Considering exporting your brand to Serbia? Grom Agency supports you from strategy to local activation.',
        },
        buttonLabel: {
          fr: 'Réservez un échange',
          rs: 'Zakažite razgovor',
          en: 'Book a call',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Les quatre étapes concrètes pour lancer votre marque',
          rs: 'Četiri konkretna koraka za lansiranje vašeg brenda',
          en: 'The four concrete steps to launch your brand',
        },
      },
      {
        type: 'list',
        items: {
          fr: [
            "Validez la demande. Analysez les créateurs locaux de votre secteur pour mesurer l'appétit du marché avant tout investissement.",
            "Trouvez un importateur ou un distributeur. La CCI France Serbie et le Service Économique de Belgrade sont les meilleures portes d'entrée pour identifier des partenaires fiables.",
            "Activez des créateurs locaux. En Serbie, un micro-influenceur de 20 000 abonnés peut toucher 900 000 comptes par mois grâce à un algorithme qui favorise le contenu organique.",
            "Mesurez et ajustez. Une campagne test de 30 jours vous donne des données réelles sur le reach, l'engagement et l'intérêt du marché.",
          ],
          rs: [
            'Potvrdite potražnju. Analizirajte lokalne kreatore u vašem sektoru da izmerite apetit tržišta pre bilo kakve investicije.',
            'Pronađite uvoznika ili distributera. Francusko-srpska privredna komora i Ekonomska služba u Beogradu su najbolja ulazna vrata za pronalaženje pouzdanih partnera.',
            'Aktivirajte lokalne kreatore. U Srbiji, mikro-influenser sa 20.000 pratilaca može dosegnuti 900.000 naloga mesečno zahvaljujući algoritmu koji favorizuje organski sadržaj.',
            'Merite i prilagođavajte. Test kampanja od 30 dana daje vam realne podatke o dosegu, angažovanju i interesovanju tržišta.',
          ],
          en: [
            'Validate demand. Analyze local creators in your sector to measure market appetite before any investment.',
            'Find an importer or distributor. The France-Serbia Chamber of Commerce and the Belgrade Economic Service are the best entry points to identify reliable partners.',
            'Activate local creators. In Serbia, a micro-influencer with 20,000 followers can reach 900,000 accounts per month thanks to an algorithm that favors organic content.',
            'Measure and adjust. A 30-day test campaign gives you real data on reach, engagement and market interest.',
          ],
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Combien coûte une implantation en Serbie ?',
          rs: 'Koliko košta ulazak na srpsko tržište?',
          en: 'How much does a launch in Serbia cost?',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Tester un marché de près de 7 millions d'habitants, présence digitale comprise, coûte une fraction du prix d'une implantation en Europe de l'Ouest. C'est précisément ce qui rend la Serbie si attractive pour une marque française en phase de croissance.",
          rs: 'Testiranje tržišta od skoro 7 miliona stanovnika, uključujući digitalno prisustvo, košta delić cene ulaska u zapadnu Evropu. To je upravo ono što Srbiju čini toliko privlačnom za francuski brend u fazi rasta.',
          en: 'Testing a market of nearly 7 million inhabitants, digital presence included, costs a fraction of the price of a Western European launch. This is precisely what makes Serbia so attractive for a French brand in a growth phase.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'FAQ',
          rs: 'Česta pitanja',
          en: 'FAQ',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Une marque française peut-elle réussir en Serbie ? Oui. Le made in France y bénéficie d'une image premium et la concurrence française reste très faible, ce qui laisse une fenêtre d'opportunité rare pour les premiers entrants.",
          rs: 'Može li francuski brend uspeti u Srbiji? Da. Made in France tamo uživa premium imidž, a francuska konkurencija ostaje veoma slaba, što ostavlja redak prozor prilike za prve igrače.',
          en: 'Can a French brand succeed in Serbia? Yes. Made in France enjoys a premium image there and French competition remains very weak, leaving a rare window of opportunity for first movers.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Faut-il parler serbe pour vendre en Serbie ? Pas nécessairement pour vous, mais votre contenu doit être en serbe et porté par des créateurs locaux pour convertir efficacement.",
          rs: 'Da li je potrebno govoriti srpski da biste prodavali u Srbiji? Ne nužno vi, ali vaš sadržaj mora biti na srpskom i vođen od strane lokalnih kreatora da bi efikasno konvertovao.',
          en: 'Do you need to speak Serbian to sell in Serbia? Not necessarily you, but your content must be in Serbian and carried by local creators to convert effectively.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Combien de temps pour voir des résultats ? Une campagne test donne des premiers signaux en 30 jours. Une implantation solide se construit sur 6 à 12 mois.",
          rs: 'Koliko vremena je potrebno da se vide rezultati? Test kampanja daje prve signale za 30 dana. Solidan ulazak na tržište gradi se tokom 6 do 12 meseci.',
          en: 'How long to see results? A test campaign gives first signals in 30 days. A solid launch is built over 6 to 12 months.',
        },
      },
      {
        type: 'cta',
        href: 'contact',
        text: {
          fr: "Grom Agency est la première agence d'influence franco-balkanique. On connecte votre marque aux créateurs et distributeurs serbes.",
          rs: 'Grom Agency je prva francusko-balkanska influens agencija. Povezujemo vaš brend sa srpskim kreatorima i distributerima.',
          en: 'Grom Agency is the first Franco-Balkan influence agency. We connect your brand with Serbian creators and distributors.',
        },
        buttonLabel: {
          fr: 'Contactez-nous',
          rs: 'Kontaktirajte nas',
          en: 'Contact us',
        },
      },
    ],
  },
  {
    slug: 'prix-influenceur-balkans',
    date: '2026-06-11',
    readingTime: 5,
    category: {
      fr: 'Tarifs',
      rs: 'Cene',
      en: 'Pricing',
    },
    title: {
      fr: 'Combien coûte un influenceur dans les Balkans en 2026 ?',
      rs: 'Koliko košta influenser na Balkanu 2026?',
      en: 'How much does an influencer cost in the Balkans in 2026?',
    },
    excerpt: {
      fr: "Les vrais tarifs des créateurs de contenu en Serbie et dans les Balkans, 3 à 5 fois moins chers qu'en France pour un meilleur engagement.",
      rs: 'Prave cene kreatora sadržaja u Srbiji i na Balkanu, 3 do 5 puta jeftinije nego u Francuskoj uz bolje angažovanje.',
      en: 'The real rates of content creators in Serbia and the Balkans, 3 to 5 times cheaper than in France for better engagement.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "C'est la première question que posent tous les responsables marketing quand on leur parle des Balkans. Voici une réponse transparente, avec les vrais chiffres du marché.",
          rs: 'To je prvo pitanje koje postavljaju svi marketing menadžeri kada im se govori o Balkanu. Evo transparentnog odgovora, sa pravim brojkama sa tržišta.',
          en: 'This is the first question every marketing manager asks when you talk to them about the Balkans. Here is a transparent answer, with the real market figures.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Pourquoi les créateurs balkaniques coûtent moins cher',
          rs: 'Zašto balkanski kreatori koštaju manje',
          en: 'Why Balkan creators cost less',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Les tarifs des créateurs sont liés au coût de la vie local et à la maturité du marché publicitaire. En Serbie, en Croatie, en Bosnie et en Macédoine, les deux sont inférieurs à la France. Résultat, des créateurs aux chiffres comparables aux standards français facturent trois à cinq fois moins cher.",
          rs: 'Cene kreatora povezane su sa lokalnim troškovima života i zrelošću oglasnog tržišta. U Srbiji, Hrvatskoj, Bosni i Makedoniji, oboje su niži nego u Francuskoj. Rezultat, kreatori sa brojkama uporedivim francuskim standardima naplaćuju tri do pet puta manje.',
          en: 'Creator rates are linked to the local cost of living and the maturity of the advertising market. In Serbia, Croatia, Bosnia and Macedonia, both are lower than in France. As a result, creators with figures comparable to French standards charge three to five times less.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Ce n'est pas une question de qualité. Ces créateurs collaborent déjà avec Samsung, McDonald's, DM ou Philips. Leur contenu est professionnel, leur audience est réelle et leur engagement est documenté.",
          rs: 'Nije reč o kvalitetu. Ovi kreatori već sarađuju sa Samsung, McDonald\'s, DM ili Philips. Njihov sadržaj je profesionalan, publika je stvarna, a angažovanje dokumentovano.',
          en: "It is not a question of quality. These creators already collaborate with Samsung, McDonald's, DM or Philips. Their content is professional, their audience is real and their engagement is documented.",
        },
      },
      {
        type: 'heading',
        text: {
          fr: "Les tarifs réels d'un créateur en Serbie",
          rs: 'Prave cene kreatora u Srbiji',
          en: 'The real rates of a creator in Serbia',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Pour un Reel Instagram, comptez entre 200 et 600 euros pour un créateur de 15 000 à 150 000 abonnés. Pour une Story, entre 80 et 200 euros. Pour un contenu TikTok, entre 150 et 500 euros selon le nombre de vues moyen. Ces tarifs incluent le brief, la production et la publication.",
          rs: 'Za Instagram Reel, računajte između 200 i 600 evra za kreatora sa 15.000 do 150.000 pratilaca. Za Story, između 80 i 200 evra. Za TikTok sadržaj, između 150 i 500 evra u zavisnosti od prosečnog broja pregleda. Ove cene uključuju brif, produkciju i objavljivanje.',
          en: 'For an Instagram Reel, expect between 200 and 600 euros for a creator with 15,000 to 150,000 followers. For a Story, between 80 and 200 euros. For TikTok content, between 150 and 500 euros depending on the average number of views. These rates include the brief, production and publication.',
        },
      },
      {
        type: 'cta',
        href: 'contact',
        text: {
          fr: "Vous voulez les tarifs exacts pour votre secteur ? Grom Agency vous fournit une grille personnalisée.",
          rs: 'Želite tačne cene za vaš sektor? Grom Agency vam pruža personalizovanu tabelu.',
          en: 'Want the exact rates for your sector? Grom Agency provides you with a personalized grid.',
        },
        buttonLabel: {
          fr: 'Demandez votre devis',
          rs: 'Zatražite ponudu',
          en: 'Request your quote',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Ce que vous obtenez réellement pour ce prix',
          rs: 'Šta zaista dobijate za tu cenu',
          en: 'What you actually get for this price',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Prenons un exemple concret. Un créateur lifestyle serbe de moins de 20 000 abonnés peut générer sur 30 jours plus de 900 000 comptes touchés, avec un taux d'engagement dépassant 17 pour cent, là où la moyenne française se situe entre 1 et 3 pour cent. La grande majorité de son audience touchée n'est même pas encore abonnée, ce qui signifie une exposition massive à de nouveaux clients potentiels.",
          rs: 'Uzmimo konkretan primer. Srpski lifestyle kreator sa manje od 20.000 pratilaca može za 30 dana da dosegne preko 900.000 naloga, uz stopu angažovanja veću od 17 procenata, dok se francuski prosek kreće između 1 i 3 procenta. Velika većina dosegnute publike nije čak ni pratilac, što znači masovnu izloženost novim potencijalnim klijentima.',
          en: 'Take a concrete example. A Serbian lifestyle creator with fewer than 20,000 followers can generate over 900,000 accounts reached in 30 days, with an engagement rate exceeding 17 percent, where the French average is between 1 and 3 percent. The vast majority of the audience reached is not even a follower yet, which means massive exposure to new potential customers.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'La comparaison France contre Balkans',
          rs: 'Poređenje Francuska protiv Balkana',
          en: 'The France versus Balkans comparison',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Pour une campagne de plusieurs Reels et Stories avec trois créateurs sur un mois, l'équivalent français coûterait entre 2 500 et 5 200 euros pour un reach similaire. La même campagne dans les Balkans représente un investissement nettement inférieur, avec un engagement supérieur et une audience encore vierge de saturation publicitaire.",
          rs: 'Za kampanju sa više Reels-a i Story-ja sa tri kreatora tokom mesec dana, francuski ekvivalent bi koštao između 2.500 i 5.200 evra za sličan doseg. Ista kampanja na Balkanu predstavlja znatno nižu investiciju, uz veće angažovanje i publiku još netaknutu oglasnom zasićenošću.',
          en: 'For a campaign of several Reels and Stories with three creators over one month, the French equivalent would cost between 2,500 and 5,200 euros for a similar reach. The same campaign in the Balkans represents a significantly lower investment, with higher engagement and an audience still untouched by advertising saturation.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'FAQ',
          rs: 'Česta pitanja',
          en: 'FAQ',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Un influenceur balkanique est-il moins performant qu'un français ? Non, au contraire. L'engagement organique y est plus élevé car le marché est moins saturé.",
          rs: 'Da li je balkanski influenser manje efikasan od francuskog? Ne, naprotiv. Organsko angažovanje je tamo veće jer je tržište manje zasićeno.',
          en: 'Is a Balkan influencer less effective than a French one? No, on the contrary. Organic engagement is higher there because the market is less saturated.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Faut-il passer par une agence ? Trouver les créateurs, vérifier leurs chiffres, gérer le brief et le suivi est un travail à plein temps sans connaissance du marché local. Une agence spécialisée sécurise la qualité et le résultat.",
          rs: 'Da li je potrebno raditi preko agencije? Pronalaženje kreatora, provera njihovih brojki, upravljanje brifom i praćenjem je posao sa punim radnim vremenom bez poznavanja lokalnog tržišta. Specijalizovana agencija osigurava kvalitet i rezultat.',
          en: 'Should you go through an agency? Finding creators, checking their figures, managing the brief and follow-up is a full-time job without knowledge of the local market. A specialized agency secures quality and results.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Quel budget minimum pour tester ? Une campagne test avec un créateur est accessible à partir de quelques centaines d'euros, ce qui en fait l'un des meilleurs ratios d'Europe.",
          rs: 'Koji je minimalni budžet za testiranje? Test kampanja sa jednim kreatorom dostupna je od nekoliko stotina evra, što je čini jednim od najboljih odnosa u Evropi.',
          en: 'What minimum budget to test? A test campaign with one creator is accessible from a few hundred euros, making it one of the best ratios in Europe.',
        },
      },
      {
        type: 'cta',
        href: 'contact',
        text: {
          fr: "Grom Agency gère vos campagnes d'influence dans les Balkans de A à Z.",
          rs: 'Grom Agency vodi vaše influens kampanje na Balkanu od A do Š.',
          en: 'Grom Agency manages your influence campaigns in the Balkans from A to Z.',
        },
        buttonLabel: {
          fr: 'Parlons de votre projet',
          rs: 'Razgovarajmo o projektu',
          en: "Let's talk about your project",
        },
      },
    ],
  },
  {
    slug: 'balkans-eldorado-marques-beaute-francaises',
    date: '2026-06-12',
    readingTime: 5,
    category: {
      fr: 'Stratégie',
      rs: 'Strategija',
      en: 'Strategy',
    },
    title: {
      fr: 'Pourquoi les Balkans sont le prochain eldorado des marques françaises de beauté',
      rs: 'Zašto je Balkan sledeći eldorado francuskih beauty brendova',
      en: 'Why the Balkans are the next eldorado for French beauty brands',
    },
    excerpt: {
      fr: "Marché vierge, image premium du made in France, coûts réduits : l'opportunité que 99 % des marques de beauté n'ont pas encore vue.",
      rs: 'Netaknuto tržište, premium imidž made in France, niži troškovi: prilika koju 99% beauty brendova još nije videlo.',
      en: 'Untapped market, premium image of made in France, reduced costs: the opportunity 99% of beauty brands have not yet seen.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "Pendant que toutes les marques françaises se battent sur un marché national saturé et un marché européen surchargé de concurrence, un territoire de 20 millions d'habitants attend, presque intact. Les Balkans. Voici pourquoi c'est l'opportunité que 99 pour cent des marques de beauté n'ont pas encore vue.",
          rs: 'Dok se svi francuski brendovi bore na zasićenom nacionalnom tržištu i evropskom tržištu preopterećenom konkurencijom, teritorija od 20 miliona stanovnika čeka, gotovo netaknuta. Balkan. Evo zašto je to prilika koju 99 procenata beauty brendova još nije videlo.',
          en: 'While all French brands are fighting on a saturated national market and a European market overloaded with competition, a territory of 20 million inhabitants is waiting, almost intact. The Balkans. Here is why it is the opportunity 99 percent of beauty brands have not yet seen.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: "Un marché de 20 millions d'habitants encore vierge",
          rs: 'Tržište od 20 miliona stanovnika još netaknuto',
          en: 'A market of 20 million inhabitants still untapped',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "La Serbie, la Croatie, la Bosnie et la Macédoine forment un ensemble de près de 20 millions de consommateurs jeunes, connectés et très actifs sur les réseaux sociaux. En Serbie seule, 3,7 millions de personnes utilisent Instagram chaque jour. Pourtant, presque aucune marque de beauté française n'y a construit de présence digitale locale.",
          rs: 'Srbija, Hrvatska, Bosna i Makedonija čine celinu od skoro 20 miliona mladih, povezanih i veoma aktivnih potrošača na društvenim mrežama. Samo u Srbiji, 3,7 miliona ljudi koristi Instagram svakog dana. Ipak, gotovo nijedan francuski beauty brend tamo nije izgradio lokalno digitalno prisustvo.',
          en: 'Serbia, Croatia, Bosnia and Macedonia form a group of nearly 20 million young, connected consumers who are very active on social media. In Serbia alone, 3.7 million people use Instagram every day. Yet almost no French beauty brand has built a local digital presence there.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Cette absence n'est pas un signe de désintérêt du marché. C'est une fenêtre. Les premières marques qui s'y positionneront construiront une communauté et une notoriété que leurs concurrentes devront ensuite racheter à prix fort.",
          rs: 'To odsustvo nije znak nezainteresovanosti tržišta. To je prozor. Prvi brendovi koji se tamo pozicioniraju izgradiće zajednicu i prepoznatljivost koju će njihovi konkurenti kasnije morati skupo da otkupe.',
          en: 'This absence is not a sign of market disinterest. It is a window. The first brands to position themselves there will build a community and awareness that their competitors will later have to buy back at a high price.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: "Le made in France, un atout de désir",
          rs: 'Made in France, adut poželjnosti',
          en: 'Made in France, an asset of desire',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Dans les Balkans, un produit de beauté français n'est pas un produit comme un autre. Il est perçu comme un objet de qualité, de sophistication et de désir. Une crème française s'offre comme un cadeau, un soin français se garde précieusement. Cette image premium, les marques françaises la possèdent déjà sans avoir à la construire. Il suffit de l'activer.",
          rs: 'Na Balkanu, francuski beauty proizvod nije proizvod kao svaki drugi. Doživljava se kao objekat kvaliteta, sofisticiranosti i poželjnosti. Francuska krema se poklanja kao dar, francuski tretman se čuva sa pažnjom. Taj premium imidž francuski brendovi već poseduju bez potrebe da ga grade. Dovoljno je aktivirati ga.',
          en: 'In the Balkans, a French beauty product is not a product like any other. It is perceived as an object of quality, sophistication and desire. A French cream is given as a gift, a French treatment is preciously kept. French brands already possess this premium image without having to build it. It just needs to be activated.',
        },
      },
      {
        type: 'cta',
        href: 'contact',
        text: {
          fr: "Votre marque de beauté mérite d'être découverte dans les Balkans. Grom Agency ouvre ce marché pour vous.",
          rs: 'Vaš beauty brend zaslužuje da bude otkriven na Balkanu. Grom Agency otvara ovo tržište za vas.',
          en: 'Your beauty brand deserves to be discovered in the Balkans. Grom Agency opens this market for you.',
        },
        buttonLabel: {
          fr: 'Réservez un échange',
          rs: 'Zakažite razgovor',
          en: 'Book a call',
        },
      },
      {
        type: 'heading',
        text: {
          fr: "Des coûts d'activation imbattables",
          rs: 'Nenadmašni troškovi aktivacije',
          en: 'Unbeatable activation costs',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Le deuxième argument est économique. Une campagne d'influence dans les Balkans coûte trois à cinq fois moins cher qu'en France pour un reach équivalent, avec un engagement organique supérieur. Pour une marque de beauté en croissance, c'est la possibilité de tester et de s'implanter sur un nouveau marché pour le prix d'une simple campagne locale.",
          rs: 'Drugi argument je ekonomski. Influens kampanja na Balkanu košta tri do pet puta manje nego u Francuskoj za ekvivalentan doseg, uz veće organsko angažovanje. Za beauty brend u rastu, to je mogućnost da se testira i uđe na novo tržište za cenu obične lokalne kampanje.',
          en: 'The second argument is economic. An influence campaign in the Balkans costs three to five times less than in France for an equivalent reach, with higher organic engagement. For a growing beauty brand, it is the possibility to test and establish itself on a new market for the price of a simple local campaign.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: "L'avantage du premier entrant",
          rs: 'Prednost prvog igrača',
          en: 'The first-mover advantage',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Dans douze mois, une marque française sera devenue la référence beauté dans les Balkans. La question n'est pas de savoir si cela arrivera, mais qui prendra cette place. Le premier entrant construit une communauté fidèle. Les suivants achètent de la visibilité. C'est toute la différence entre bâtir un actif durable et louer de l'attention.",
          rs: 'Za dvanaest meseci, francuski brend će postati beauty referenca na Balkanu. Pitanje nije da li će se to desiti, već ko će zauzeti to mesto. Prvi igrač gradi vernu zajednicu. Sledeći kupuju vidljivost. To je sva razlika između izgradnje trajne imovine i iznajmljivanja pažnje.',
          en: 'In twelve months, a French brand will have become the beauty reference in the Balkans. The question is not whether this will happen, but who will take that place. The first mover builds a loyal community. The followers buy visibility. That is the whole difference between building a lasting asset and renting attention.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'FAQ',
          rs: 'Česta pitanja',
          en: 'FAQ',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Quels types de produits de beauté fonctionnent dans les Balkans ? Skincare, soins capillaires, maquillage, nutrition beauté. Tout produit avec une image qualitative et une histoire à raconter.",
          rs: 'Koje vrste beauty proizvoda funkcionišu na Balkanu? Skincare, nega kose, šminka, beauty nutricija. Svaki proizvod sa kvalitetnim imidžom i pričom za ispričati.',
          en: 'What types of beauty products work in the Balkans? Skincare, hair care, makeup, beauty nutrition. Any product with a quality image and a story to tell.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Faut-il déjà être présent en Europe pour se lancer ? Non. Les Balkans peuvent être votre premier marché d'expansion internationale, souvent plus accessible que l'Allemagne ou le Royaume-Uni.",
          rs: 'Da li je potrebno već biti prisutan u Evropi da biste se lansirali? Ne. Balkan može biti vaše prvo tržište međunarodne ekspanzije, često pristupačnije od Nemačke ili Velike Britanije.',
          en: 'Do you already need to be present in Europe to launch? No. The Balkans can be your first international expansion market, often more accessible than Germany or the United Kingdom.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Comment démarrer sans prendre de risque ? Une campagne test avec un ou deux créateurs locaux permet de mesurer l'intérêt du marché avant tout engagement plus large.",
          rs: 'Kako početi bez preuzimanja rizika? Test kampanja sa jednim ili dva lokalna kreatora omogućava merenje interesovanja tržišta pre bilo kakve šire obaveze.',
          en: 'How to start without taking risks? A test campaign with one or two local creators allows you to measure market interest before any broader commitment.',
        },
      },
      {
        type: 'cta',
        href: 'contact',
        text: {
          fr: "Grom Agency est la première agence d'influence franco-balkanique. Positionnez votre marque avant vos concurrents.",
          rs: 'Grom Agency je prva francusko-balkanska influens agencija. Pozicionirajte svoj brend pre konkurenata.',
          en: 'Grom Agency is the first Franco-Balkan influence agency. Position your brand ahead of your competitors.',
        },
        buttonLabel: {
          fr: 'Contactez-nous',
          rs: 'Kontaktirajte nas',
          en: 'Contact us',
        },
      },
    ],
  },
  {
    slug: 'ugc-prix-strategie-2026',
    date: '2026-06-13',
    readingTime: 5,
    category: {
      fr: 'UGC',
      rs: 'UGC',
      en: 'UGC',
    },
    title: {
      fr: 'UGC en 2026 : combien ça coûte et pourquoi ça booste vos ventes',
      rs: 'UGC 2026: koliko košta i zašto podstiče prodaju',
      en: 'UGC in 2026: how much it costs and why it boosts your sales',
    },
    excerpt: {
      fr: "Le contenu UGC est devenu l'arme la plus rentable des marques de beauté. Ce que c'est, combien ça coûte et pourquoi ça convertit mieux que la pub classique.",
      rs: 'UGC sadržaj je postao najisplativije oružje beauty brendova. Šta je to, koliko košta i zašto konvertuje bolje od klasične reklame.',
      en: 'UGC content has become the most profitable weapon of beauty brands. What it is, how much it costs and why it converts better than classic advertising.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "Vos clientes ne croient plus la publicité. Elles croient d'autres clientes. C'est toute la puissance de l'UGC, le contenu créé par de vraies utilisatrices, devenu l'arme la plus rentable des marques de beauté. Voici comment ça marche, combien ça coûte et pourquoi ça convertit.",
          rs: 'Vaše klijentkinje više ne veruju reklami. Veruju drugim klijentkinjama. To je sva snaga UGC-a, sadržaja koji stvaraju prave korisnice, koji je postao najisplativije oružje beauty brendova. Evo kako funkcioniše, koliko košta i zašto konvertuje.',
          en: 'Your customers no longer believe advertising. They believe other customers. That is the whole power of UGC, content created by real users, which has become the most profitable weapon of beauty brands. Here is how it works, how much it costs and why it converts.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: "L'UGC, c'est quoi exactement",
          rs: 'Šta je tačno UGC',
          en: 'What exactly is UGC',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "L'UGC, ou user generated content, désigne le contenu produit par des créatrices qui testent et présentent un produit de manière authentique. Pas une publicité léchée, mais une vraie personne qui montre le produit dans sa routine, partage ses résultats et donne son avis. Ce format déclenche la confiance, et la confiance déclenche l'achat.",
          rs: 'UGC, ili user generated content, označava sadržaj koji proizvode kreatorke koje testiraju i predstavljaju proizvod na autentičan način. Ne uglancana reklama, već prava osoba koja pokazuje proizvod u svojoj rutini, deli rezultate i daje mišljenje. Taj format pokreće poverenje, a poverenje pokreće kupovinu.',
          en: 'UGC, or user generated content, refers to content produced by creators who test and present a product in an authentic way. Not a polished advertisement, but a real person who shows the product in their routine, shares their results and gives their opinion. This format triggers trust, and trust triggers purchase.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "À l'heure où l'intelligence artificielle produit du contenu propre mais sans âme, l'UGC apporte la seule chose que l'IA ne pourra jamais fabriquer : l'authenticité d'une vraie expérience humaine et la confiance d'une communauté.",
          rs: 'U vreme kada veštačka inteligencija proizvodi čist ali bezdušan sadržaj, UGC donosi jedinu stvar koju AI nikada neće moći da napravi: autentičnost pravog ljudskog iskustva i poverenje zajednice.',
          en: 'At a time when artificial intelligence produces clean but soulless content, UGC brings the only thing AI can never manufacture: the authenticity of a real human experience and the trust of a community.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: "Pourquoi l'UGC convertit mieux que la publicité classique",
          rs: 'Zašto UGC konvertuje bolje od klasične reklame',
          en: 'Why UGC converts better than classic advertising',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Une cliente qui hésite à acheter votre produit ne sera pas rassurée par un visuel de marque, aussi beau soit-il. Elle sera convaincue par une vraie femme qui a testé le produit et montre son avant-après. L'UGC répond exactement à cette phase de réassurance, celle qui précède le passage à l'achat. C'est pour cela qu'il performe si bien en publicité, où il génère souvent un meilleur taux de clic et un coût d'acquisition plus bas que les contenus de marque traditionnels.",
          rs: 'Klijentkinju koja okleva da kupi vaš proizvod neće umiriti vizuelni prikaz brenda, ma koliko lep bio. Ubediće je prava žena koja je testirala proizvod i pokazuje svoj pre i posle. UGC odgovara upravo na tu fazu uveravanja, onu koja prethodi kupovini. Zato tako dobro funkcioniše u oglašavanju, gde često generiše bolju stopu klikova i niži trošak akvizicije od tradicionalnog sadržaja brenda.',
          en: 'A customer hesitating to buy your product will not be reassured by a brand visual, however beautiful. She will be convinced by a real woman who tested the product and shows her before-and-after. UGC answers exactly this reassurance phase, the one that precedes the purchase. That is why it performs so well in advertising, where it often generates a better click-through rate and a lower acquisition cost than traditional brand content.',
        },
      },
      {
        type: 'cta',
        href: 'contact',
        text: {
          fr: "Vous voulez du contenu UGC qui convertit pour votre marque ? Grom Agency mobilise ses créatrices pour vous.",
          rs: 'Želite UGC sadržaj koji konvertuje za vaš brend? Grom Agency mobiliše svoje kreatorke za vas.',
          en: 'Want UGC content that converts for your brand? Grom Agency mobilizes its creators for you.',
        },
        buttonLabel: {
          fr: 'Demandez votre devis',
          rs: 'Zatražite ponudu',
          en: 'Request your quote',
        },
      },
      {
        type: 'heading',
        text: {
          fr: "Combien coûte l'UGC en 2026",
          rs: 'Koliko košta UGC 2026',
          en: 'How much does UGC cost in 2026',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Une vidéo UGC seule se situe généralement entre 150 et 400 euros selon le profil de la créatrice et les droits d'utilisation. La plupart des marques optent pour des packs, plus avantageux, combinant plusieurs vidéos, des photos et des séries de stories exploitables sur Instagram, TikTok et en publicité.",
          rs: 'Pojedinačan UGC video obično se kreće između 150 i 400 evra u zavisnosti od profila kreatorke i prava korišćenja. Većina brendova bira pakete, koji su povoljniji, kombinujući više video snimaka, fotografije i serije story-ja upotrebljive na Instagramu, TikToku i u oglašavanju.',
          en: 'A single UGC video generally ranges between 150 and 400 euros depending on the creator profile and usage rights. Most brands opt for packs, which are more advantageous, combining several videos, photos and series of stories usable on Instagram, TikTok and in advertising.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Le vrai levier n'est pas le prix unitaire mais la régularité. Un flux constant de contenu authentique alimente vos réseaux et vos campagnes en permanence, ce qui construit une réassurance durable et augmente vos ventes dans le temps.",
          rs: 'Prava poluga nije jedinična cena već redovnost. Stalan tok autentičnog sadržaja neprekidno napaja vaše mreže i kampanje, što gradi trajno uveravanje i povećava prodaju tokom vremena.',
          en: 'The real lever is not the unit price but regularity. A constant flow of authentic content permanently feeds your networks and campaigns, which builds lasting reassurance and increases your sales over time.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: "Comment intégrer l'UGC dans votre stratégie",
          rs: 'Kako integrisati UGC u vašu strategiju',
          en: 'How to integrate UGC into your strategy',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Commencez par un pack test pour mesurer la qualité et l'impact sur votre audience. Une fois les premiers résultats validés, passez à une production mensuelle régulière pour installer votre marque dans le quotidien de vos clientes. Sélectionnez des créatrices dont le style et l'audience correspondent vraiment à votre positionnement, c'est la clé d'un contenu qui résonne.",
          rs: 'Počnite sa test paketom da izmerite kvalitet i uticaj na vašu publiku. Kada se prvi rezultati potvrde, pređite na redovnu mesečnu produkciju da uvedete svoj brend u svakodnevicu vaših klijentkinja. Birajte kreatorke čiji stil i publika zaista odgovaraju vašem pozicioniranju, to je ključ sadržaja koji odzvanja.',
          en: 'Start with a test pack to measure the quality and impact on your audience. Once the first results are validated, move to regular monthly production to install your brand in your customers\' daily life. Select creators whose style and audience truly match your positioning, that is the key to content that resonates.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'FAQ',
          rs: 'Česta pitanja',
          en: 'FAQ',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Quelle différence entre UGC et influence ? L'influenceur publie sur son propre compte auprès de son audience. La créatrice UGC produit du contenu que la marque utilise sur ses propres canaux et en publicité.",
          rs: 'Koja je razlika između UGC-a i influensa? Influenser objavljuje na svom nalogu pred svojom publikom. UGC kreatorka proizvodi sadržaj koji brend koristi na sopstvenim kanalima i u oglašavanju.',
          en: 'What is the difference between UGC and influence? The influencer publishes on their own account to their audience. The UGC creator produces content that the brand uses on its own channels and in advertising.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "L'UGC fonctionne-t-il pour toutes les marques de beauté ? Il fonctionne particulièrement bien pour les produits démontrables, skincare, maquillage, soins capillaires, où l'avant-après et la routine créent la preuve.",
          rs: 'Da li UGC funkcioniše za sve beauty brendove? Funkcioniše posebno dobro za proizvode koji se mogu demonstrirati, skincare, šminka, nega kose, gde pre i posle i rutina stvaraju dokaz.',
          en: 'Does UGC work for all beauty brands? It works particularly well for demonstrable products, skincare, makeup, hair care, where the before-and-after and the routine create proof.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Combien de vidéos par mois pour des résultats ? Un minimum de quatre à six contenus mensuels permet d'alimenter réseaux et publicité de façon cohérente et d'observer un impact réel.",
          rs: 'Koliko video snimaka mesečno za rezultate? Minimum od četiri do šest mesečnih sadržaja omogućava da se mreže i oglašavanje napajaju dosledno i da se posmatra stvaran uticaj.',
          en: 'How many videos per month for results? A minimum of four to six monthly contents allows you to feed networks and advertising consistently and to observe real impact.',
        },
      },
      {
        type: 'cta',
        href: 'contact',
        text: {
          fr: "Grom Agency produit du contenu UGC authentique qui transforme vos visiteurs en clients.",
          rs: 'Grom Agency proizvodi autentičan UGC sadržaj koji pretvara posetioce u klijente.',
          en: 'Grom Agency produces authentic UGC content that turns your visitors into customers.',
        },
        buttonLabel: {
          fr: 'Parlons de votre projet',
          rs: 'Razgovarajmo o projektu',
          en: "Let's talk about your project",
        },
      },
    ],
  },
  {
    slug: 'prix-video-createur-influenceur',
    date: '2026-06-14',
    readingTime: 5,
    category: {
      fr: 'Tarifs',
      rs: 'Cene',
      en: 'Pricing',
    },
    title: {
      fr: "Comment connaître le prix d'une vidéo d'un créateur ou influenceur",
      rs: 'Kako saznati cenu videa kreatora ili influensera',
      en: 'How to know the price of a creator or influencer video',
    },
    excerpt: {
      fr: "Les critères qui fixent le prix d'un contenu créateur, et comment calculer le tarif juste avec notre outil gratuit.",
      rs: 'Kriterijumi koji određuju cenu sadržaja kreatora, i kako izračunati pravu cenu našim besplatnim alatom.',
      en: 'The criteria that set the price of creator content, and how to calculate the right rate with our free tool.',
    },
    blocks: [
      {
        type: 'paragraph',
        text: {
          fr: "C'est la question qui bloque toutes les collaborations. Combien vaut vraiment une vidéo d'influenceur ? Trop cher, vous surpayez. Trop bas, vous passez à côté des bons profils. Voici les critères concrets qui déterminent le juste prix d'un contenu créateur en 2026.",
          rs: 'To je pitanje koje blokira sve saradnje. Koliko zaista vredi video influensera? Preskupo, preplaćujete. Prenisko, promašujete dobre profile. Evo konkretnih kriterijuma koji određuju pravu cenu sadržaja kreatora 2026.',
          en: 'This is the question that blocks all collaborations. How much is an influencer video really worth? Too expensive, you overpay. Too low, you miss the good profiles. Here are the concrete criteria that determine the fair price of creator content in 2026.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: "Pourquoi il n'existe pas de prix unique",
          rs: 'Zašto ne postoji jedinstvena cena',
          en: 'Why there is no single price',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Le tarif d'une vidéo d'influenceur varie du simple au décuple selon plusieurs facteurs. Un même format peut coûter 80 euros chez un micro-créateur débutant et 2 000 euros chez un profil établi. Cette différence n'est pas arbitraire, elle repose sur des critères précis que tout le monde peut apprendre à évaluer.",
          rs: 'Cena videa influensera varira desetostruko u zavisnosti od više faktora. Isti format može koštati 80 evra kod mikro-kreatora početnika i 2.000 evra kod etabliranog profila. Ta razlika nije proizvoljna, počiva na preciznim kriterijumima koje svako može naučiti da proceni.',
          en: 'The price of an influencer video varies tenfold depending on several factors. The same format can cost 80 euros with a beginner micro-creator and 2,000 euros with an established profile. This difference is not arbitrary, it is based on precise criteria that anyone can learn to evaluate.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Les six critères qui fixent le prix d\'une vidéo',
          rs: 'Šest kriterijuma koji određuju cenu videa',
          en: 'The six criteria that set the price of a video',
        },
      },
      {
        type: 'list',
        items: {
          fr: [
            "La taille de l'audience. Plus un créateur a d'abonnés, plus son tarif monte, mais ce n'est pas le seul facteur.",
            "Le taux d'engagement. Un créateur de 20 000 abonnés très engagés vaut souvent plus qu'un compte de 100 000 abonnés passifs.",
            "Le format et la durée. Une vidéo de 15 secondes ne se facture pas comme un contenu élaboré d'une minute avec montage et voix off.",
            "Le type de droits. Un contenu en organique coûte moins cher qu'un contenu destiné à la publicité payante.",
            "Le niveau d'exclusivité. Un créateur qui s'engage à ne pas travailler avec vos concurrents facture cette exclusivité.",
            "Le marché géographique. Un créateur en France ne facture pas comme un créateur dans les Balkans, trois à cinq fois moins cher.",
          ],
          rs: [
            'Veličina publike. Što kreator ima više pratilaca, to mu cena raste, ali to nije jedini faktor.',
            'Stopa angažovanja. Kreator sa 20.000 veoma angažovanih pratilaca često vredi više od naloga sa 100.000 pasivnih pratilaca.',
            'Format i trajanje. Video od 15 sekundi ne naplaćuje se kao razrađen sadržaj od jednog minuta sa montažom i naracijom.',
            'Vrsta prava. Organski sadržaj košta manje od sadržaja namenjenog plaćenom oglašavanju.',
            'Nivo ekskluzivnosti. Kreator koji se obavezuje da neće raditi sa vašim konkurentima naplaćuje tu ekskluzivnost.',
            'Geografsko tržište. Kreator u Francuskoj ne naplaćuje kao kreator na Balkanu, tri do pet puta jeftinije.',
          ],
          en: [
            'Audience size. The more followers a creator has, the higher the rate, but it is not the only factor.',
            'Engagement rate. A creator with 20,000 highly engaged followers is often worth more than an account with 100,000 passive followers.',
            'Format and duration. A 15-second video is not billed like an elaborate one-minute content with editing and voice-over.',
            'Type of rights. Organic content costs less than content intended for paid advertising.',
            'Level of exclusivity. A creator who commits not to work with your competitors bills for that exclusivity.',
            'Geographic market. A creator in France does not bill like a creator in the Balkans, three to five times cheaper.',
          ],
        },
      },
      {
        type: 'cta',
        href: 'gromkulator',
        text: {
          fr: "Vous voulez estimer le juste prix d'une collaboration en quelques clics ? Utilisez le Gromkulator, notre calculateur gratuit.",
          rs: 'Želite da procenite pravu cenu saradnje u nekoliko klikova? Koristite Gromkulator, naš besplatni kalkulator.',
          en: 'Want to estimate the fair price of a collaboration in a few clicks? Use the Gromkulator, our free calculator.',
        },
        buttonLabel: {
          fr: 'Calculez votre tarif',
          rs: 'Izračunajte cenu',
          en: 'Calculate your rate',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Comment calculer un tarif juste sans se tromper',
          rs: 'Kako izračunati pravu cenu bez greške',
          en: 'How to calculate a fair rate without mistakes',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Plutôt que de deviner ou de subir le tarif annoncé par le créateur, il existe une méthode simple. Croisez la taille de l'audience, le taux d'engagement, le format demandé et les droits souhaités. Ce croisement vous donne une fourchette réaliste, celle qui protège votre budget tout en restant attractive pour les bons profils.",
          rs: 'Umesto da nagađate ili trpite cenu koju objavi kreator, postoji jednostavna metoda. Ukrstite veličinu publike, stopu angažovanja, traženi format i željena prava. To ukrštanje daje vam realan raspon, onaj koji štiti vaš budžet a ostaje privlačan za dobre profile.',
          en: 'Rather than guessing or accepting the rate announced by the creator, there is a simple method. Cross the audience size, the engagement rate, the requested format and the desired rights. This crossing gives you a realistic range, one that protects your budget while remaining attractive to good profiles.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "C'est exactement ce que fait le Gromkulator. En renseignant quelques informations sur le créateur et votre besoin, vous obtenez une estimation de prix fiable, basée sur les vrais standards du marché. Fini les devis à l'aveugle et les négociations où vous partez perdant.",
          rs: 'To je tačno ono što radi Gromkulator. Unošenjem nekoliko informacija o kreatoru i vašoj potrebi, dobijate pouzdanu procenu cene, zasnovanu na pravim tržišnim standardima. Gotovo je sa ponudama naslepo i pregovorima u kojima gubite.',
          en: 'This is exactly what the Gromkulator does. By entering some information about the creator and your need, you get a reliable price estimate, based on real market standards. No more blind quotes and negotiations where you start as the loser.',
        },
      },
      {
        type: 'cta',
        href: 'gromkulator',
        text: {
          fr: "Le Gromkulator calcule pour vous le prix juste d'une vidéo créateur, en France comme dans les Balkans.",
          rs: 'Gromkulator za vas izračunava pravu cenu videa kreatora, u Francuskoj kao i na Balkanu.',
          en: 'The Gromkulator calculates the fair price of a creator video for you, in France as in the Balkans.',
        },
        buttonLabel: {
          fr: 'Essayez-le gratuitement',
          rs: 'Isprobajte besplatno',
          en: 'Try it for free',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'Le cas particulier des Balkans',
          rs: 'Poseban slučaj Balkana',
          en: 'The special case of the Balkans',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Si vous cherchez à optimiser votre budget contenu, les créateurs balkaniques offrent un ratio imbattable. Pour un profil équivalent à un créateur français, le tarif est trois à cinq fois inférieur, avec un taux d'engagement organique parmi les plus élevés d'Europe. Le Gromkulator intègre cette dimension géographique pour vous aider à comparer et à décider.",
          rs: 'Ako želite da optimizujete svoj budžet za sadržaj, balkanski kreatori nude nenadmašan odnos. Za profil ekvivalentan francuskom kreatoru, cena je tri do pet puta niža, uz stopu organskog angažovanja među najvišima u Evropi. Gromkulator uključuje ovu geografsku dimenziju da vam pomogne da uporedite i odlučite.',
          en: 'If you want to optimize your content budget, Balkan creators offer an unbeatable ratio. For a profile equivalent to a French creator, the rate is three to five times lower, with an organic engagement rate among the highest in Europe. The Gromkulator integrates this geographic dimension to help you compare and decide.',
        },
      },
      {
        type: 'heading',
        text: {
          fr: 'FAQ',
          rs: 'Česta pitanja',
          en: 'FAQ',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Combien coûte une vidéo d'influenceur en moyenne ? Le prix varie de 80 à plus de 2 000 euros selon l'audience, l'engagement, le format et les droits. Il n'existe pas de tarif unique, d'où l'intérêt d'un calculateur.",
          rs: 'Koliko u proseku košta video influensera? Cena varira od 80 do preko 2.000 evra u zavisnosti od publike, angažovanja, formata i prava. Ne postoji jedinstvena cena, otuda korist od kalkulatora.',
          en: 'How much does an influencer video cost on average? The price ranges from 80 to over 2,000 euros depending on audience, engagement, format and rights. There is no single rate, hence the value of a calculator.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Comment savoir si un créateur est trop cher ? Comparez son tarif à son taux d'engagement réel et à son audience qualifiée. Un outil comme le Gromkulator vous donne la fourchette de référence.",
          rs: 'Kako znati da li je kreator preskup? Uporedite njegovu cenu sa stvarnom stopom angažovanja i kvalifikovanom publikom. Alat poput Gromkulatora daje vam referentni raspon.',
          en: 'How to know if a creator is too expensive? Compare their rate to their real engagement rate and qualified audience. A tool like the Gromkulator gives you the reference range.',
        },
      },
      {
        type: 'paragraph',
        text: {
          fr: "Un créateur avec peu d'abonnés peut-il coûter cher ? Oui, si son engagement est très élevé. Un micro-créateur ultra-engagé peut générer plus de résultats qu'un gros compte passif.",
          rs: 'Može li kreator sa malo pratilaca biti skup? Da, ako je njegovo angažovanje veoma visoko. Ultra-angažovan mikro-kreator može generisati više rezultata od velikog pasivnog naloga.',
          en: 'Can a creator with few followers cost a lot? Yes, if their engagement is very high. An ultra-engaged micro-creator can generate more results than a large passive account.',
        },
      },
      {
        type: 'cta',
        href: 'gromkulator',
        text: {
          fr: "Arrêtez de payer vos collaborations à l'aveugle. Le Gromkulator vous donne le prix juste en quelques clics.",
          rs: 'Prestanite da plaćate saradnje naslepo. Gromkulator vam daje pravu cenu u nekoliko klikova.',
          en: 'Stop paying for your collaborations blindly. The Gromkulator gives you the fair price in a few clicks.',
        },
        buttonLabel: {
          fr: 'Calculez maintenant',
          rs: 'Izračunajte sada',
          en: 'Calculate now',
        },
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
