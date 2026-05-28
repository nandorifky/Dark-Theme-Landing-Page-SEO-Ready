# 📊 SEO & Konfigurasi Website - Panduan Lengkap

## ✅ Perbaikan SEO yang Sudah Dilakukan

### 1. **Centralized Configuration (Tanpa Hardcoding)**

#### File: `src/config/seo-config.ts`
- ✅ Base URL dikonfigurasi via environment variable `NEXT_PUBLIC_BASE_URL`
- ✅ Semua metadata (title, description, keywords) terpusat
- ✅ OG Image dan social config terpusat
- ✅ Helper functions: `getCanonicalUrl()`, `generateMetadata()`, `getSitemapUrl()`
- ✅ Business hours config untuk schema.org

**Update di 1 tempat saja untuk perubahan global:**
```typescript
// Di src/config/seo-config.ts
export const SEO_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://lintangackediri.com',
  defaultTitle: 'Ubah di sini akan update di semua tempat',
  // ...
}
```

#### File: `src/config/theme-config.ts`
- ✅ Semua warna dikonfigurasi terpusat (tidak ada hardcode di JSX)
- ✅ Typography, spacing, shadows terpusat
- ✅ Helper functions untuk inline styles: `inlineStyles` object
- ✅ Mudah untuk dark mode atau theme switcher di masa depan

**Contoh penggunaan:**
```typescript
import { THEME, inlineStyles } from '../config/theme-config';

// Di JSX
<div style={inlineStyles.accentColor}>Text berwarna accent</div>
```

### 2. **Structured Data (Schema.org) - Lengkap untuk SEO**

#### File: `src/utils/schema-generator.ts`
- ✅ LocalBusiness Schema - untuk local SEO
- ✅ Organisation Schema - untuk brand recognition
- ✅ Service Schema - untuk service offerings
- ✅ BreadcrumbList Schema - untuk navigation clarity
- ✅ FAQPage Schema - sudah ada di page.tsx

**Menggunakan di page:**
```typescript
import { generateFullSchema } from '../utils/schema-generator';

const jsonLd = generateFullSchema(); // Gabung semua schema
```

**Keuntungan:**
- Local Business akan muncul di Google Maps/Business dengan rating, jam buka, kontak
- Services terindeks untuk local search
- Schema otomatis update jika ubah di `site-data.ts` atau `seo-config.ts`

### 3. **URL Management Terpusat**

#### Update di file:
- ✅ `src/app/layout.tsx` - Canonical URL + Metadata
- ✅ `src/app/robots.ts` - Sitemap URL dari config
- ✅ `src/app/sitemap.ts` - Gunakan `getCanonicalUrl()`
- ✅ `src/app/page.tsx` - Gunakan `generateFullSchema()`

**Jika ubah domain:**
```bash
# File: .env.local
NEXT_PUBLIC_BASE_URL=https://domainbaru.com
# Semua URL akan otomatis update!
```

### 4. **Environment Configuration**

#### File: `.env.example` (untuk reference)
- ✅ Template untuk team/deployment
- ✅ Dokumentasi environment variables

**Setup lokal:**
```bash
cp .env.example .env.local
# Edit .env.local dengan nilai yang sesuai
```

## 📋 Checklist SEO yang Sudah Optimal

- ✅ **Metadata lengkap** - Title, Description, Keywords, OG, Twitter
- ✅ **Canonical URL** - Set di layout.tsx
- ✅ **Schema.org** - LocalBusiness, Organisation, Service, FAQ
- ✅ **Robots.txt** - Allow all, point ke sitemap
- ✅ **Sitemap.xml** - URL homepage dengan priority
- ✅ **OpenGraph & Twitter Card** - Social sharing optimized
- ✅ **Mobile-friendly** - Next.js responsive design
- ✅ **Image alt text** - Semua image punya descriptive alt
- ✅ **Heading hierarchy** - H1 jelas, struktur heading proper
- ✅ **Config terpusat** - Tidak ada hardcoding

