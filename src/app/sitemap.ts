import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  const pages = [
    { url: baseUrl, priority: 1, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/texas`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/california`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/florida`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/washington`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/nevada`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/new-york`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/illinois`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/pennsylvania`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/overtime`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${baseUrl}/about`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/contact`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.3, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/disclaimer`, priority: 0.3, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/texas-no-state-income-tax`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/california-tax-guide`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${baseUrl}/blog/california-vs-texas-taxes`, priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  return pages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
