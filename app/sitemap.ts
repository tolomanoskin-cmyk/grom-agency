import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://grom-agency.com'
  
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/talents', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/marques', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/createurs', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/gromkulator', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
  ]
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            'fr': `${baseUrl}/fr${route.path}`,
            'sr': `${baseUrl}/rs${route.path}`,
            'en': `${baseUrl}/en${route.path}`,
          },
        },
      })
    }
  }
  
  return sitemapEntries
}
