/**
 * SEO Configuration - Centralized untuk seluruh website
 * Update di sini saja untuk mengubah base URL, domain, dan SEO settings
 */

export const SEO_CONFIG = {
  // Base configuration
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://demo-ac-service.local',
  siteName: 'Demo AC Service',
  language: 'id',
  
  // Default metadata
  defaultTitle: 'Demo AC Service | Cuci, Perbaikan & Pasang AC',
  defaultDescription: 'Demo AC Service menyediakan layanan cuci AC, perbaikan AC, isi freon, bongkar pasang & instalasi AC berkualitas. Teknisi profesional, harga transparan, bergaransi.',
  defaultKeywords: [
    'service ac',
    'cuci ac',
    'perbaikan ac',
    'bongkar pasang ac',
    'isi freon ac',
    'teknisi ac',
    'demo ac service',
    'ac panggilan',
    'servis ac',
  ],
  
  // OG Image
  defaultOgImage: {
    url: '/images/after.webp',
    width: 1200,
    height: 630,
    alt: 'Demo AC Service'
  },
  
  // Author/Organization
  author: {
    name: 'Demo AC Service',
    email: 'support@demoacservice.local'
  },
  
  // Social links
  social: {
    instagram: 'https://instagram.com/demoacservice',
    whatsapp: 'https://wa.me/6281234567890',
    googleMaps: 'https://maps.app.goo.gl/demo'
  },
  
  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    bingBot: 'index, follow'
  },
  
  // Sitemap location
  sitemapUrl: '/sitemap.xml',
  robotsUrl: '/robots.txt',
  
  // Business hours (for schema.org)
  businessHours: {
    opens: '00:00',
    closes: '22:00',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }
};

/**
 * Helper function untuk generate canonical URL
 */
export function getCanonicalUrl(path: string = ''): string {
  return `${SEO_CONFIG.baseUrl}${path}`;
}

/**
 * Helper function untuk generate sitemapURL di robots.txt
 */
export function getSitemapUrl(): string {
  return `${SEO_CONFIG.baseUrl}${SEO_CONFIG.sitemapUrl}`;
}

/**
 * Helper function untuk Metadata
 */
export function generateMetadata(override?: {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: typeof SEO_CONFIG.defaultOgImage;
}) {
  return {
    title: override?.title || SEO_CONFIG.defaultTitle,
    description: override?.description || SEO_CONFIG.defaultDescription,
    keywords: override?.keywords || SEO_CONFIG.defaultKeywords,
    robots: SEO_CONFIG.robots,
    authors: [{ name: SEO_CONFIG.author.name }],
    creator: SEO_CONFIG.author.name,
    openGraph: {
      title: override?.title || SEO_CONFIG.defaultTitle,
      description: override?.description || SEO_CONFIG.defaultDescription,
      url: SEO_CONFIG.baseUrl,
      siteName: SEO_CONFIG.siteName,
      images: [override?.ogImage || SEO_CONFIG.defaultOgImage],
      locale: 'id_ID',
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: override?.title || SEO_CONFIG.defaultTitle,
      description: override?.description || SEO_CONFIG.defaultDescription,
      images: [(override?.ogImage || SEO_CONFIG.defaultOgImage).url],
    },
  };
}
