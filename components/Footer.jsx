import Link from 'next/link';
import { site, activeCredentials, hasAddress } from '@/lib/site';
import { products } from '@/lib/products';

export default function Footer() {
  const year = new Date().getFullYear();
  const { address } = site;
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p className="footer-text">{site.tagline}.</p>
          {hasAddress && (
            <address className="footer-text">
              {[address.street, address.locality, address.region, address.postalCode].filter(Boolean).join(', ')}
              <br />
              India
            </address>
          )}
        </div>

        <nav aria-label="Products">
          <h2 className="footer-h">Products</h2>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="footer-h">Company</h2>
          <ul>
            <li><Link href="/private-label">Private label and OEM</Link></li>
            <li><Link href="/certifications">Compliance and shipping</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Request a quote</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-h">Contact</h2>
          <ul>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
            <li><a href={`https://wa.me/${site.whatsapp}`} rel="noopener noreferrer" target="_blank">WhatsApp</a></li>
            {site.social.linkedin && (
              <li><a href={site.social.linkedin} rel="noopener noreferrer me" target="_blank">LinkedIn</a></li>
            )}
          </ul>
          {activeCredentials.length > 0 && (
            <p className="footer-text footer-creds">{activeCredentials.map((c) => c.label).join(', ')}</p>
          )}
        </div>
      </div>
      <div className="container footer-base">
        <p>&copy; {year} {site.legalName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
