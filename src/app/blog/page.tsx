import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Paycheck Tax Tips and Guides | MyPayCheckUSA',
  description: 'Expert articles on USA paycheck taxes, state income tax guides, and personal finance tips. Learn how to maximize your take-home pay.',
  keywords: ['paycheck blog', 'tax tips', 'personal finance', 'state tax guides', 'take home pay'],
};

const posts = [
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
    excerpt: 'Navigate California\'s progressive tax system. Learn about state disability insurance and how it affects your take-home pay.',
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
  {
    title: 'Florida No Income Tax: Financial Benefits for Residents 2026',
    excerpt: 'Explore why Florida\'s lack of state income tax makes it a top destination for retirees and high-income earners.',
    href: '/blog/florida-no-income-tax',
    tag: 'Florida',
    color: 'bg-amber-500',
    date: '2026-02-10',
  },
  {
    title: 'New York Paycheck Tax Guide: NYC vs Upstate 2026',
    excerpt: 'Understand New York\'s complex tax system, including the difference between NYC and Upstate state taxes.',
    href: '/blog/new-york-tax-guide',
    tag: 'New York',
    color: 'bg-rose-500',
    date: '2026-02-20',
  },
  {
    title: 'How to Calculate Overtime Pay Correctly in 2026',
    excerpt: 'A complete guide to calculating overtime pay, including time and a half, double time, and holiday premium rates.',
    href: '/blog/how-to-calculate-overtime',
    tag: 'Overtime',
    color: 'bg-indigo-500',
    date: '2026-03-01',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Paycheck Tax Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights on USA taxes, salaries, and personal finance. Learn how to maximize your take-home pay.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.title} href={post.href} className="group">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all h-full">
                <div className={`h-48 ${post.color} flex items-center justify-center`}>
                  <span className="text-white text-4xl font-bold">{post.tag}</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="inline-block text-blue-600 font-semibold group-hover:underline">Read Article</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
