import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#ffffff',
          color: '#231f17',
          borderBottom: '16px solid #c9a24b',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              border: '3px dashed #c9a24b',
              borderRadius: 12,
              display: 'flex',
            }}
          />
          <div style={{ fontSize: 36, fontWeight: 600 }}>{site.name}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
            Leather made to your spec, shipped to your port
          </div>
          <div style={{ fontSize: 32, color: '#8a6516' }}>
            Finished leather, bags, wallets, belts, garments and footwear
          </div>
        </div>
      </div>
    ),
    size
  );
}
