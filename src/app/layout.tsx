import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';

const inter = Inter({ subsets: ['latin'] });

const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-JKGRGEVH2T');
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Paycheck Calculator 2026 - Free Take-Home Pay & Tax Calculator | MyPayCheckUSA',
    template: '%s | MyPayCheckUSA',
  },
  description: 'Calculate your take-home pay with our free paycheck calculator. Accurate 2026 federal, state, and FICA tax calculations for hourly, weekly, and salaried workers across the USA.',
  keywords: [
    'paycheck calculator',
    'free paycheck calculator',
    'hourly paycheck calculator',
    'weekly paycheck calculator',
    'take home pay calculator',
    'salary calculator',
    'Florida paycheck calculator',
    'California paycheck calculator',
    'Texas paycheck calculator',
    'New York paycheck calculator',
    'Illinois paycheck calculator',
    '2026 tax calculator'
  ],
  authors: [{ name: 'MyPayCheckUSA' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'MyPayCheckUSA',
    title: 'Paycheck Calculator 2026 - Free Take-Home Pay & Tax Calculator',
    description: 'Calculate your accurate take-home pay after federal, state, and FICA taxes. Free state-wise paycheck calculators.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MyPayCheckUSA - Free Paycheck Calculator 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paycheck Calculator 2026 - Free Take-Home Pay & Tax Calculator',
    description: 'Calculate your accurate take-home pay after federal, state, and FICA taxes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script id="gtag-js" strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-JKGRGEVH2T" />
        <Script id="gtag-init" strategy="afterInteractive">{gtagScript}</Script>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}