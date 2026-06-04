export function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Grom Agency',
    alternateName: 'Grom',
    url: 'https://grom-agency.com',
    logo: 'https://grom-agency.com/images/grom-logo.png',
    description: 'Agence d\'influence marketing connectant les marques françaises aux créateurs de contenu balkaniques.',
    email: 'rs@grom-agency.com',
    sameAs: [
      'https://www.instagram.com/grom.agency/',
      'https://www.linkedin.com/company/grom-agency/',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Belgrade',
        addressCountry: 'RS',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressCountry: 'FR',
      },
    ],
    areaServed: [
      { '@type': 'Country', name: 'Serbia' },
      { '@type': 'Country', name: 'Croatia' },
      { '@type': 'Country', name: 'Bosnia and Herzegovina' },
      { '@type': 'Country', name: 'Montenegro' },
      { '@type': 'Country', name: 'France' },
    ],
    knowsLanguage: ['French', 'Serbian', 'English'],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Influence Marketing',
    provider: {
      '@type': 'Organization',
      name: 'Grom Agency',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Balkans',
    },
    description: 'Campagnes d\'influence marketing avec des créateurs de contenu balkaniques pour les marques françaises.',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Grom Agency',
    url: 'https://grom-agency.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://grom-agency.com/talents?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
