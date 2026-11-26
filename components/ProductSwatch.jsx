import { useId } from 'react';
import Image from 'next/image';

// A generated leather swatch: base colour, grain texture and a stitched edge.
// If the product has a real photo (product.image), that is used instead.
export default function ProductSwatch({ product, size = 'card', priority = false }) {
  const rawId = useId();
  const id = `sw${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;
  const [c1, c2] = product.colors;
  const label = `${product.name} leather swatch`;

  if (product.image) {
    return (
      <div className={`swatch swatch-${size}`}>
        <Image
          src={product.image}
          alt={`${product.name} made in India for export`}
          fill
          sizes={size === 'hero' ? '(max-width: 900px) 90vw, 480px' : '(max-width: 700px) 90vw, 360px'}
          priority={priority}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div className={`swatch swatch-${size}`}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} focusable="false">
        <defs>
          <linearGradient id={`${id}g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c2} />
            <stop offset="1" stopColor={c1} />
          </linearGradient>
          <filter id={`${id}n`} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={product.seed} result="noise" />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.9 0.9 0.9 0 -0.85"
            />
          </filter>
          <filter id={`${id}c`} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035 0.05" numOctaves="2" seed={product.seed + 1} result="crease" />
            <feColorMatrix
              in="crease"
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0.5 0.5 0.5 0 -0.62"
            />
          </filter>
        </defs>
        <rect width="400" height="300" fill={`url(#${id}g)`} />
        <rect width="400" height="300" filter={`url(#${id}c)`} opacity="0.55" />
        <rect width="400" height="300" filter={`url(#${id}n)`} opacity="0.75" />
        <rect
          x="14"
          y="14"
          width="372"
          height="272"
          rx="8"
          fill="none"
          stroke="rgba(255,244,225,0.7)"
          strokeWidth="2"
          strokeDasharray="9 7"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
