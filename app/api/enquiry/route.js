// Receives quote enquiries from the form. Forwards them to ENQUIRY_WEBHOOK_URL when set.
// If no webhook is configured the enquiry is only logged on the server: set one before going live.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clip = (v, n) => String(v ?? '').trim().slice(0, n);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real visitors never fill this field.
  if (body?.website) return Response.json({ ok: true });

  const enquiry = {
    name: clip(body?.name, 120),
    company: clip(body?.company, 160),
    email: clip(body?.email, 160),
    country: clip(body?.country, 80),
    product: clip(body?.product, 80),
    quantity: clip(body?.quantity, 80),
    message: clip(body?.message, 3000),
  };

  if (!enquiry.name || !enquiry.message || !EMAIL_RE.test(enquiry.email)) {
    return Response.json({ ok: false, error: 'Please enter your name, a valid email and your requirements.' }, { status: 422 });
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...enquiry, receivedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error('[enquiry] delivery failed', err);
      return Response.json({ ok: false, error: 'We could not send your enquiry.' }, { status: 502 });
    }
  } else {
    console.log('[enquiry] no webhook configured', enquiry);
  }

  return Response.json({ ok: true });
}
