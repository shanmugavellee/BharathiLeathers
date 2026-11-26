import ProductCard from '@/components/ProductCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { products } from '@/lib/products';
import { breadcrumbLd, itemListLd, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Leather products for export: leather, bags, wallets, belts, garments, footwear',
  description:
    'Browse leather products made in India for export: finished leather, bags, wallets and small goods, belts, garments and footwear. Private label available.',
  path: '/products',
  keywords: ['leather products exporter India', 'leather goods manufacturer', 'wholesale leather products'],
});

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
];

export default function ProductsPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <h1>Leather products for export</h1>
        <p className="lead">
          Every product is made to your pattern, leather and branding. Open a product to see specifications, then send
          an enquiry for a sample and quotation.
        </p>
        <div className="pgrid">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
      <JsonLd data={[breadcrumbLd(crumbs), itemListLd()]} />
    </section>
  );
}
