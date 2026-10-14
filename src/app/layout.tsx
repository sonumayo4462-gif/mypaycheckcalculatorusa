import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paycheck Calculator 2026 - Free Take-Home Pay & Tax Calculator',
    description: 'Calculate your accurate take-home pay after federal, state, and FICA taxes.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <Head>
         {/* Google tag (gtag.js) */}
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-JKGRGEVH2T"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JKGRGEVH2T');
        </script>
      </Head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}