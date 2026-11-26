import { site } from '@/lib/site';

export default function manifest() {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#c9a24b',
    icons: [{ src: '/icon', sizes: '32x32', type: 'image/png' }],
  };
}
