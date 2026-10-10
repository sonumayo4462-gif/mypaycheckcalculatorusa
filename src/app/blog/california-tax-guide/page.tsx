import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'California Paycheck Tax Guide for 2026 | MyPayCheckUSA',
  description: 'Navigate California\'s progressive tax system. Learn about state disability insurance and how it affects your take-home pay.',
  keywords: ['california tax guide', 'california payroll tax', 'ca state tax', 'california take home pay'],
  alternates: {
    canonical: '/blog/california-tax-guide',
  },
  openGraph: {
    url: '/blog/california-tax-guide',
  },
};

export default function CaliforniaTaxGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-green-600">CA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">California Paycheck Tax Guide for 2026</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navigate California&#39;s progressive tax system. Learn about state disability insurance and how it affects your take-home pay.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              California has one of the most comprehensive and progressive personal income tax systems in the United States. Understanding how California payroll taxes work is essential for accurate financial planning, whether you&#39;re a resident or considering a move to the Golden State.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">California State Income Tax Brackets</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California&#39;s personal income tax is progressive, with rates ranging from 1% to 12.3% for regular income. The tax brackets for 2026 are:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>1% on income up to $10,412</li>
              <li>2% on income between $10,412 - $24,684</li>
              <li>4% on income between $24,684 - $38,959</li>
              <li>6% on income between $38,959 - $53,996</li>
              <li>8% on income between $53,996 - $67,907</li>
              <li>9.3% on income between $67,907 - $350,000</li>
              <li>10.3% on income between $350,000 - $500,000</li>
              <li>11.3% on income between $500,000 - $1,000,000</li>
              <li>12.3% on income over $1,000,000</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">California State Disability Insurance (SDI)</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California workers contribute 1.1% of their wages (up to $153,164 in 2026) to State Disability Insurance. SDI provides partial wage replacement for workers unable to work due to disability, and also funds Paid Family Leave benefits.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your California Take-Home Pay</h2>
          <Link href="/california" className="inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
            Use California Paycheck Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
