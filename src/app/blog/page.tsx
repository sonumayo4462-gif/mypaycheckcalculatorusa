import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: `${SITE_URL}/blog`,
    },
  ],
};

export const metadata: Metadata = {
  title: 'Paycheck Tax Blog - State Guides & Take-Home Pay Tips',
  description: 'Expert articles on USA paycheck taxes, state income tax guides, and personal finance tips. Learn how to calculate and maximize your take-home pay.',
  keywords: [
    'paycheck blog',
    'paycheck calculator guides',
    'state tax guides',
    'take home pay tips',
    'Texas tax guide',
    'California tax guide',
    'Washington tax guide',
    'Nevada paycheck guide',
    'Illinois tax guide',
    'Pennsylvania paycheck guide',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    url: '/blog',
    title: 'Paycheck Tax Blog - State Guides & Take-Home Pay Tips',
    description: 'Expert articles on USA paycheck taxes, state income tax guides, and personal finance tips. Learn how to calculate and maximize your take-home pay.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paycheck Tax Blog - State Guides & Take-Home Pay Tips',
    description: 'Expert insights on USA paycheck taxes and take-home pay.',
  },
};

const posts = [
  {
    title: 'Washington State Paycheck Tax Guide 2026: No Income Tax & Paid Leave',
    excerpt: 'Learn how Washington\'s 0% personal income tax, Paid Family and Medical Leave (PFML), and WA Cares Fund deductions affect your net pay.',
    href: '/blog/washington-state-tax-guide',
    tag: 'Washington',
    color: 'bg-emerald-500',
    date: '2026-11-21',
  },
  {
    title: 'Nevada Paycheck Tax Guide 2026: Zero Income Tax & Tip Regulations',
    excerpt: 'Comprehensive guide to Nevada take-home pay, federal withholdings, gaming and hospitality tip compliance, and cost of living advantages.',
    href: '/blog/nevada-paycheck-tax-guide',
    tag: 'Nevada',
    color: 'bg-amber-500',
    date: '2026-11-21',
  },
  {
    title: 'Illinois Paycheck Tax Guide 2026: Understanding the 4.95% Flat Tax',
    excerpt: 'Everything you need to know about Illinois\'s constitutional 4.95% flat state tax, standard exemptions, and Chicago payroll withholdings.',
    href: '/blog/illinois-flat-tax-paycheck-guide',
    tag: 'Illinois',
    color: 'bg-indigo-500',
    date: '2026-11-21',
  },
  {
    title: 'Pennsylvania Paycheck Tax Guide 2026: 3.07% Flat Tax & Local Wage Taxes',
    excerpt: 'Master Pennsylvania\'s lowest-in-the-nation 3.07% flat tax, Philadelphia wage taxes, Act 32 local EIT, and take-home pay calculations.',
    href: '/blog/pennsylvania-paycheck-tax-guide',
    tag: 'Pennsylvania',
    color: 'bg-blue-600',
    date: '2026-11-21',
  },
  {
    title: 'Texas Has No State Income Tax: Complete Guide 2026',
    excerpt: 'Discover how Texas\'s tax-friendly environment affects your paycheck and why so many Americans are moving to the Lone Star State.',
    href: '/blog/texas-no-state-income-tax',
    tag: 'Texas',
    color: 'bg-blue-500',
    date: '2026-01-15',
  },
  {
    title: 'California Paycheck Tax Guide for 2026',
    excerpt: 'Navigate California\'s progressive tax system. Learn about state disability insurance (SDI) and how it affects your take-home pay.',
    href: '/blog/california-tax-guide',
    tag: 'California',
    color: 'bg-green-500',
    date: '2026-01-20',
  },
  {
    title: 'California vs Texas: Which State Keeps More of Your Paycheck?',
    excerpt: 'A detailed comparison of take-home pay between California and Texas. See how much you could save by moving.',
    href: '/blog/california-vs-texas-taxes',
    tag: 'Comparison',
    color: 'bg-purple-500',
    date: '2026-02-01',
  },
];

const calculators = [
  { name: 'Texas Paycheck Calculator', href: '/texas', note: '0% State Tax' },
  { name: 'California Paycheck Calculator', href: '/california', note: 'Progressive Tax & SDI' },
  { name: 'Florida Paycheck Calculator', href: '/florida', note: '0% Personal Tax' },
  { name: 'Washington Paycheck Calculator', href: '/washington', note: '0% State Income Tax' },
  { name: 'Nevada Paycheck Calculator', href: '/nevada', note: '0% State Income Tax' },
  { name: 'Illinois Paycheck Calculator', href: '/illinois', note: '4.95% Flat State Tax' },
  { name: 'Pennsylvania Paycheck Calculator', href: '/pennsylvania', note: '3.07% Flat State Tax' },
  { name: 'New York Paycheck Calculator', href: '/new-york', note: 'State & NYC Tax' },
  { name: 'Overtime Calculator', href: '/overtime', note: '1.5x & 2.0x Rates' },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Paycheck Tax Blog &amp; Guides</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights on USA taxes, salaries, and personal finance. Learn how to maximize your take-home pay across different states.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.title} href={post.href} className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                <div className={`h-48 ${post.color} flex items-center justify-center`}>
                  <span className="text-white text-4xl font-bold">{post.tag}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  </div>
                  <span className="inline-block text-blue-600 font-semibold group-hover:underline">Read Article →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Calculators Interlink */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Calculate Your Take-Home Pay Now</h2>
            <p className="text-gray-600">Put our tax guides into practice with our free state-specific paycheck calculators.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {calculators.map((calc) => (
              <Link
                key={calc.name}
                href={calc.href}
                className="p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-colors group"
              >
                <div className="font-semibold text-gray-900 group-hover:text-blue-600">{calc.name}</div>
                <div className="text-xs text-gray-500 mt-1">{calc.note}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
