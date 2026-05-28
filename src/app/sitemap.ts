import { MetadataRoute } from 'next'
import { SEO_CONFIG, getCanonicalUrl } from '../config/seo-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SEO_CONFIG.baseUrl;
  
  return [
    {
      url: getCanonicalUrl(''),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Tambahkan URL halaman lain jika ada:
    // {
    //   url: getCanonicalUrl('/blog'),
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    // {
    //   url: getCanonicalUrl('/layanan'),
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
