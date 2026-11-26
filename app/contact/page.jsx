import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import QuoteForm from '@/components/QuoteForm';
import { hasAddress, site } from '@/lib/site';
import { abs, breadcrumbLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact and request a quote',
  description: `Request a quotation from ${site.name}. Share your specification, quantity and destination and we reply within one working day.`,
  path: '/contact',
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
];

export default function ContactPage() {
  const { address } = site;
  const contactLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: abs('/contact'),
    about: { '@id': `${site.url}/#organization` },
  };

  return (
    <>
      <section className="section page-top">
        <div className="container split">
          <div>
            <Breadcrumbs items={crumbs} />
            <h1>Contact and request a quote</h1>
            <p className="lead">We reply with a quotation, MOQ and lead time within one working day.</p>
            <dl className="terms terms-contact">
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Message us</a></dd>
              </div>
              {hasAddress && (
                <div>
                  <dt>Address</dt>
                  <dd>{[address.street, address.locality, address.region, address.postalCode].filter(Boolean).join(', ')}, India</dd>
                </div>
              )}
            </dl>
          </div>
          <div className="form-wrap form-wrap-light">
            <QuoteForm heading="Send your enquiry" />
          </div>
        </div>
      </section>
      <JsonLd data={[breadcrumbLd(crumbs), contactLd]} />
    </>
  );
}
