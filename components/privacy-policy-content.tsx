'use client'

import { useLanguage } from './language-provider'

const copy = {
  fr: {
    title: 'Politique de confidentialité',
    intro: 'Chez Grom Agency, nous respectons votre vie privée et protégeons les données que vous nous confiez.',
    sections: [
      ['Données collectées', 'Lorsque vous nous contactez, nous pouvons collecter votre nom, votre adresse e-mail, les informations relatives à votre marque ou activité, ainsi que le contenu de votre message.'],
      ['Utilisation des données', 'Ces informations servent uniquement à répondre à vos demandes, préparer nos collaborations et améliorer nos services. Nous ne vendons pas vos données personnelles.'],
      ['Conservation et sécurité', 'Nous conservons vos données pendant la durée nécessaire à ces finalités et mettons en place des mesures raisonnables pour les protéger contre tout accès non autorisé.'],
      ['Vos droits', 'Vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à rs@grom-agency.com.'],
    ],
  },
  rs: {
    title: 'Politika privatnosti',
    intro: 'U Grom Agency poštujemo vašu privatnost i štitimo podatke koje nam poverite.',
    sections: [['Prikupljeni podaci', 'Kada nas kontaktirate, možemo prikupiti vaše ime, e-mail adresu, informacije o vašem brendu ili delatnosti i sadržaj poruke.'], ['Korišćenje podataka', 'Podaci se koriste samo za odgovaranje na vaše zahteve, pripremu saradnje i unapređenje naših usluga. Ne prodajemo vaše lične podatke.'], ['Vaša prava', 'Možete zatražiti pristup, ispravku ili brisanje podataka na rs@grom-agency.com.']],
  },
  en: {
    title: 'Privacy policy',
    intro: 'At Grom Agency, we respect your privacy and protect the information you share with us.',
    sections: [['Data we collect', 'When you contact us, we may collect your name, email address, brand or business details, and the content of your message.'], ['How we use data', 'We use this information only to respond to requests, prepare collaborations, and improve our services. We do not sell your personal data.'], ['Your rights', 'You may request access, correction, or deletion of your data by writing to rs@grom-agency.com.']],
  },
} as const

export function PrivacyPolicyContent() {
  const { language } = useLanguage()
  const content = copy[language]

  return (
    <article className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <header className="flex flex-col gap-5">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">GROM AGENCY</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{content.title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{content.intro}</p>
      </header>
      <div className="flex flex-col gap-8 border-t border-border pt-8">
        {content.sections.map(([title, text]) => (
          <section key={title} className="flex flex-col gap-3">
            <h2 className="font-display text-xl font-semibold">{title}</h2>
            <p className="max-w-3xl leading-relaxed text-muted-foreground">{text}</p>
          </section>
        ))}
      </div>
    </article>
  )
}
