/**
 * Schema.org Structured Data Generator
 * Helper functions untuk generate JSON-LD untuk SEO
 */

import { SEO_CONFIG } from '../config/seo-config';
import { BUSINESS } from '../config/site-data';

/**
 * Generate LocalBusiness Schema
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SEO_CONFIG.baseUrl,
    name: BUSINESS.name,
    description: SEO_CONFIG.defaultDescription,
    image: `${SEO_CONFIG.baseUrl}/images/after.webp`,
    url: SEO_CONFIG.baseUrl,
    telephone: BUSINESS.phone,
    email: SEO_CONFIG.author.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.split(', ').slice(0, 1).join(''),
      addressLocality: 'Demo City',
      addressRegion: 'Demo Region',
      postalCode: '12345',
      addressCountry: 'ID',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Demo Area',
      },
      {
        '@type': 'City',
        name: 'Demo Region',
      },
    ],
    geoCoordinates: {
      '@type': 'GeoCoordinates',
      latitude: -6.2088,
      longitude: 106.8456,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '345',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '22:00',
    },
    sameAs: [
      SEO_CONFIG.social.instagram,
      SEO_CONFIG.social.googleMaps,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: BUSINESS.phone,
      availableLanguage: 'Indonesian',
    },
  };
}

/**
 * Generate Organisation Schema
 */
export function generateOrganisationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS.name,
    url: SEO_CONFIG.baseUrl,
    logo: `${SEO_CONFIG.baseUrl}/images/logo.png`,
    description: SEO_CONFIG.defaultDescription,
    sameAs: [
      SEO_CONFIG.social.instagram,
      SEO_CONFIG.social.googleMaps,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: BUSINESS.phone,
      email: SEO_CONFIG.author.email,
    },
  };
}

/**
 * Generate Service Schema
 */
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SEO_CONFIG.baseUrl,
    name: BUSINESS.name,
    image: `${SEO_CONFIG.baseUrl}/images/after.webp`,
    description: 'Jasa service AC termasuk cuci AC, perbaikan AC tidak dingin, AC bocor, isi freon, bongkar pasang, dan instalasi AC',
    url: SEO_CONFIG.baseUrl,
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Demo Area',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Cuci AC',
        description: 'Layanan cuci AC indoor dan outdoor',
        price: '50000',
        priceCurrency: 'IDR',
      },
      {
        '@type': 'Offer',
        name: 'Perbaikan AC',
        description: 'Perbaikan AC tidak dingin, bocor, dan masalah lainnya',
        priceCurrency: 'IDR',
      },
      {
        '@type': 'Offer',
        name: 'Isi Freon AC',
        description: 'Pengisian freon AC R32, R410A, dan R22',
        price: '100000',
        priceCurrency: 'IDR',
      },
      {
        '@type': 'Offer',
        name: 'Bongkar Pasang AC',
        description: 'Layanan bongkar pasang dan relokasi AC',
        price: '250000',
        priceCurrency: 'IDR',
      },
    ],
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.baseUrl}${item.url}`,
    })),
  };
}

/**
 * Combine multiple schemas into @graph
 */
export function generateFullSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateLocalBusinessSchema(),
      generateOrganisationSchema(),
      generateServiceSchema(),
    ],
  };
}
