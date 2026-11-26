import { site, hasAddress, activeCredentials } from './site';
import { products } from './products';

export const abs = (path = '/') => `${site.url}${path === '/' ? '' : path}`;

// Builds consistent per-page metadata: title, description, canonical, hreflang, Open Graph, Twitter.
export function pageMetadata({ title, description, path = '/', keywords, noindex = false }) {
  const image = { url: '/opengraph-image', width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` };
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
      languages: { 'en-IN': path, 'x-default': path },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

const sameAs = () => Object.values(site.social).filter(Boolean);

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: abs('/icon'),
    image: abs('/opengraph-image'),
    description: site.description,
    email: site.email,
    telephone: site.phone,
    ...(hasAddress
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: site.address.street || undefined,
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode || undefined,
            addressCountry: site.address.country,
          },
        }
      : {}),
    areaServed: site.markets,
    knowsAbout: ['Leather manufacturing', 'Leather exports', 'Private label leather goods', ...products.map((p) => p.name)],
    ...(activeCredentials.length
      ? {
          hasCredential: activeCredentials.map((c) => ({
            '@type': 'EducationalOccupationalCredential',
            name: c.label,
          })),
        }
      : {}),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.email,
        telephone: site.phone,
        availableLanguage: ['English'],
        areaServed: site.markets,
      },
    ],
    ...(sameAs().length ? { sameAs: sameAs() } : {}),
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function productLd(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.summary,
    category: `HS ${p.hs}`,
    url: abs(`/products/${p.slug}`),
    brand: { '@type': 'Brand', name: site.name },
    manufacturer: { '@id': `${site.url}/#organization` },
    additionalProperty: p.specs.map((s) => ({ '@type': 'PropertyValue', name: s.label, value: s.value })),
  };
}

export function itemListLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${site.name} product range`,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: abs(`/products/${p.slug}`),
      name: p.name,
    })),
  };
}

export function faqLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
