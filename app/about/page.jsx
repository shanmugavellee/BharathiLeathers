import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import { breadcrumbLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About our leather manufacturing and export business',
  description: `About ${site.name}: an India-based leather manufacturer and exporter serving importers and brands.`,
  path: '/about',
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

export default function AboutPage() {
  return (
    <>
      <section className="section page-top">
        <div className="container narrow">
          <Breadcrumbs items={crumbs} />
          <h1>About {site.name}</h1>
          {/* TODO: replace this copy with your own story: founding year, location, team size, tannery or factory details. */}
          <p className="lead">
            We are a leather manufacturer in India, supplying finished leather and leather goods to importers and brands
            overseas.
          </p>
          <p>
            Our work starts with your specification. We develop a sample, agree the details with you, produce to the
            approved sample and handle the export paperwork, so the order reaches your port with the documents your
            customs broker expects.
          </p>
          <p>
            We are building long-term relationships with buyers in {site.markets.slice(0, 3).join(', ')} and other
            markets. If you are comparing suppliers, send us your specification and we will respond with a sample plan
            and a quotation.
          </p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn-primary">Request a quote</Link>
            <Link href="/products" className="btn btn-ghost">Browse products</Link>
          </div>
        </div>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
