import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import Process from '@/components/Process';
import { breadcrumbLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Private label and OEM leather manufacturing from India',
  description:
    'Private label and OEM leather bags, wallets, belts, garments and footwear made to your tech pack, with your labels and packaging. Sampling before bulk production.',
  path: '/private-label',
  keywords: ['private label leather manufacturer', 'OEM leather goods India', 'custom leather products wholesale'],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Private label', path: '/private-label' },
];

export default function PrivateLabelPage() {
  return (
    <>
      <section className="section page-top">
        <div className="container narrow">
          <Breadcrumbs items={crumbs} />
          <h1>Private label and OEM leather manufacturing</h1>
          <p className="lead">
            Bring your design and your brand. We make the product to your specification and pack it the way your
            customers expect to receive it.
          </p>
        </div>
      </section>

      <section className="section section-stone" aria-labelledby="need-h">
        <div className="container split">
          <div>
            <h2 id="need-h">What we need from you</h2>
            <ul className="checklist">
              <li>A tech pack, a reference sample or a clear sketch with measurements</li>
              <li>Leather type, finish and colour, as a swatch or colour reference</li>
              <li>Hardware, lining and trims, or permission for us to propose options</li>
              <li>Logo files and label artwork</li>
              <li>Target quantity, destination country and delivery window</li>
            </ul>
          </div>
          <div>
            <h2>What we do</h2>
            <ul className="checklist">
              <li>Develop a sample and revise it with you until it is approved</li>
              <li>Apply your branding: embossing, foil, laser engraving, woven labels, hang tags</li>
              <li>Pack to your market: poly bags, dust bags, gift boxes, retail cartons</li>
              <li>Check bulk production against the approved sample</li>
              <li>Prepare the export documents and coordinate shipping</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pl-process-h">
        <div className="container">
          <div className="section-head">
            <h2 id="pl-process-h">From specification to shipment</h2>
          </div>
          <Process />
          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="btn btn-primary">Send your tech pack</Link>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
