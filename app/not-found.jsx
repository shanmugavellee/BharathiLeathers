import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section page-top">
      <div className="container narrow">
        <h1>Page not found</h1>
        <p className="lead">The page you are looking for does not exist or has moved.</p>
        <div className="btn-row">
          <Link href="/" className="btn btn-primary">Go to the homepage</Link>
          <Link href="/products" className="btn btn-ghost">Browse products</Link>
        </div>
      </div>
    </section>
  );
}
