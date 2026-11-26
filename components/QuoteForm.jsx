'use client';

import { useState } from 'react';
import { products } from '@/lib/products';

export default function QuoteForm({ defaultProduct = '', heading = 'Request a quote' }) {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: 'sending', message: 'Sending your enquiry…' });
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || 'Something went wrong.');
      form.reset();
      setStatus({ state: 'success', message: 'Enquiry sent. We reply with a quotation within one working day.' });
    } catch (err) {
      setStatus({ state: 'error', message: `${err.message} You can also email us directly.` });
    }
  }

  return (
    <form className="quote-form" onSubmit={onSubmit} noValidate={false}>
      <h2>{heading}</h2>
      <p className="form-note">Tell us what you need. Include quantity, leather type and target market if you know them.</p>

      <div className="field-row">
        <div className="field">
          <label htmlFor="qf-name">Your name</label>
          <input id="qf-name" name="name" type="text" autoComplete="name" required maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor="qf-company">Company</label>
          <input id="qf-company" name="company" type="text" autoComplete="organization" maxLength={160} />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="qf-email">Work email</label>
          <input id="qf-email" name="email" type="email" autoComplete="email" required maxLength={160} />
        </div>
        <div className="field">
          <label htmlFor="qf-country">Destination country</label>
          <input id="qf-country" name="country" type="text" autoComplete="country-name" maxLength={80} />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="qf-product">Product</label>
          <select id="qf-product" name="product" defaultValue={defaultProduct}>
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
            <option value="other">Other or custom</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="qf-qty">Estimated quantity</label>
          <input id="qf-qty" name="quantity" type="text" placeholder="e.g. 1,000 pieces or 5,000 sq ft" maxLength={80} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="qf-message">Requirements</label>
        <textarea id="qf-message" name="message" rows={5} required maxLength={3000} />
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="qf-website">Leave this field empty</label>
        <input id="qf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="btn btn-primary" disabled={status.state === 'sending'}>
        {status.state === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>

      <p className={`form-status form-${status.state}`} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
