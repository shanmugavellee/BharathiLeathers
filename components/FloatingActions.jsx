import Link from 'next/link';
import { site } from '@/lib/site';

// Sticky quote + WhatsApp shortcuts, visible on every page.
export default function FloatingActions() {
  return (
    <div className="floating" role="complementary" aria-label="Quick contact">
      <a
        className="btn btn-whatsapp btn-sm"
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Hello, I would like a quote for leather products.')}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <Link className="btn btn-primary btn-sm" href="/contact">
        Request a quote
      </Link>
    </div>
  );
}
