import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MyPayCheckUSA - Paycheck Calculator 2026',
    short_name: 'MyPayCheckUSA',
    description: 'Free USA paycheck calculator to estimate take-home pay with 2026 federal, state, and FICA taxes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
