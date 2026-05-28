import { MetadataRoute } from 'next'
import { SEO_CONFIG, getSitemapUrl } from '../config/seo-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private'],
    },
    sitemap: getSitemapUrl(),
  }
}
