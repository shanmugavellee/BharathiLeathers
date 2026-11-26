import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ProductSwatch from '@/components/ProductSwatch';
import TrustBar from '@/components/TrustBar';
import Process from '@/components/Process';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/JsonLd';
import { products } from '@/lib/products';
import { faqs } from '@/lib/faqs';
import { faqLd, itemListLd } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = {
  alternates: { canonical: '/', languages: { 'en-IN': '/', 'x-default': '/' } },
};

export default function HomePage() {
  const heroSwatches = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Leather made to your spec, shipped to your port</h1>
            <p className="lead">
              We manufacture finished leather, bags, wallets, belts, garments and footwear for importers and brands.
              Send a specification and receive a sample and a FOB or CIF quote.
            </p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-primary">Request a quote</Link>
              <Link href="/products" className="btn btn-ghost">Browse products</Link>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Quotes in</dt>
                <dd>{site.terms.quoteFormats}</dd>
              </div>
              <div>
                <dt>Payment</dt>
                <dd>{site.terms.payment}</dd>
              </div>
            </dl>
          </div>

          <div className="hero-swatches" aria-hidden="true">
            {heroSwatches.map((p, i) => (
              <div key={p.slug} className={`hero-sw hero-sw-${i + 1}`}>
                <ProductSwatch product={p} size="hero" priority={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Products */}
      <section className="section" aria-labelledby="products-h">
        <div className="container">
          <div className="section-head">
            <h2 id="products-h">Products we make for export</h2>
            <p>Six product lines, each made to your pattern, leather and branding.</p>
          </div>
          <div className="pgrid">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="section section-stone" aria-labelledby="handle-h">
        <div className="container split">
          <div className="section-head">
            <h2 id="handle-h">We handle the export work</h2>
            <p>
              One supplier for the product and the paperwork, so your team spends time on design and sales, not on
              chasing documents.
            </p>
            <Link href="/private-label" className="text-link">See private label and OEM</Link>
          </div>
          <ul className="checklist">
            <li><strong>Private label and OEM.</strong> Your tech pack, your labels, your packaging.</li>
            <li><strong>Sampling before production.</strong> Approve the development sample first.</li>
            <li><strong>Export-ready quotes.</strong> {site.terms.quoteFormats}, stated under Incoterms 2020.</li>
            <li><strong>Documentation.</strong> Invoice, packing list, shipping bill, bill of lading and certificate of origin.</li>
            <li><strong>Compliance support.</strong> Test reports arranged at accredited labs when your market requires them.</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section" aria-labelledby="process-h">
        <div className="container">
          <div className="section-head">
            <h2 id="process-h">How an order works</h2>
            <p>From first enquiry to shipment in five steps.</p>
          </div>
          <Process />
        </div>
      </section>

      {/* Markets and terms */}
      <section className="section section-stone" aria-labelledby="terms-h">
        <div className="container split">
          <div className="section-head">
            <h2 id="terms-h">Markets and trade terms</h2>
            <p>We ship to importers and brands in:</p>
            <p className="markets">{site.markets.join(', ')}</p>
            <Link href="/certifications" className="text-link">Compliance and export documents</Link>
          </div>
          <dl className="terms">
            <div><dt>Quotation</dt><dd>{site.terms.quoteFormats}</dd></div>
            <div><dt>Incoterms</dt><dd>Incoterms 2020, stated on every quote</dd></div>
            <div><dt>Payment</dt><dd>{site.terms.payment}</dd></div>
            <div><dt>Documents</dt><dd>{site.terms.documents.join(', ')}</dd></div>
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-h">
        <div className="container narrow">
          <div className="section-head">
            <h2 id="faq-h">Questions buyers ask</h2>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-ink" id="quote" aria-labelledby="quote-cta-h">
        <div className="container split">
          <div className="section-head">
            <h2 id="quote-cta-h">Send us your specification</h2>
            <p>
              Share what you need and we reply with a quotation, MOQ and lead time within one working day. You can
              also write to <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
          <div className="form-wrap">
            <QuoteForm heading="Request a quote" />
          </div>
        </div>
      </section>

      <JsonLd data={[faqLd(faqs), itemListLd()]} />
    </>
  );
}
