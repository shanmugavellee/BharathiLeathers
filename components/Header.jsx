'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { site } from '@/lib/site';

const links = [
  { href: '/products', label: 'Products' },
  { href: '/private-label', label: 'Private label' },
  { href: '/certifications', label: 'Compliance' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
            <rect x="2" y="2" width="28" height="28" rx="6" fill="currentColor" />
            <rect x="6.5" y="6.5" width="19" height="19" rx="3.5" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2.4" strokeLinecap="round" />
          </svg>
          <span>{site.name}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav id="primary-nav" className={`primary-nav${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul>
            {links.map((l) => {
              const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <li key={l.href}>
                  <Link href={l.href} aria-current={active ? 'page' : undefined} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/contact" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Request a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
