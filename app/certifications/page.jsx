import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { activeCredentials, site } from '@/lib/site';
import { breadcrumbLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Compliance, registrations and export documents',
  description:
    'Export registrations, product compliance testing and the documents that accompany every shipment: invoice, packing list, shipping bill, bill of lading and certificate of origin.',
  path: '/certifications',
  keywords: ['leather export documents', 'REACH leather testing', 'FOB CIF leather quote India'],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Compliance', path: '/certifications' },
];

export default function CompliancePage() {
  return (
    <>
      <section className="section page-top">
        <div className="container narrow">
          <Breadcrumbs items={crumbs} />
          <h1>Compliance, registrations and export documents</h1>
          <p className="lead">
            What we hold, what we test for, and the paperwork that travels with each shipment.
          </p>
        </div>
      </section>

      {activeCredentials.length > 0 && (
        <section className="section section-stone" aria-labelledby="reg-h">
          <div className="container narrow">
            <h2 id="reg-h">Registrations</h2>
            <dl className="terms">
              {activeCredentials.map((c) => (
                <div key={c.key}>
                  <dt>{c.label}</dt>
                  <dd>{c.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="test-h">
        <div className="container narrow">
          <h2 id="test-h">Product compliance and testing</h2>
          <p>
            Buyers in the European Union, United Kingdom and United States often ask for restricted-substance test
            reports, such as REACH limits on chromium VI, azo dyes and formaldehyde. When your market requires it, we
            arrange testing at an accredited laboratory and share the report with your order.
          </p>
          <p>
            If your brand needs supply from Leather Working Group audited tanneries, or social compliance audits such as
            BSCI or SEDEX, tell us at the enquiry stage so we plan the order around it.
          </p>
        </div>
      </section>

      <section className="section section-stone" aria-labelledby="docs-h">
        <div className="container narrow">
          <h2 id="docs-h">Export documents with every shipment</h2>
          <ul className="checklist">
            {site.terms.documents.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <h2>Trade terms</h2>
          <dl className="terms">
            <div><dt>Quotation</dt><dd>{site.terms.quoteFormats}</dd></div>
            <div><dt>Incoterms</dt><dd>Incoterms 2020, stated on every quote</dd></div>
            <div><dt>Payment</dt><dd>{site.terms.payment}</dd></div>
          </dl>
        </div>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