## 🎯 SEO yang Masih Bisa Ditingkatkan

### 1. **Content Optimization**
- [ ] Tambah keyword density check di setiap section
- [ ] Internal linking strategy (link ke halaman service, blog, FAQ)
- [ ] Rich content: guides, tips, how-to articles
- [ ] Target LSI keywords (variasi keyword organik)

### 2. **Performance Metrics**
- [ ] Image optimization: WebP format, lazy loading
- [ ] Core Web Vitals: LCP, FID, CLS
- [ ] CDN untuk image delivery
- [ ] Minify CSS/JS

Sudah bagus di Next.js, tapi bisa di-monitor via:
```bash
npm run build
```

### 3. **Technical SEO Lanjutan**
- [ ] Structured data untuk Product/Offer
- [ ] Author & Publisher markup
- [ ] Breadcrumb navigation
- [ ] Internal links anchor text optimization

### 4. **Local SEO**
- [ ] Google Business Profile optimization
- [ ] Local citations (Direktori bisnis)
- [ ] Reviews management & schema
- [ ] Local link building

### 5. **Analytics & Monitoring**
- [ ] Google Search Console integration
- [ ] Google Analytics 4 setup
- [ ] Conversion tracking
- [ ] A/B testing untuk CTA buttons

## 🔧 Cara Menggunakan Config

### Mengubah Base URL
```typescript
// File: .env.local
NEXT_PUBLIC_BASE_URL=https://newdomain.com
```

### Mengubah Warna
```typescript
// File: src/config/theme-config.ts
export const THEME = {
  colors: {
    accent: {
      main: '#FF6B35',  // Ubah warna di sini
      hover: '#E05A2C',
    },
    // ...
  }
}
```

### Menambah Service Baru
```typescript
// File: src/config/site-data.ts
export const PRICING = [
  { layanan: 'Layanan Baru', harga: 'Rp XXX' },
  // Schema otomatis include ini!
]
```

### Menambah Halaman Baru
```typescript
// File: src/app/sitemap.ts
return [
  // ...
  {
    url: getCanonicalUrl('/halaman-baru'),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
]
```

## 📱 File Structure Penting

```
src/
├── config/
│   ├── seo-config.ts        ← SEO metadata, URLs, config
│   ├── theme-config.ts      ← Colors, typography, spacing
│   ├── site-data.ts         ← Business info, content
│   └── whatsapp.ts
├── utils/
│   └── schema-generator.ts  ← JSON-LD schema builder
├── app/
│   ├── layout.tsx           ← Global metadata + canonical
│   ├── page.tsx             ← Home page dengan schema
│   ├── robots.ts            ← robots.txt generator
│   └── sitemap.ts           ← sitemap.xml generator
```

## ✨ Keuntungan Setup Ini

1. **DRY Principle** - Tidak ada duplicate config
2. **Easy Maintenance** - Edit 1 tempat untuk perubahan global
3. **Scalable** - Mudah tambah halaman/layanan baru
4. **SEO Ready** - Schema, robots, sitemap, canonical semua tercover
5. **Type Safe** - TypeScript untuk config validation
6. **Environment Safe** - Base URL dari env variable

## 🚀 Next Steps untuk Tingkatkan SEO Lebih Lanjut

1. **Setup Google Search Console**
   - Submit sitemap: https://lintangackediri.com/sitemap.xml
   - Monitor indexing & errors

2. **Setup Google Analytics 4**
   - Track user behavior & conversions
   - Monitor bounce rate & time on page

3. **Create Blog/Resource Pages**
   - Target long-tail keywords
   - Improve domain authority

4. **Get Backlinks**
   - Local directory submissions
   - Guest posting pada blog service AC

5. **Optimize Images**
   - Use WebP format
   - Add image SEO metadata

6. **Setup Breadcrumb Navigation**
   - Helps users & search engines
   - Improve SERP click-through rate

---

**Dibuat:** 2026-05-28
**Next Review:** Setelah 3 bulan operasi
