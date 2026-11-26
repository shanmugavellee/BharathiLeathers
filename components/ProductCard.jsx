import Link from 'next/link';
import ProductSwatch from './ProductSwatch';

export default function ProductCard({ product }) {
  return (
    <article className="pcard">
      <Link href={`/products/${product.slug}`} className="pcard-link">
        <ProductSwatch product={product} />
        <h3>{product.name}</h3>
        <p>{product.short}</p>
        <span className="pcard-meta">HS code {product.hs}</span>
      </Link>
    </article>
  );
}
