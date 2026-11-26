import { activeCredentials } from '@/lib/site';

// Shows only registrations marked active in lib/site.js.
export default function TrustBar() {
  if (!activeCredentials.length) return null;
  return (
    <section className="trustbar" aria-label="Registrations">
      <div className="container">
        <ul>
          {activeCredentials.map((c) => (
            <li key={c.key}>
              <strong>{c.label}</strong>
              <span>{c.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
