import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import ProductCard from '@/components/ProductCard';
import ProductSwatch from '@/components/ProductSwatch';
import QuoteForm from '@/components/QuoteForm';
import { getProduct, products } from '@/lib/products';
import { breadcrumbLd, pageMetadata, productLd } from '@/lib/seo';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMetadata({
    title: `${product.name} manufacturer and exporter from India`,
    description: `${product.summary} HS code ${product.hs}. Private label, sampling and export documentation included.`,
    path: `/products/${product.slug}`,
    keywords: product.keywords,
  });
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: product.name, path: `/products/${product.slug}` },
  ];
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="section page-top">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <div className="product-hero">
            <ProductSwatch product={product} size="hero" priority />
            <div>
              <h1>{product.name}</h1>
              <p className="lead">{product.summary}</p>
              <p className="pcard-meta">HS code {product.hs}</p>
              <ul className="checklist checklist-tight">
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="btn-row">
                <a href="#enquire" className="btn btn-primary">Request a quote</a>
                <Link href="/private-label" className="btn btn-ghost">Private label</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-stone" aria-labelledby="specs-h">
        <div className="container narrow">
          <h2 id="specs-h">Specifications</h2>
          <dl className="terms">
            {product.specs.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section-ink" id="enquire">
        <div className="container narrow">
          <div className="form-wrap">
            <QuoteForm defaultProduct={product.slug} heading={`Request a quote for ${product.name.toLowerCase()}`} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="related-h">
        <div className="container">
          <h2 id="related-h">Other products</h2>
          <div className="pgrid">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={[productLd(product), breadcrumbLd(crumbs)]} />
    </>
  );
}
