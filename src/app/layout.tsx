import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mypaycheckusa.com'),
  title: {
    default: 'MyPayCheckUSA.com - Accurate USA Paycheck Calculator 2026',
    template: '%s | MyPayCheckUSA.com',
  },
  description: 'Calculate your real take-home pay in the USA with 2026 tax rules. Accurate state-wise Federal + State + FICA tax calculators for Texas, California, Florida, and New York.',
  keywords: ['paycheck calculator', 'take home pay calculator', 'salary calculator', 'tax calculator', 'hourly wage calculator', '2026 tax calculator'],
  authors: [{ name: 'MyPayCheckUSA' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mypaycheckusa.com',
    siteName: 'MyPayCheckUSA.com',
    title: 'MyPayCheckUSA.com - Accurate USA Paycheck Calculator 2026',
    description: 'Calculate your real take-home pay in the USA with 2026 tax rules. Free state-wise paycheck calculators.',
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
