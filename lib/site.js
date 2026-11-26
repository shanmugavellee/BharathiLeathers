// ─────────────────────────────────────────────────────────────
// SINGLE PLACE TO EDIT YOUR BUSINESS DETAILS.
// Everything on the site (header, footer, SEO tags, JSON-LD) reads from here.
// ─────────────────────────────────────────────────────────────

const url = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com').replace(/\/$/, '');

export const site = {
  name: 'YourBrand Leathers', // TODO: replace
  legalName: 'YourBrand Leathers Private Limited', // TODO: replace
  url,
  locale: 'en_IN',
  tagline: 'Finished leather and leather goods, made to your spec',
  description:
    'India-based leather manufacturer and exporter of finished leather, bags, wallets, belts, garments and footwear. Private label and OEM, FOB and CIF quotes, export documentation handled.',

  email: 'export@example.com', // TODO
  phone: '+91 00000 00000', // TODO
  whatsapp: '910000000000', // TODO: country code + number, digits only

  // Leave fields empty until you are ready to publish your address. Empty address is omitted from structured data.
  address: {
    street: '',
    locality: '',
    region: '',
    postalCode: '',
    country: 'IN',
  },

  social: {
    linkedin: '', // e.g. https://www.linkedin.com/company/yourbrand
    instagram: '',
  },

  // Trust bar + Compliance page. Only items with active: true are shown.
  // Switch each to true ONLY after you hold the registration.
  credentials: [
    { key: 'gst', label: 'GST registered', detail: 'GSTIN shared with quotation', active: true },
    { key: 'iec', label: 'IEC holder', detail: 'Import Export Code issued by DGFT', active: false },
    { key: 'ad', label: 'AD Code registered', detail: 'Export payments through authorised dealer bank', active: false },
    { key: 'rcmc', label: 'CLE member (RCMC)', detail: 'Council for Leather Exports', active: false },
    { key: 'udyam', label: 'Udyam registered MSME', detail: 'Registered under the MSME ministry', active: false },
  ],

  markets: ['European Union', 'United Kingdom', 'United States', 'United Arab Emirates', 'Australia'],

  terms: {
    quoteFormats: 'FOB, CFR and CIF, in USD or EUR',
    payment: 'Advance payment or confirmed letter of credit for first orders',
    documents: [
      'Proforma and commercial invoice',
      'Packing list',
      'Shipping bill',
      'Bill of lading or airway bill',
      'Certificate of origin',
      'Test reports when the buyer requires them',
    ],
  },
};

export const activeCredentials = site.credentials.filter((c) => c.active);

export const hasAddress = Boolean(site.address.locality && site.address.region);
